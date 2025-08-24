import FaqItem from './components/FaqItem'
import HeroSlider from './components/HeroSlider'
import PortfolioItem from './components/PortfolioItem'
import './App.css'
import { DialogueIcon, PriceIcon, ShieldIcon, SpeedIcon } from './components/icons'
import meIcon from './assets/me.jpg'
import portfolio1Image from './assets/portfolio1.jpg'
import portfolio2Image from './assets/portfolio2.jpg'
import portfolio3Image from './assets/portfolio3.jpg'
import portfolio4Image from './assets/portfolio4.jpg'
import portfolio5Image from './assets/portfolio5.jpg'
import portfolio6Image from './assets/portfolio6.jpg'
import portfolio7Image from './assets/portfolio7.jpg'
import portfolio8Image from './assets/portfolio8.jpg'
import step1Image from './assets/step1.png'
import step2Image from './assets/step2.png'
import step3Image from './assets/step3.png'
import step4Image from './assets/step4.png'

function App() {
  const portfolioItems = [
    {
      image: portfolio6Image,
      alt: "トヨタ・ルミオン",
      title: "トヨタ・ルミオン",
      specs: "平成26年式 / 140,000km",
      price: "15万円"
    },
    {
      image: portfolio5Image,
      alt: "トヨタ・ヴィッツ",
      title: "トヨタ・ヴィッツ",
      specs: "平成18年式 / 150,000km",
      price: "20万円"
    },
    {
      image: portfolio3Image,
      alt: "スズキ・ワゴンR",
      title: "スズキ・ワゴンR",
      specs: "平成24年式 / 60,000km",
      price: "25万円"
    },
    {
      image: portfolio7Image,
      alt: "トヨタ・アクア",
      title: "トヨタ・アクア",
      specs: "平成24年式 / 90,000km",
      price: "60万円"
    },
    {
      image: portfolio4Image,
      alt: "ホンダ・NBOXカスタム",
      title: "ホンダ・NBOXカスタム",
      specs: "平成26年式 / 42,000km",
      price: "70万円"
    },
    {
      image: portfolio8Image,
      alt: "ホンダ・ヴェゼル",
      title: "ホンダ・ヴェゼル",
      specs: "平成27年式 / 85,000km",
      price: "75万円"
    },
    {
      image: portfolio1Image,
      alt: "トヨタ・アルファード HV",
      title: "トヨタ・アルファード HV",
      specs: "平成24年式 / 120,000Km",
      price: "128万円"
    },
    {
      image: portfolio2Image,
      alt: "トヨタ・ハリアー",
      title: "トヨタ・ハリアー",
      specs: "平成27年式 / 98,000km",
      price: "150万円"
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="/" className="logo">D-MASH</a>
          <div className="header-buttons">
            <a href="tel:03-5650-4803" className="cta-button phone-button">
              <span>今すぐ電話で相談</span>
            </a>
            <a href="https://lin.ee/dHbAsr2" className="cta-button" target="_blank" rel="noopener noreferrer">
              <span>公式LINEから無料査定</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>ディーマッシュが選ばれる<br />4つの安心🛡️</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <DialogueIcon />
              </div>
              <h3>丁寧な対話と査定</h3>
              <p>愛車の良いところをしっかりと評価。お客様が大切にしてきた想いも査定額に反映できるよう、丁寧にお話をお伺いし、査定内容も分かりやすくご説明します。</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <PriceIcon />
              </div>
              <h3>駆け引き一切なしの正直価格</h3>
              <p>最初から正直な買取価格をご提示します。お客様を不安にさせるような駆け引きは一切行いません。安心してお任せください。</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <ShieldIcon />
              </div>
              <h3>引き取り後の減額なし</h3>
              <p>一度査定額が確定したら、引き取り後に「やっぱり〇〇が…」などの減額交渉は一切いたしません。お約束した金額を最後まで守ります。</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <SpeedIcon />
              </div>
              <h3>迅速・簡単な手続き</h3>
              <p>面倒な書類手続きも手厚くサポート。専門スタッフが丁寧にご案内しますので、初めての方でもスムーズな売却が実現します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="flow">
        <div className="container">
          <h2>愛車の買取の流れ📋</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h3>お申し込み</h3>
              <img src={step1Image} alt="お申し込み" className="flow-step-image" />
              <p>公式LINEから、お気軽にご連絡ください。</p>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h3>査定日の調整</h3>
              <img src={step2Image} alt="査定日の調整" className="flow-step-image" />
              <p>担当者からご連絡し、ご都合の良い査定日時を調整します。</p>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h3>実車査定</h3>
              <img src={step3Image} alt="実車査定" className="flow-step-image" />
              <p>ご自宅などご指定の場所まで伺い、無料で査定いたします。</p>
            </div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h3>ご契約・お支払い</h3>
              <img src={step4Image} alt="ご契約・お支払い" className="flow-step-image" />
              <p>査定額にご納得いただけましたらご契約。お支払日をお約束します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>お客様からの声💬</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <p className="testimonial-text">"初めての車売却で不安でしたが、とても親切に対応していただき安心しました。査定額も満足です！"</p>
              <p className="testimonial-author">- S.S様 (プリウス売却)</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">"LINEでのやり取りがスムーズで、忙しい合間でも簡単に手続きできました。また利用したいです。"</p>
              <p className="testimonial-author">- K.T様 (ハリアー売却)</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">"何社か見積もりを取りましたが、一番高い価格を提示してくれました。説明も丁寧で信頼できるお店です。"</p>
              <p className="testimonial-author">- M.Y様 (アルファード売却)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>最近の買取実績🚗</h2>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                image={item.image}
                alt={item.alt}
                title={item.title}
                specs={item.specs}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>よくある質問❓</h2>
          <div className="faq-grid">
            <FaqItem
              question="査定は本当に無料ですか？"
              answer="はい、完全無料です。出張査定や査定後のキャンセルでも費用は一切かかりません。"
            />
            <FaqItem
              question="どんな車でも買い取ってもらえますか？"
              answer="国産車、輸入車問わず、幅広い車種の買取が可能です。事故車や不動車でも、まずはお気軽にご相談ください。"
            />
            <FaqItem
              question="査定時間はどれくらいかかりますか？"
              answer="お車の状態にもよりますが、通常30分〜1時間程度で完了します。お忙しい方でも、ご都合に合わせて柔軟に対応いたします。夜間の査定対応も可能ですので、お仕事帰りでもご安心ください。"
            />
            <FaqItem
              question="売却に必要な書類は何ですか？"
              answer="自動車検査証（車検証）、自賠責保険証明書、リサイクル券、印鑑登録証明書、実印などが必要です。詳しくは担当者が丁寧にご案内します。"
            />
            <FaqItem
              question="売却に手数料はかかりますか？"
              answer="いいえ、手数料はかかりません。名義変更にかかる諸費用や車両を引き上げるための陸送費も弊社が負担しますので、お客様の費用負担はございません。"
            />
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section id="area" className="area">
        <div className="container">
          <h2>対応エリア🗺️</h2>
          <div className="area-map-container">
            <div className="area-list">
              <div className="area-item area-hokkaido">北海道</div>
              <div className="area-item area-tokyo">東京都</div>
              <div className="area-item area-kanagawa">神奈川県</div>
              <div className="area-item area-saitama">埼玉県</div>
              <div className="area-item area-chiba">千葉県</div>
              <div className="area-item area-gunma">群馬県</div>
              <div className="area-item area-tochigi">栃木県</div>
              <div className="area-item area-ibaraki">茨城県</div>
              <div className="area-item area-yamanashi">山梨県</div>
            </div>
          </div>
          <p className="area-note">※上記以外の地域の方も、お気軽にご相談ください。</p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta-section">
        <div className="container">
          <h2>さっそく愛車の価値をチェック👍</h2>
          <p>無理な営業は一切いたしません。まずはお気軽にご相談ください。</p>
          <div className="cta-buttons">
            <a href="tel:03-5650-4803" className="cta-button-large phone-button">
              <span>今すぐ電話で相談</span>
            </a>
            <a href="https://lin.ee/dHbAsr2" className="cta-button-large" target="_blank" rel="noopener noreferrer">
              <span>公式LINEから無料査定</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="representative-info">
            <div className="representative-photo">
              <img src={meIcon} alt="会社アイコン" />
            </div>
            <div className="representative-details">
              <h3>株式会社 D-MASH LINE (Garage MASH)</h3>
              <p>代表者: 佐藤 拓哉</p>
            </div>
          </div>
          <div className="company-details">
            <p>〒059-0922 北海道白老郡白老町萩野342-188</p>
            <p>古物商許可番号: 北海道公安委員会 第101230001605号</p>
            <p><a href="https://dmash-line.com/" target="_blank" rel="noopener noreferrer">会社ホームページ</a></p>
            <p>&copy; 2025 D-MASH LINE Co., Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
