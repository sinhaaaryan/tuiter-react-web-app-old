import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <li class="list-group-item">
           Who to follow
</li>
       ${(who.map(
        x=>WhoToFollowListItem(x))
        .join(''))}
           
           <!-- continue here -->
           </ul>
`); }

export default WhoToFollowList;