import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("render from didMount");
  }

  componentDidUpdate() {
    console.log(this.state.count);
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }

  handleIncrement = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 1 };
    });
  };

  handleDecrement = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <br />
        <br />
        <div>{this.state.count}</div>
        <br />
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
