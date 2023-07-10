import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
           <ul class="list-group">
       ${(posts.map(
        x=>PostSummaryItem(x))
        .join(''))}
           
           <!-- continue here -->
           </ul>
`); }

export default PostSummaryList;