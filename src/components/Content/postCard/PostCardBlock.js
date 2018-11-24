/* eslint-disable */
import React, { Component } from "react";
import "./PostCardBlock.css";

class PostCardBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      isMore: false
    };
  }

  readMore = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  }

  toggleHover = () => {
    this.setState({
      isHover: !this.state.isHover
    });
  };

  render() {
    let hoverStyle, cursorPointer;
    if (this.state.isHover) {
      (hoverStyle = {
        transform: "scale(1.025)",
        boxShadow: "0 5px 100px 1px rgba(0,0,0,0.2)",
        margin: "0 auto"
      }),
        (cursorPointer = {
          cursor: "pointer"
        });
    } else {
      hoverStyle = {
        transform: "scale(1)",
        margin: "0 auto"
      };
    }

    let imgUrl = this.props.thumbImgSrc;

    return (
      <div className="column" style={{ margin: "50px 10px" }} onMouseEnter={this.toggleHover}
      onMouseLeave={this.toggleHover}>
        {/* <a href={this.props.link} target="_blank"> */}
          <figure
            className="image"
            style={cursorPointer}

            onClick={this.readMore}

          >
            <img
              src={`${imgUrl}`}
style={hoverStyle}
              // style={hoverStyle,{
              //   margin: "0 auto",
              //   backgroundImage: `url(${imgUrl})`,
              //   backgroundSize: "cover",
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "50% 50%"
              // }}
            />
          </figure>
          <p
            className="is-size-6 is-size-7-mobile has-text-grey-light"
            style={{ marginTop: 20,marginBottom: 5 }}
          >
            <strong className="has-text-grey-light">
              {this.props.author}
              {" | "}
            </strong>
            {this.props.postDatum}
          </p>
          <h1
            className="title is-size-4 is-size-6-mobile"
            onClick={this.readMore}
            style={cursorPointer}
          >
            {this.props.title}
          </h1>

        {/* </a> */}
        <div className={this.state.isMore ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <button className="delete" aria-label="close" onClick={this.readMore}/>
            </header>
            <section className="modal-card-body">
              <p className="title">{this.props.title}</p>
              <div className="is-size-6-mobile" dangerouslySetInnerHTML={this.props.postHTML}/>
            </section>
            <footer className="modal-card-foot">

              <button className="button" onClick={this.readMore}>Tutup</button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCardBlock;
