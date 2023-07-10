const WhoToFollowListItem = (who) => {
    return(` 
    <li class="list-group-item">
    <div class="row flex-nowrap">
    <div class="col-2">
        <img height=50px width=50px src=${who.avatarIcon} class="rounded-circle">
</div>

        <div class="col-8">
        <div>${who.userName} <i class="fas fa-check-circle"></i></div>
        <div class="text-secondary">${who.handle}</div>
        </div>
        
        <div class="col-2">
                            <button type="button" class="rounded-pill btn-primary">Follow</button>

        
</div>


    
</div>

</li>
  
 `);

}

export default WhoToFollowListItem;