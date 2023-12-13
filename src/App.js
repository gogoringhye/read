import "./App.css";
import Profile from "./components/Profile";

function App(){
 return(
  <>
  <Profile
  img="https://mblogthumb-phinf.pstatic.net/20090813_141/jyj0596_1250172689823Dzrth_jpg/b0a1b1b8b6f3_00013_a_8909_jyj0596.jpg?type=w420" name="카구라" title="프론트엔드 개발자"/>
  <Profile
  img="https://e1.pxfuel.com/desktop-wallpaper/634/792/desktop-wallpaper-gintoki-gintama-android.jpg" name="긴토키" title="백엔드 개발자" isNew={true}/>
  <Profile
  img="https://coresos-phinf.pstatic.net/a/2hc91g_i/c6jUd0159kyuww5yzb2g_gdlj8.jpg?type=s276" name="소코" title="풀스택 개발자"/>
  </>
 )
}

export default App;
