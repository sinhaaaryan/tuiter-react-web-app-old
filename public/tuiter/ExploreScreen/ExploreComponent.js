import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10">
                 <div class="rounded-pill border input-group bg-white">
         <span class=" border-0 bg-transparent input-group-text">
            <i class="fas fa-search text-muted"></i>
        </span>
                        <input type="text" class="rounded-pill border-0 form-control bg-white" placeholder="Search Tuiter">
                        <i class="fas fa-cog"></i>
                    </div>
                    
                
</div>


           </div>
           <ul class="nav mb-2 nav-tabs">
                      <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active"
                           href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           style="color: deepskyblue"
                           href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           style="color: deepskyblue"
                           href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           style="color: deepskyblue"
                           href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block d-xl-block col-1 d-none"
                           style="color: deepskyblue"
                           href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
           </ul>
           
                   <div class="position-relative">
            <img src="../explore/spaceship.jpg" class="col-sm-12">
            <div class="text-white position-absolute bottom-0">
                <h3 class="ms-3 fw-bold">SpaceX's Starship</h3>
            </div>
        </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
