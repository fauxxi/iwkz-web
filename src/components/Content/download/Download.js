import React, { Component } from "react";
// import {connect} from 'react-redux';
// import {fetchDocs} from '../../../actions/postAction';
import axios from 'axios';
import "./download.css";

import {wpAPI} from '../../../api/wp-api';

class Download extends Component {

  constructor(){
    super();
    this.state = {
      sourceURL: [],
      store: []
    }
    this.noURL = this.noURL.bind(this);
    //this.filterBulan = this.filterBulan.bind(this);
  }

  componentDidMount() {
    //this.props.fetchDocs();

    //this._isMounted = true;

    axios.get(`${wpAPI.documents}`)
      .then(json => json.data.map(result => (
        {
          bulan: `${result.slug}`,
          source_url: `${result.source_url}`
        }
      )))
      .then(newData => this.setState({

        store: newData
      }))

      .catch(error => {
        console.log('Error', error)
      })

  }

  componentWillReceiveProps(){
    this.setState({
      sourceURL: this.state.store.filter(function(bulan) {
        let month = [];
        month[0] = "januari";
        month[1] = "februari";
        month[2] = "maret";
        month[3] = "april";
        month[4] = "mei";
        month[5] = "juni";
        month[6] = "juli";
        month[7] = "agustus";
        month[8] = "september";
        month[9] = "oktober";
        month[10] = "november";
        month[11] = "desember";

        let d = new Date();
        let n = month[d.getMonth()-1];

        return (bulan.bulan === `jadwal-shalat-${n}-2018`)

      })
    })

  }

  noURL = () => {
    return (
      <h1>KOSONG!!!</h1>
    );
  }

  render(){

    //console.log(this.state.sourceURL);

    var getURL = this.state.sourceURL.map(function(url,index) {
      //console.log(url)

      return (
        <div key={index}>
          <p className="is-size-4">Atau klik <a href={`${url.source_url}`}>{url.bulan.replace(/-/g, "").replace("2018","").substr(12).charAt(0).toUpperCase() + url.bulan.replace(/-/g, "").replace("2018","").substr(12).slice(1)}</a>aDASDASDAS</p>
        </div>
      )
    })


    //console.log(getURL.length == 1 ? getURL[0].source_url : "tidak ada")


    return(
      <div>
        <section className="hero is-fullheight" style={{background:"linear-gradient(45deg, #e0c3fc 0%,  #1fd5fc 100%)"}}>

        </section>

        {this.state.sourceURL.length === 1 ? getURL : this.noURL()}
      </div>
    );
  }


}

// const mapStateToProps = state => ({
//   docs: state.docs.docs
// });

export default Download;
