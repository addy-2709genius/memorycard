import React, { useState } from "react";
import "./index.css";

const emojis = ["🐶", "🐱", "🐰", "🐹", "🐻", "🐼", "🦊", "🐯", "🦁", "🐷", "🐵", "🐸", "🐮", "🐭", "🐒"];
const pairs = [...emojis, ...emojis].slice(0, 25).sort(() => Math.random() - 0.5);

const App = () => {
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleCardClick = (index) => {
    if (flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (pairs[first] === pairs[second]) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    } else {
      setFlipped(newFlipped);
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Skills Used</h2>
        <ul>
          <li>React.js</li>
          <li>CSS3</li>
          <li>Animations</li>
          <li>State Management</li>
          <li>Flexbox & Grid</li>
        </ul>
      </aside>

      <div className="main-content">
        <h1 className="title">Memory Card Game</h1>
        <p className="guide">
          🎯 Match all pairs of pet emojis!<br />
          🕹️ Click on two cards to reveal them. <br />
          🔥 Try to remember their positions and find all matches.
        </p>

        <div className="grid">
          {pairs.map((emoji, index) => (
            <div
              key={index}
              className={`card ${flipped.includes(index) || matched.includes(index) ? "flipped" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">{emoji}</div>
                <div className="card-back"></div>
              </div>
            </div>
          ))}
        </div>

        <footer className="footer">
          <a href="https://github.com/addy-2709genius" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
          </a>
          <a href="https://www.instagram.com/cntrlaadi/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="icon" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
