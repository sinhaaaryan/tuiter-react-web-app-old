import {useDispatch} from "react-redux";
import React from "react";
import {deleteTuit, increaseLike} from "./../tuits/tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = ({tuitStats}) => {
    const dispatch = useDispatch();
    const increaseLikeHandler = (id) => {
        dispatch(increaseLike(id));
        console.log(id);
    }

    return (
        <>
        <div className="col-12">
            &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;
            &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;
            &#8205; &#8205;
            <i className="bi-chat">
                 &#8205;  {tuitStats.replies} &#8205; &#8205; &#8205; &#8205; &#8205;
                &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;
            </i>

            <i className="bi-arrow-repeat">
                &#8205; {tuitStats.retuits} &#8205; &#8205; &#8205; &#8205; &#8205;
                &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;
            </i>

            <i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({
                                                                                                         ...tuitStats,
                                                                                                         likes: tuitStats.likes + 1
                                                                                                     }))}/>
            {tuitStats.likes}


            &#8205; &#8205; &#8205; &#8205; &#8205;
            &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; <i className="bi bi-share"></i>

        </div>







        </>

    );
}

export default TuitStats;