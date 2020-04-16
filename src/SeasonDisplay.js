import React, { Component } from "react";

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      error: "",
    };
    // o an ki konumu bulma
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        // konumu güncelleme
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        console.log(err);
        this.setState({
          error: "kullanıcı lokasyon bilgisi paylaşmak istemiyor",
        });
      }
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  SeasonDisplay(lat) {
    const currentMonth = new Date().getMonth();
    if (lat < 0) {
      //guney yarımküre
      if (currentMonth > 3 && currentMonth < 8) {
        return {
          text : "Snowboard Season"
          iconName : 'snowflake'
        }
      } else {
        return {
          text : "Summer Season"
          iconName : 'sun'
        }
    } else {
      if (currentMonth > 8 || currentMonth < 3) {
        return "Snowboard Season";
      } else {
        return "Summer Season";
      }
      //kuzey yarımküre
    }
  }

  render() {
    const { lat, error } = this.state;

    if (lat !== 0 && !error) {
      const season = this.SeasonDisplay(lat);
      // season javascript değişkeniolduğu için {}
      return (
        <div>
          <h2 className="ui header">
            <i class="snowflake outline icon"></i>
            <i class="sun outline icon"></i>
            <div className=" content">{season}</div>
          </h2>
        </div>
      );
    } else if (lat === 0 && error) {
      return <div>Error : {error}</div>;
    }

    return <div>"Loading ..."</div>;
  }
}

export default SeasonDisplay;
