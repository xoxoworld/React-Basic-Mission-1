const Header = ({ title }) => {
  const name = "홍길동";
  return (
    <>
      <header>
        {console.log("test")}
        <h1>{title}</h1>
      </header>
      <div>{`${name} 님 반갑습니다`}</div>
      <button
        onClick={() => {
          alert("안녕");
        }}
      >
        안녕
      </button>
    </>
  );
};
export default Header; //기본 내보내기
