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
    //요소에 적용할 인라인 css를 object로 정의하고 적용할 수 있다.
    const boxStyle={
      width:"100px",
      height:"100px",
      border:"1px solid red",
      backgroundColor:"yellow" //여러단어로 구성된 속성은 camel case로 사용한다.
    };
    return (
      <div className="container">
        {/* class는 예약어이기 때문에 className을 사용한다. */}
        <h1>Hello React!</h1>
        <p>내이름은 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다"/>
        <img src={kim} alt="김구라 이미지" />
        <p>당신은 {isMan ? "남자" : "여자"} 이군요</p>
        <p>{isMan && "당신은 남자 이군요"}</p>
        {/*
          [ 이벤트 처리 ]
          onEventName={ 화살표 함수 }
          처럼 on 다음에 이벤트 명을 camel case로 작성을 한다.
          화살표 함수는 해당이벤트가 발생하면 자동으로 호출 된다.
          예 ) onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus
        */}
        <button className="btn btn-outline-primary" onClick={()=>{
          alert("버튼을 눌렀네요?");
        }}>
          눌러보셈
        </button>
        <div style={boxStyle}>box</div>
    </div>
    );
  }
}

export default App;