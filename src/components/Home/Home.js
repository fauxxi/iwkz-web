import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {fetchPost} from '../../actions/postAction';

//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from '../Content/Hero';
import PostCard from '../Content/postCard/PostCard';
import ProfilAlfalah from '../Content/profilAlfalah/ProfilAlfalah';
import Hadist from '../Content/hadistGenerator/Hadist';



class Home extends Component{




  render(){

    


    return(

      <div>
        <section
          className="hero is-fullheight"
          style={{
            background: "linear-gradient(45deg, #e0c3fc 0%,  #8ec5fc 100%)"
          }}
        >
          {/* <Header /> */}
          <div className="hero-body wave-background">

            <Hero />
          </div>
        </section>
        <section className="section">
          <ProfilAlfalah />
          <PostCard />
        </section>
        <section className="section has-background-white-ter">
          <Hadist />
        </section>
        <section className="section">
          <div className="hero-foot ">
            <Footer />
          </div>
        </section>
      </div>

    );

  }
}



export default Home;
