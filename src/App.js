import React ,{ Component } from 'react';
//이미지 경로를 import 해서 사용한다.
import logo from './logo.svg';
import kim from './images/kim1.png'
//css파일을 import 만 해도 css가 자동 적용 된다.
import './css/bootstrap.css';
import './App.css';


//class 표현식으로 App구성하기
class App extends Component {
  //App.js를 이용해서 화면 구성을 할때 호출되는 메소드
  render() {
    const myName="김구라";
    //true or false로 바꿔 가면서 테스트 해보세요.
    const isMan=true;
    return (
      <div className="container">
        {/* class는 예약어이기 때문에 className을 사용한다. */}
        <h1>Hello React!</h1>
        <p>내이름은 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다"/>
        <img src={kim} alt="김구라 이미지" />
        <p>당신은 {isMan ? "남자" : "여자"} 이군요</p>
        <p>{isMan && "당신은 남자 이군요"}</p>
    </div>
    );
  }
}

export default App;