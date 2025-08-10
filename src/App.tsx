import './App.css'
import { DialogueIcon, PriceIcon, SpeedIcon } from './components/icons'

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="/" className="logo">Garage MASH</a>
          <a href="https://lin.ee/dHbAsr2" className="cta-button" target="_blank" rel="noopener noreferrer">
            <span>公式LINEから無料査定</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>大切に乗られた愛車だから、<br />どこよりも親切に買い取ります。</h1>
          <p>お客様に寄り添う、安心の査定。まずはお気軽にご相談ください。</p>
          <a href="https://lin.ee/dHbAsr2" className="cta-button-large" target="_blank" rel="noopener noreferrer">
            <span>公式LINEから無料査定</span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>ガレージ・マッシュが選ばれる<br />3つの安心</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <DialogueIcon />
              </div>
              <h3>丁寧な対話と査定</h3>
              <p>愛車の良いところをしっかり評価。お客様が大切にしてきた想いも査定額に反映できるよう、丁寧にお話をお伺いし、査定内容も分かりやすくご説明します。</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <PriceIcon />
              </div>
              <h3>駆け引きなしの正直価格</h3>
              <p>最初から正直な買取価格をご提示します。お客様を不安にさせるような駆け引きは一切行いません。安心してお任せください。</p>
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
          <h2>カンタン4ステップ！愛車の買取の流れ</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h3>お申し込み</h3>
              <p>公式LINEから、お気軽にご連絡ください。</p>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h3>査定日の調整</h3>
              <p>担当者からご連絡し、ご都合の良い査定日時を調整します。</p>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h3>実車査定</h3>
              <p>ご自宅などご指定の場所まで伺い、無料で査定いたします。</p>
            </div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h3>ご契約・お支払い</h3>
              <p>査定額にご納得いただけましたらご契約。お支払日をお約束します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>お客様からの声</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <p className="testimonial-text">"初めての車売却で不安でしたが、とても親切に対応していただき安心しました。査定額も満足です！"</p>
              <p className="testimonial-author">- A様 (プリウス売却)</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">"LINEでのやり取りがスムーズで、忙しい合間でも簡単に手続きできました。また利用したいです。"</p>
              <p className="testimonial-author">- B様 (ハリアー売却)</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">"何社か見積もりを取りましたが、一番高い価格を提示してくれました。説明も丁寧で信頼できるお店です。"</p>
              <p className="testimonial-author">- C様 (アルファード売却)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>最近の買取実績</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h3>トヨタ・ハリアー</h3>
              <p>2020年式 / 30,000km</p>
              <p className="price">買取価格: 280万円</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h3>ホンダ・N-BOX</h3>
              <p>2022年式 / 5,000km</p>
              <p className="price">買取価格: 150万円</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h3>スズキ・ジムニー</h3>
              <p>2019年式 / 45,000km</p>
              <p className="price">買取価格: 180万円</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta-section">
        <div className="container">
          <h2>さっそく愛車の価値をチェック</h2>
          <p>無理な営業は一切いたしません。まずはお気軽にご相談ください。</p>
          <a href="https://lin.ee/dHbAsr2" className="cta-button-large" target="_blank" rel="noopener noreferrer">
            <span>公式LINEから無料査定</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="representative-info">
            <div className="representative-photo"></div>
            <div className="representative-details">
              <h3>株式会社 D-MASH LINE (Garage MASH)</h3>
              <p>代表者: 佐藤 拓哉</p>
            </div>
          </div>
          <div className="company-details">
            <p>〒059-0922 北海道白老郡白老町萩野342-188</p>
            <p>古物商許可番号: 北海道公安委員会 第101230001605号</p>
            <p>&copy; 2025 D-MASH LINE Co., Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
