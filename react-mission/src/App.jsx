import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  // 변수명에 상품 정보 할당
  const name = "무선 키보드";
  const price = 39000;
  const brand = "EZTECH";

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="main-title">React Mission</h1>
        <p className="sub-title">Props를 이용한 데이터 전달 및 화면 출력</p>
      </header>

      <main className="app-main">
        <div className="mission-card-wrapper">
          <p className="card-label">상품 정보 카드 (Card Component)</p>
          {/* Card 컴포넌트에 props 속성을 이용하여 데이터 전달 */}
          <Card name={name} price={price} brand={brand} />
        </div>
      </main>

      <footer className="app-footer">
        <p className="footer-text">EZTECH Product Showcase</p>
      </footer>
    </div>
  );
}

export default App;
