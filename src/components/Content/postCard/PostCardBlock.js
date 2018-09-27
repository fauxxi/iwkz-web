/* eslint-disable */
import React, { Component } from "react";

class PostCardBlock extends Component {
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
    let hoverStyle,cursorPointer;
    if (this.state.isHover) {
      hoverStyle = {
        transform: "scale(1.025)",
        boxShadow: "0 5px 100px 1px rgba(0,0,0,0.2)"

      },
      cursorPointer = {
        cursor: "pointer"
      };
    } else {
      hoverStyle = { transform: "scale(1)" };
    }

    let imgUrl = this.props.thumbImgSrc;

    return (
      <div>
        <div className="column">
          <div
            className="card"
            style={cursorPointer}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            <div className="card-image" style={hoverStyle}>
              <div
                className="image"
                style={{
                  height: 200,
                  backgroundImage: `url(${imgUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50% 50%"
                }}
              />
            </div>
            <div className="card-content is-paddingless">
              <p className="is-size-6" style={{paddingTop: 10}}><strong>{this.props.title}</strong></p>
              <div className="" style={{paddingTop: 10}}>
                <div
                  className="is-size-6"
                  dangerouslySetInnerHTML={this.props.postHTML}
                />
              </div>
              <div className="media">
                <div className="media-content">
                  <p className="is-size-7"><strong>{this.props.author}{ " | " }</strong>{this.props.postDatum}</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCardBlock;
