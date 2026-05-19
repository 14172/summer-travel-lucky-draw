export default function PrizeCards() {
  const cards = [
    "北海道雙人遊",
    "沖繩住宿券",
    "東京迪士尼優惠",
    "韓國滑雪團折扣",
  ];

  return (
    <div>
      <h2 className="section-title">熱門旅遊優惠</h2>

      <div className="card-grid">
        {cards.map((item, index) => (
          <div className="travel-card" key={index}>
            <div className="card-image" />

            <div className="card-content">
              <h3>{item}</h3>

              <p>
                限時優惠活動，打造高轉換旅遊導購頁面。
              </p>

              <button>查看行程</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}