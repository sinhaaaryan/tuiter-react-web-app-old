const PostSummaryItem = (post) => {
    return(` 
    <li class="list-group-item> 
        <div class="row">
        <div class="col-8">
        <div class="text-secondary">${post.topic}</div>
        <div class="fw-bolder">${post.userName}
        <i class="fas fa-check-circle"></i>
        <text class="text-secondary">- ${post.time}</text></div>
        

        <div class="fw-bolder">${post.title}</div>
        
        
</div>
<div class="col-2">
<img height=100px width=100px class="rounded" src=${post.image}>
</div>
        <div/>
    <li/>
   
  
 `);

}

export default PostSummaryItem;