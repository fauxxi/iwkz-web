import React, { Component } from "react";

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
      <div
        style={hoverStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="column jadwal" style={jadwalShalatStyle}>
          <div className="level">
            <div className="level-left">
              <div>
                <p className="heading">{this.props.shalat}</p>
                <p className="title is-size-5-mobile">{this.props.waktu}</p>
              </div>
            </div>
            <div className="level-right ">
              {/* <figure className="image is-64x64 tablet">
                <img src={this.props.imgSrc} />
              </figure> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const jadwalShalatStyle = {
  boxShadow: "0 0 50px 1px rgba(0,0,0,.2)",
  borderRadius:7,
  marginBottom: 10,
  backgroundColor: "rgba(255,255,255,0.2)"
};

export default BlockJadwal;
