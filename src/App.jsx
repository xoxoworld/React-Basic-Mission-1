import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Add, Sub } from "./components/Math";
export const PI = 3.14;

//구조 분해 할당
const product = { title: "노트북1", price: "2500000" };
// const title = product.title;
// const price = product.price;
const { title, price } = product; //구조분해 할당
console.log(title, price);

// function ProductCard(props) {
// props.title, props.price
function ProductCard({ title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
function Counter() {
  /*
  const data = useState(0); //초기값 0 설정, [0, 함수]  [초기값, 변경함수]
  const count = data[0];
  const setCount = data[1];
  */
  const [count, setCount] = useState(0);

  return (
    <>
      {console.log("코드 생성")}
      <p>현재값: {count}</p>
      <button
        onClick={() => {
          console.log("클릭");
          setCount(count + 1);
          console.log(count);
        }}
      >
        +1
      </button>
    </>
  );
}

function InputBox() {
  //초기값 생성
  const [msg, setMsg] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    alert(`${msg}님 반갑습니다.`);
  };
  return (
    <form onSubmit={handleSubmit}>
      이름:
      <input
        type="text"
        onChange={e => {
          console.log(e.target.value);
          setMsg(e.target.value);
        }}
      />
      {/* <p>{msg}</p> */}
      <button>전송</button>
    </form>
  );
}

function App() {
  // function handleClick() {
  //   alert("버튼이 클릭됨!");
  // }
  const handleClick = () => {
    alert("버튼이 클릭됨!");
  };
  return (
    <div>
      <Header title="myshop" />
      {Add(10, 20)}
      {Sub(20, 10)}
      <ProductCard title="노트북1" price="2,500,000원" />
      <ProductCard title="노트북2" price="1,500,000원" />
      <ProductCard title="노트북3" price="1,000,000원" />
      <hr />
      <Counter />
      <hr />
      <button onClick={handleClick}>입력</button>
      <hr />
      <InputBox />
      <Footer />
    </div>
  );
}

export default App; //기본 내보내기
