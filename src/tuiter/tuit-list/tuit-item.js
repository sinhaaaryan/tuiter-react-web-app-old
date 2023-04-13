
import {useDispatch} from "react-redux";
import React from "react";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        tuit
        // tuit = {
        //     "topic": "Space",
        //     "userName": "SpaceX",
        //     "time": "2h",
        //     "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        //     "image": "spacex.png",
        //     "liked": true,
        //     "replies": 123,
        //     "retuits": 432,
        //     "likes": 2345,
        //     "handle": "@spacex",
        //     "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        //
        // }

    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
        console.log(id);
    }


    return(
        // Remember to include all stats above
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    &#8205; &#8205; &#8205; &#8205;
                    <img width={50} className="rounded-circle" src={`/images/${tuit.image}`}/>


                </div>

                <div className="col-10">
                    <div className="fw-bolder">{tuit.userName} {tuit.handle} - {tuit.time}</div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>

                    {/*<div className="fw-bolder">{tuit.topic}</div>*/}
                    <div>{tuit.tuit}</div>
                </div>

                <div>
                    {/*<div className="col-12">*/}
                    {/*    &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;*/}
                    {/*    &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;*/}
                    {/*    &#8205; &#8205;*/}
                    {/*    <i className="bi-chat">*/}
                    {/*         &#8205;  {tuit.replies} &#8205; &#8205; &#8205; &#8205; &#8205;*/}
                    {/*        &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;*/}
                    {/*    </i>*/}

                    {/*    <i className="bi-arrow-repeat">*/}
                    {/*        &#8205; {tuit.retuits} &#8205; &#8205; &#8205; &#8205; &#8205;*/}
                    {/*        &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;*/}
                    {/*    </i>*/}

                    {/*    <i class="bi-heart"></i> {tuit.likes}*/}

                    {/*</div>*/}

                    <TuitStats tuitStats = {tuit}/>






                </div>
            </div>
        </li>
    );
};
export default TuitItem;