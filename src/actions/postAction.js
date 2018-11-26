import {FETCH_POSTS} from './types';
import {IS_LOADED} from './types';
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

export const isLoaded = () => dispatch => {
    dispatch({
        type: IS_LOADED,
        payload: true
    })
}

// export const simpleAction = () => dispatch => {
//   dispatch({
//     type: 'POST_LOADED',
//     payload: true
//   })
// }
