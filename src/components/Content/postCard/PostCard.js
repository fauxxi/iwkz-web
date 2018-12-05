import React, { Component } from "react";
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPost} from '../../../actions/postAction';

//import { wpAPI } from "../../../api/wp-api";
import PostCardBlock from "./PostCardBlock";

class PostCard extends Component {
  //_isMounted = false;


  componentWillMount() {
    this.props.fetchPost();

    //this._isMounted = true;

  }

  // componentWillUnmount(){
  //   this._isMounted = false;
  // }


  render() {
    
    let post1 = this.props.posts.slice(0, 2).map(function(post, index) {

      //let regex = new RegExp(/<style([^]*?)\/style>/gm);
      //let res = regex.exec(post.content.rendered);
      let date = new Date(post.date);
      let year = date.getFullYear();
      let month = [];
      let datum = date.getDate();

      month[0] = "Januari";
      month[1] = "Februari";
      month[2] = "Maret";
      month[3] = "April";
      month[4] = "Mei";
      month[5] = "Juni";
      month[6] = "Juli";
      month[7] = "Agustus";
      month[8] = "September";
      month[9] = "Oktober";
      month[10] = "November";
      month[11] = "Desember";

      let postDate = `${datum} ${month[date.getMonth()]} ${year}`;

      return (
        <PostCardBlock
          key={index}
          link={post.link}
          thumbImgSrc={post._embedded["wp:featuredmedia"]["0"].source_url}
          author={post._embedded["author"]["0"].name}
          postDatum={postDate}
          statusPost={post._embedded["wp:term"]["0"]["0"].name}
          title={post.title.rendered}
          postHTML={{
            __html: post.content.rendered
              // .replace(regex, "")
              // .replace(/<[^>]+>/gm, "")
              // .split(/\s+/)
              // .slice(0, 20)
              // .join(" ")
              // .concat("...")
          }}
        />
      );
    });

    let post2 = this.props.posts.slice(2, 4).map(function(post, index) {

      //let regex = new RegExp(/<style([^]*?)\/style>/gm);
      //let res = regex.exec(post.content.rendered);
      let date = new Date(post.date);
      let year = date.getFullYear();
      let month = [];
      let datum = date.getDate();

      month[0] = "Januari";
      month[1] = "Februari";
      month[2] = "Maret";
      month[3] = "April";
      month[4] = "Mei";
      month[5] = "Juni";
      month[6] = "Juli";
      month[7] = "Agustus";
      month[8] = "September";
      month[9] = "Oktober";
      month[10] = "November";
      month[11] = "Desember";

      let postDate = `${datum} ${month[date.getMonth()]} ${year}`;

      return (
        <PostCardBlock
          key={index}
          link={post.link}
          thumbImgSrc={post._embedded["wp:featuredmedia"]["0"].source_url}
          author={post._embedded["author"]["0"].name}
          postDatum={postDate}
          statusPost={post._embedded["wp:term"]["0"]["0"].name}
          title={post.title.rendered}
          postHTML={{
            __html: post.content.rendered
              // .replace(regex, "")
              // .replace(/<[^>]+>/gm, "")
              // .split(/\s+/)
              // .slice(0, 2)
              // .join(" ")
              // .concat("...")
          }}
        />
      );
    });

    // if(!this.props.isLoaded){
    //   return <div>LOADINGGGG</div>;
    // }

    return (

      <div className="container">
        <p className="is-size-2 is-size-3-mobile"><span className="underlined-text-orange">Berita Terbaru</span></p>
        <div className="columns">{post1}</div>
        <div className="columns" >{post2}</div>
      </div>
    );
  }
}

// PostCard.propTypes = {
//   fetchPost: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
  posts: state.posts.posts,
  //isLoaded: state.posts.isLoaded
})

export default connect(mapStateToProps, {fetchPost})(PostCard);
