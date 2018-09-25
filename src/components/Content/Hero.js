import React, { Component } from "react";
import { wpAPI } from "../../api/wp-api";
import BlockJadwal from './blockJadwal/BlockJadwal';
import HijriDate from 'hijri-date/lib/safe';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
      jadwalShalat: [],
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

      // fetch(wpAPI.posts)
      //   .then(res => res.json())
      //   .then(
      //     results => {
      //       this.setState({
      //         posts: results
      //       });
      //       console.log(this.state.posts);
      //     },
      //
      //     // Note: it's important to handle errors here
      //     // instead of a catch() block so that we don't swallow
      //     // exceptions from actual bugs in components.
      //     errors => {
      //       this.setState({
      //         errors
      //       });
      //     }
      //   );

      setInterval( () => {
        this.setState({
          curTime : new Date().toLocaleString()
        })
      },1000);
      this.setState({
        curHijri: new HijriDate().toLocaleString().split(' ', 4).join(' ')
      })

  }

  render() {

    // let titles = this.state.posts.map(function(title, index) {
    //   return (
    //     <div key={index}>
    //       <p className="title has-text-black">{title.title.rendered}</p>
    //       <div className=" has-text-black">{title.content.rendered}</div>
    //     </div>
    //   );
    // });




    let jadwal = Object.keys(this.state.jadwalShalat).slice(2).map((val,key) => (


        <BlockJadwal key={key} shalat={val} waktu={this.state.jadwalShalat[val]} />

    ));


    console.log(this.state.curHijri);
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
            <p className="title is-1">IWKZ</p>
            <p className="subtitle is-4">Indonesisches Weisheits- und Kulturzentrum e.V.</p>
            {/* <p className="heading">Weisheits-</p>
            <p className="heading">und Kulturzentrum e.V.</p> */}
          </div>
          <div className="column is-narrow-mobile">

            <p className="has-text-centered title is-size-5-mobile">Jadwal Shalat</p>
            <p className="has-text-centered subtitle is-5 is-size-8-mobile is-hidden-mobile">{this.state.curTime}</p>
            <p className="has-text-centered subtitle is-5 is-size-8-mobile ">{this.state.curHijri}</p>
            {jadwal}
          </div>
        </div>
      </div>
    );
  }
}


export default Hero;
