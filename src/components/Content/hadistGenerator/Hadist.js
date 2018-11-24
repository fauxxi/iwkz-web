import React, { Component } from "react";

class Hadist extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      hadistArr: [
        {
          isi: "Barangsiapa membangun masjid –karena mengharap wajah Allah- maka Allah akan membangunkan untuknya yang semisalnya di dalam syurga.",
          riwayat: "HR. Al-Bukhari dan Muslim"
        },
        {
          isi: "Barangsiapa bersuci di rumahnya lalu dia berjalan menuju salah satu dari rumah Allah (yaitu masjid) untuk menunaikan kewajiban yang telah Allah wajibkan, maka salah satu langkah kakinya akan menghapuskan dosa dan langkah kaki lainnya akan meninggikan derajatnya.",
          riwayat: "HR. Muslim, no. 666"
        },
        {
          isi: "Sesungguhnya sedekahnya orang muslim itu dapat menambah umurnya, dapat mencegah kematian yang buruk (su’ul khotimah), Allah akan menghilangkan darinya sifat sombong, kefakiran dan sifat bangga pada diri sendiri",
          riwayat: "HR. Thabrani"
        },
        {
          isi: "Ada 7 golongan orang yang akan dinaungi Allah yang pada hari itu tidak ada naungan kecuali dari Allah; salah satunya ialah seseorang yang hatinya selalu terpaut dengan masjid ketika ia keluar hingga kembali kepadanya.",
          riwayat: "HR. Bukhari dan Muslim"
        },
        {
          isi: "Setiap langkah berjalan untuk menunaikan shalat adalah sedekah.",
          riwayat: "HR. Muslim no. 2382"
        }

      ],
      index: 0
    }
  }

  componentDidMount(){
    this._isMounted = true;


      setInterval(() => {
        if(this._isMounted){
          this.setState({
              index: this.state.index + 1
            });
            if(this.state.index > 3){
              this.setState({
                index: 0
              });
              clearInterval();
            }
        }

      }, 15000);

  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render(){

    return(
      <div className="container" style={{marginBottom: 100, marginTop:25}}>
        <p className="has-text-weight-light is-size-5 is-size-5-mobile is-italic"><span className="has-text-danger has-text-weight-bold">"</span>{this.state.hadistArr[this.state.index].isi}<span className="has-text-danger has-text-weight-bold">" </span></p>
        <br />
        <p className="title is-size-5 is-size-6-mobile "><span>- {this.state.hadistArr[this.state.index].riwayat}</span></p>
      </div>
    );
  }
}

export default Hadist;
