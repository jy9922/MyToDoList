// class형 컴포넌트를 이용할거예요!
import React, { Component } from "react";
import "./App.css";

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todoData : [
        {
          id : "1",
          title : "운동하기",
          completed : false
        },
        {
          id : "2",
          title : "공부하기",
          completed : false
        },
        {
          id : "3",
          title : "밥먹기",
          completed : false
        },
      ],
      value : ""
      
    }
  }
  btnStyle = {
    color : "white",
    backgroundColor : "black",
    border : "none",
    padding : "5px 9px",
    borderRadius : "50%",
    cursor : "pointer",
    float : "right"
  }

  getStyle = () => {
    return {
      padding: "20px",
      border: "1px #ccc dotted",
      textDecoration: "none",
      margin : "10px"
    }
  }

  
  deleteClick = (id) => {
    console.log(id);
    // 해당 아이디에 대한 할일 목록을 지워야 한다
    // 데이터를 지운다 -> 열심히 하면 배열 처리 가능
    const newTodoData = this.state.todoData.filter(data => data.id !== id)
    // 변경된 데이터를 가지고 화면을 다시 그려야 해요!
    // 어떻게 하면 이 작업을 수행할 수 있을까?
    // React state
    // React에서 데이터가 변할 때 화면을 다시 rendering 해주기 위해서 사용
    // State는 component 안에서 관리되요!
    // 일반적으로 생성자 안에서 정의해요!
    // 이름은 state라는 property
    this.setState({todoData: newTodoData})
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({value:e.target.value});
  }
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div>
            <h1>오늘의 할 일</h1>
          </div>
          {this.state.todoData.map(data => (
            <div style={this.getStyle()} key={data.id}>
            <input type="checkbox" defaultChecked={false}/>
            {data.title}
            <button style={this.btnStyle}
                    onClick={() => this.deleteClick(data.id)}>delete</button>
          </div>
          ))} 
          <form style={{ display : "flex" }}>
            <input type="text"
                   name="todoInput"
                   style={{ flex: "10", padding: "5px"}}
                   placeholder="새로운 할일을 입력하세요!"
                   value={this.setState.value}
                   onChange={this.handleChange} />
            <input type="submit"
                   value="입력"
                   className="btn"
                   style={{flex: "1"}}/>
          </form>
        </div>
      </div>
    )
  }
}