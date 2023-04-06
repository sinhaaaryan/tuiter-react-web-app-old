import {useDispatch} from "react-redux";
import React from "react";
import {deleteTuit, increaseLike} from "./../tuits/tuits-reducer";


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

            <button onClick={() => increaseLikeHandler(tuitStats)} className="bg-transparent border-0">
                {tuitStats.liked ? (<i className="bi-heart" style={{color: "red"}}></i>) :  (
                    <i className="bi-heart"></i>) }

            </button>
            {tuitStats.likes}


            &#8205; &#8205; &#8205; &#8205; &#8205;
            &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; <i className="bi bi-share"></i>

        </div>







        </>

    );
}

export default TuitStats;