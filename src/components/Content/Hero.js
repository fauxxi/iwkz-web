import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchJadwal} from '../../actions/postAction';

import BlockJadwal from "./blockJadwal/BlockJadwal";
import HijriDate from "hijri-date/lib/safe";


class Hero extends Component {
  //_isMounted = false;


  componentWillMount() {
    //this._isMounted = true;

    this.props.fetchJadwal();
    //console.log(this.props.jadwal);




        this.setState({
          curHijri: new HijriDate()
            .toLocaleString()
            .split(" ", 4)
            .join(" ")
        });

        //console.log(new HijriDate().toLocaleString())

  }

  // componentWillUnmount(){
  //   this._isMounted = false;
  // }

  render() {


      // if(!this.state.isLoaded){
      //   return <div>Loading....</div>;
      //
      // }

        let jadwal = Object.keys(this.props.jadwal)
          .slice(2)
          .map((val, key) => (
            <BlockJadwal
              key={key}
              shalat={val}
              waktu={this.props.jadwal[val]}
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
                <p className="is-size-5">IWKZ</p>
                <p className="title is-size-1 is-size-3-touch">
                  Indonesisches Weisheits- und Kulturzentrum e.V.
                </p>
                {/* <p className="heading">Weisheits-</p>
                <p className="heading">und Kulturzentrum e.V.</p> */}
              </div>
              <div className="column is-narrow-mobile">
                <p className="has-text-centered has-text-weight-bold is-size-5-mobile">
                  Jadwal Shalat
                </p>
                {/*<p className="has-text-centered subhas-text-weight-bold is-5 is-size-8-mobile is-hidden-mobile">
                  {this.state.curTime}
                </p>*/}
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

const mapStateToProps = state => ({
  jadwal: state.jadwal.jadwal
})

export default connect(mapStateToProps, {fetchJadwal})(Hero);
