import React from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Container, Button, Wrapper } from "./components/Styled-Components/Container";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      submittedMsg: "",
      prevMsg: [],
      isShown: false,
    };
  }

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submittedMsg: this.state.inputVal,
      inputVal: "",
      prevMsg: [...this.state.prevMsg, this.state.inputVal],
    });
  };

  showMsg = () => {
    const { prevMsg } = this.state;
    const message =
      prevMsg.length >= 2 ? prevMsg[prevMsg.length - 2] : "No previous messages ";
    // const message =  this.state.prevMsg[num - 2];
    this.setState((prevState) => {
      return {
        ...prevState,
        submittedMsg: message,
      };
    });
  };

  showAll = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isShown: !this.state.isShown,
      };
    });
  };

  render() {
    const { inputVal, submittedMsg, prevMsg, isShown } = this.state;
    const { handleChange, handleSubmit, showMsg, showAll } = this;
    return (
      <div className="App">
        <Container>
          <h3>A Message You Would Like To Pass</h3>
          <Form
            inputVal={inputVal}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <h4>Last Message Delivered:</h4>
          <p>{submittedMsg.toUpperCase()}</p>
          {prevMsg.length >= 1 ? (
            <Wrapper>
              <Button onClick={showMsg}>
                <i
                  class="fa-solid fa-arrow-left"
                ></i>
              </Button>
              <Button onClick={showAll}>
                {isShown ? (
                  <i class="fa-solid fa-eye"></i>
                ) : (
                  <i
                    class="fa-sharp fa-solid fa-eye-slash"
                
                  ></i>
                )}
              </Button>
            </Wrapper>
          ) : null}
          { isShown ? (prevMsg.map((el, index) => {
            return <p className="msg">{(index + 1)+'.' + el.toUpperCase()}</p>;
          })) : null}
        </Container>
      </div>
    );
  }
}
export default App;
