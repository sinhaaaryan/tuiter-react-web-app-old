import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
                <div>
                    <div className="col-6">
                        <i className="bi-chat">
                            &#8205; 293
                        </i>

                        &#8205;
                        &#8205;
                        <i className="bi-arrow-repeat">
                            &#8205; 520
                        </i>
                        &#8205;
                        &#8205;

                        <i class="bi-heart"></i> 69420

                    </div>

                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;