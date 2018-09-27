/* eslint-disable */
import React from "react";

const Footer = () => {
  return (

      <div className="container">
        <div className="columns" >
          <div className="column" >
            <p className="has-text-weight-bold is-size-5">Support Our Masjid!</p>
            <p><strong>Masjid Al-Falah Berlin - IWKZ e.V.</strong></p>
            <p>Indonesisches Weisheits- & Kulturzentrum</p>
            <p>Feldzeugmeister. 1</p>
            <p>10557 Berlin</p>

            <br />

            <table className="table" style={{background:"none"}}>
              <tbody>
                <tr>
                  <td>Phone</td>
                  <td> : </td>
                  <td>+49 30 6792 7147</td>
                </tr>
                <tr>
                  <td>Fax.</td>
                  <td> : </td>
                  <td>+49 30 6792 7147</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td> : </td>
                  <td>info@iwkz.de</td>
                </tr>
                <tr>
                  <td>Konto Nr.</td>
                  <td> : </td>
                  <td>346669106</td>
                </tr>
                <tr>
                  <td>BLZ</td>
                  <td> : </td>
                  <td>10010010, Post Bank Berlin</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="column">
            <p className="has-text-weight-bold is-size-5">Situs Terkait</p>
            <p><a>Situs Islam Indonesia di Jerman</a></p>
            <p><a>Situs Rujukan dan Pengetahuan Islam</a></p>
            <p><a>Komunitas Muslim / Masjid di Jerman</a></p>
          </div>
          <div className="column">
            <p className="has-text-weight-bold is-size-5">Partner</p>
            <figure className="image" style={{maxWidth: 120}}>
              <a target="_blank" href="https://lapordirijerman.de/"><img src={require('../../img/ladi_logo.png')}/></a>

            </figure>
          </div>
        </div>
      </div>
  );
};

export default Footer;
