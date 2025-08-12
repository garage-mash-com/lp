import React, { useState, useEffect } from 'react'
import './HeroSlider.css'

interface SlideData {
  id: number
  title: string
  subtitle: string
  backgroundImage: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "大切に乗られた愛車だから、\nどこよりも親切に買い取ります。",
    subtitle: "お客様に寄り添う、安心の査定。まずはお気軽にご相談ください。",
    backgroundImage: "url('src/assets/bg1.jpg')"
  },
  {
    id: 2,
    title: "愛車の価値を\n最大限に評価します。",
    subtitle: "経験豊富なプロの査定士が、お車の隠れた価値まで見つけ出します。",
    backgroundImage: "url('src/assets/bg2.jpg')"
  },
  {
    id: 3,
    title: "お客様ファーストの\n安心サービス。",
    subtitle: "駆け引きなしの正直価格で、信頼の車買取をお約束いたします。",
    backgroundImage: "url('src/assets/bg3.jpg')"
  }
]

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5秒間隔でスライド切り替え

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <h1>{slide.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < slide.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}</h1>
              <p>{slide.subtitle}</p>
              <a href="https://lin.ee/dHbAsr2" className="cta-button-large" target="_blank" rel="noopener noreferrer">
                <span>公式LINEから無料査定</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow slider-arrow-prev" onClick={prevSlide} aria-label="前のスライド">
        &#8249;
      </button>
      <button className="slider-arrow slider-arrow-next" onClick={nextSlide} aria-label="次のスライド">
        &#8250;
      </button>

      {/* Slide Indicators */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
