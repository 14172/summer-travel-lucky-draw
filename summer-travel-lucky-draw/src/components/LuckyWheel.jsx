import { useState } from "react";
import "./LuckyWheel.css";

const prizes = [
  "頭獎 日本機票",
  "二等獎 住宿升等",
  "三等獎 旅遊金",
  "四等獎 行李箱",
  "五等獎 折價券",
  "六等獎 住宿券",
  "七等獎 咖啡券",
  "抱歉，請下次再來",
];
const wheelNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

export default function LuckyWheel() {
  const [rotate, setRotate] = useState(0);
  const [result, setResult] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const random = Math.round(Math.random() * prizes.length);

    // 每格角度
    const slice = 360 / prizes.length;

    const targetDeg = 360 - (random * slice + slice * 0.35);

    // 多轉幾圈
    const totalDeg = rotate + 360 * 6 + targetDeg;

    setRotate(totalDeg);

    // 取得最後停止角度
    const normalized = ((totalDeg % 360) + 360) % 360;

    const winningIndex =
      Math.round(((360 - normalized) % 360) / slice) % prizes.length;

    setTimeout(() => {
      setResult(prizes[winningIndex]);
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <section className="wheel-wrapper">
      <h2 className="wheel-title">幸運轉盤抽獎</h2>

      <div className="wheel-container">
        <div className="pointer"></div>

        <div
          className="wheel"
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {[...Array(8)].map((_, index) => (
            <span key={index} style={{ "--i": index }}></span>
          ))}
          輪盤中間數字
          <div className="number">
            {wheelNumbers.map((item, index) => (
              <div className="label" key={index} style={{ "--i": index }}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="spinBtn" onClick={spin}>
          SPIN
        </button>
      </div>

      {result && <div className="result">恭喜獲得：{result} </div>}
    </section>
  );
}
