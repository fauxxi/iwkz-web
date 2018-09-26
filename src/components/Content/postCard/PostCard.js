import React, { Component } from "react";
import { wpAPI } from "../../../api/wp-api";

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(wpAPI.posts)
      .then(res => res.json())
      .then(
        results => {
          this.setState({
            posts: results
          });
          console.log(this.state.posts);
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        errors => {
          this.setState({
            errors
          });
        }
      );
  }

  render() {
    let titles = this.state.posts.slice(0, 3).map(function(title, index) {
      let regex = new RegExp(/<(?:.|\n)*?>/gm);
      let res = regex.test(title.content.rendered);
      console.log(res);
      return (
        <div key={index}>
          <p className="title has-text-black">{title.title.rendered}</p>
          <div className=" has-text-black">{title.content.rendered}</div>
          {/* .replace(/<(?:.|\n)*?>/gm, '') <style(.+?)\/style> */}
        </div>
      );
    });

    return <div className="container">{titles}</div>;
  }
}

export default PostCard;
