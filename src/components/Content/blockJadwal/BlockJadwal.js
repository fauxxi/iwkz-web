import React, { Component } from "react";
import './BlockJadwal.css';

class BlockJadwal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }

  toggleHover = () => {
    this.setState({
      isHover: !this.state.isHover
    });
  };

  render() {
    let hoverStyle;
    if (this.state.isHover) {
      hoverStyle = { transform: "scale(1.05)" };
    } else {
      hoverStyle = { transform: "scale(1)" };
    }

    return (
      <div className="block-jadwal"
        style={hoverStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="column jadwal">
          <div className="level is-mobile">
            <div className="level-left">
              <p className="heading">{this.props.shalat}</p>
            </div>
            <div className="level-right">
              <p className="title is-size-4 is-size-5-mobile">{this.props.waktu}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default BlockJadwal;
