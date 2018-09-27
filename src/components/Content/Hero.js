import React, { Component } from "react";
import { wpAPI } from "../../api/wp-api";
import BlockJadwal from "./blockJadwal/BlockJadwal";
import HijriDate from "hijri-date/lib/safe";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
      jadwalShalat: []
    };
  }

  componentDidMount() {
    fetch(wpAPI.mjuan)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            jadwalShalat: result
          });
          console.log(this.state.jadwalShalat);
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            error
          });
        }
      );

    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
    this.setState({
      curHijri: new HijriDate()
        .toLocaleString()
        .split(" ", 4)
        .join(" ")
    });
  }

  render() {
    let jadwal = Object.keys(this.state.jadwalShalat)
      .slice(2)
      .map((val, key) => (
        <BlockJadwal
          key={key}
          shalat={val}
          waktu={this.state.jadwalShalat[val]}
        />
      ));

    return (
      <div className="container">
        <div className="columns ">
          <div
            className="column is-hidden-mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left"
            }}
          >
            <p className="has-text-weight-bold is-1">IWKZ</p>
            <p className="bigtitle is-1">
              Indonesisches Weisheits- und Kulturzentrum e.V.
            </p>
            {/* <p className="heading">Weisheits-</p>
            <p className="heading">und Kulturzentrum e.V.</p> */}
          </div>
          <div className="column is-narrow-mobile">
            <p className="has-text-centered has-text-weight-bold is-size-5-mobile">
              Jadwal Shalat
            </p>
            <p className="has-text-centered subhas-text-weight-bold is-5 is-size-8-mobile is-hidden-mobile">
              {this.state.curTime}
            </p>
            <p className="has-text-centered subhas-text-weight-bold is-5 is-size-8-mobile " style={{marginBottom:30}}>
              {this.state.curHijri}
            </p>
            {jadwal}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
