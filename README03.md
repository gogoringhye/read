#폴더 src 참조

#react에서는 이 데이터를 변할 수 있는 값이며 값이 변할때마다 UI를 변경해 달라고(화면을 다시 그려달라고) 알려야한다. 그럴 때 사용하는 것이 useState()이다.
```
const [num, setNum]=useState(0)
이 데이터를 변할 수 있는 값 ==> num
num를 변하게 하는 함수 ==> setNum --> 함수를 이용하여 num를 변경한다.
useState(0)의 0은 num의 초기값
```
![image](https://github.com/gogoringhye/read/assets/145514996/8c932683-4e9a-46d1-9dea-957d773098e6)







복습
![image](https://github.com/gogoringhye/read/assets/145514996/8976406f-7c88-40f5-ac32-e383f3404436)




![image](https://github.com/gogoringhye/read/assets/145514996/37130cd3-f2a6-47bb-9bea-7eaf8c7467d2)
리액트의 화살표의 함수의 뭐시기인데 컴포넌트가 되어라 ㅜ머라고했던듯









![image](https://github.com/gogoringhye/read/assets/145514996/f9d511c2-0b30-441c-836a-dd94be5d6902)

이거를
![image](https://github.com/gogoringhye/read/assets/145514996/ede32548-2907-445e-b835-e0dde4804c1e)
이렇게
![image](https://github.com/gogoringhye/read/assets/145514996/48399c85-6ca9-4c53-8be8-375f825a5487)












# 부분적으로 값 받기
![image](https://github.com/gogoringhye/read/assets/145514996/d92bbab6-5d70-4982-8043-e70294d4072a)
![image](https://github.com/gogoringhye/read/assets/145514996/f79e92e7-cece-4baa-9094-b076006ebedb)


# 구조분해
![image](https://github.com/gogoringhye/read/assets/145514996/d602f87a-bd3d-4b03-8a2a-8b83dec39a78)
```
import React from 'react';

const Profile = ({img,name,title,isNew}) => {
// ||--> 또는 A || B 둘 중에 하나라도 True이면 True 
// &&--> 그리고 A && B 둘중에 하나라도 false이면 false(둘 다 충족해야함)

//console.log(props)
// const img=props.img;
// const name=props.name;
// const title=props.title;
// const isNew=props.isNew;

//구조분해 destructure
//const {img,name,title,isNew}=props;

return (
    <div className="profile">
    <img src={img} alt="avatar" />
   {/*  {isNew?<span className="new">신입</span>:""} */}
    {isNew && <span className="new">신입</span>}
    <h2>{name}</h2>
    <p>{title}</p>
    </div>
  )
 
}

export default Profile;
```




































![image](https://github.com/gogoringhye/read/assets/145514996/cb39d774-3591-4994-a0d2-4baf57f3a692)
```
import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

//useState라는 함수를 통해 react에게 값이 변했음을 알려주는 방법(useState는 React가 제공하는 React hook(훅))
function App() {
  let counter = 0;
  //console.log(useState(0));

  //const num = useState(0)[0];
  //const setNum = useState(0)[1];

  const [num, setNum] = useState(0);
  //0은 매개변수 num의 state의 초기값이 0이다.
  //[초기 값인 0, 초기 값을 변화시키는 함수]
  //state를 바꾸면 UI를 다시 랜더링한다.
  //함수가 끝날 때 실행이 되는 것임

  const increase = function () {
    counter = counter + 1;
    setNum(num + 1);
    console.log(counter);
    console.log("num: " + num); //state는 함수가 끝나면 바뀌기 때문에 아직 바뀌기 전임
  };
  return (
    <>
      <div>{`num = ${num}`}</div>
      <div>{`counter = ${counter}`}</div>
      <button onClick={increase}>클릭</button>
    </>
  );
}

export default App;
```


