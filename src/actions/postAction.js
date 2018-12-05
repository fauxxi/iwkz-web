import {FETCH_POSTS, IS_LOADED, FETCH_DOCS, FETCH_JADWAL} from './types';
import {wpAPI} from '../api/wp-api';

export const fetchPost = () => dispatch => {
    //console.log('FETCHING......')
    fetch(wpAPI.posts)
      .then(res => res.json())
      .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
      );
}

export const fetchDocs = () => dispatch => {
  fetch(wpAPI.documents)
    .then(res => res.json())
    .then(docs => dispatch({
      type: FETCH_DOCS,
      payload: docs
    }))
}

export const isLoaded = () => dispatch => {
    dispatch({
        type: IS_LOADED,
        payload: true
    })
}

export const fetchJadwal = () => dispatch => {
  fetch(wpAPI.ibmus, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(jadwal => dispatch({
          type: FETCH_JADWAL,
          payload: jadwal
      })
    );
}

// export const simpleAction = () => dispatch => {
//   dispatch({
//     type: 'POST_LOADED',
//     payload: true
//   })
// }
