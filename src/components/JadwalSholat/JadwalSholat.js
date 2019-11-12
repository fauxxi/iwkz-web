import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JadwalSholat = () => {
  const [prayerTimes, setPrayerTimes] = useState('');

  useEffect(() => {
    requestPrayer();
  }, []);

  const requestPrayer = async () => {
    const res = await axios.get('https://iwkz.de/jdwlshalat_ibmus/');
    setPrayerTimes(res.data);
  }
  const createBodyList = (prayerTimes) => {
    let list = [];
    for (let item in prayerTimes) {
      if (item !== 'date')
        list.push(
          <div className="column is-full">
            <div className='level is-mobile br2 pa3' style={{backgroundColor:'rgba(255, 255, 255, 0.1)'}}>
              <div className='level-left'>
               {item}
              </div>
              <div className='level-right'>
               {prayerTimes[item]}
              </div>
            </div>
          </div>
        );
    }
    console.log('asd',list);
    
    return list;
  };
  return (
    <div className="container">
      <div className="columns is-multiline">
        {requestPrayer}
        {createBodyList(prayerTimes)}
      </div>
    </div>
  );
};

export default JadwalSholat;