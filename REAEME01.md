# JSX 문법(https://react.dev/learn#writing-markup-with-jsx)

![image](https://github.com/gogoringhye/read/assets/145514996/3df52024-266d-490c-9643-27cc8a19e5eb)

- 컴퍼넌트의 return()에서는 반드시 하나의 태그로 싸여있어야한다.
- 태그 대신 <> </> --> Fragment를 사용할 수 있다
- class명을 className-"class명"
- javaScript코드를 JSX 문법 안에서 사용해야 할때는 {javaScript 코드}형식으로 사용해야한다.
- {}을 사용하지 않으면 변수가 그냥 문자로 출력된다.
- 인라인 스타일로 css를 작성할 때 ==> 밖의 {}는 자바스크립트를 사용한다는 의미로 해석, 안의 {}는 객체를 사용한다는 의미
- <div style={{ width: "300px", height: "200px" }}>추가하기</div>

```
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "멍멍";
  return (
    <>
      <div className="App">
        <p> {`${name} 시작하기`} </p>
      </div>
      <div style={{ width: "300px", height: "200px" }}>추가하기</div>
    </>
  );
}

export default App;
```

-확장프로그램인데 있으나 없으나
![image](https://github.com/gogoringhye/read/assets/145514996/4856938c-c7f3-4e90-b737-96727e0d61ca)

```
231207 수업

import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "멍멍";
  const list = ["기침", "감기", "약"];
  return (
    <>
      <h1 className="dog">{name}해봐 멍멍!</h1>
      <h1 className="dog">{`${name}해봐 멍멍!`}</h1>
      <ul>
        <li>기침</li>
        <li>감기</li>
        <li>약</li>
      </ul>
      <ul>
        {/* {list.map((item) => {
          return <li>{item}</li>;
        })} */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "736px", height: "414px" }}
        src="https://i.pinimg.com/736x/37/f0/88/37f088cc876aef69ebc82e7c3f98362f.jpg"
        alt="img"
      ></img>
    </>
  );
}

export default App;

```
