import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';


const currentUser = {
    "userName": "Tesla",
    "handle": "@tesla",
    "image": "tesla.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {
                                       deleteTuit(state, action) {
                                           const index = state.findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },


                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       },

                                       increaseLike(state, action) {
                                           const tuit = state.find(tuit => tuit._id === action.payload._id);
                                           tuit.liked = !tuit.liked;
                                           console.log(tuit.liked);
                                           if (tuit.liked) {
                                               tuit.likes = tuit.likes + 1;
                                           }
                                           else {
                                               tuit.likes = tuit.likes - 1;
                                           }
                                       }
                                   }

                               });



export const {createTuit, deleteTuit, increaseLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;