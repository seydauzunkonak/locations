import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  render() {
    return (
      <div>
        <SeasonDisplay />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
export default App;
