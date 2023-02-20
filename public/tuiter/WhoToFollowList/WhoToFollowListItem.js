const WhoToFollowListItem = (who) => {
    return(` 
    <li class="list-group-item d-flex">
        <img src="who.avatarIcon" class="rounded-corners-all-around">
        <div class="ms-2">
        <text>who.userName</text>
        <div class="text-secondary">who.handle</div>
        <div class="ms-auto d-flex my-1">
                            <button type="button" class="rounded-pill btn-primary">Follow</button>
                        </div>
</div>
</li>
  
 `);

}