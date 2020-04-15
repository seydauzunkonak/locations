import React, { Component } from "react";

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      long: 0,
      error: "",
    };
  }
  render() {
    // o an ki konumu bulma
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        // konumu güncelleme
        this.setState({
          long: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
        this.setState({
          error: "kullanıcı lokasyon bilgisi paylaşmak istemiyor",
        });
      }
    );
    return (
      <div>
        long : {this.state.long}
        <br />
        error : {this.state.error}
      </div>
    );
  }
}

export default SeasonDisplay;
