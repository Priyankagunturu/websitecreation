const CreateNav= ()=>{
    let nav=document.querySelector('.navbar');

    nav.innerHTML=`
    <div class="nav">
            <img src="image/botiquelogo.jpg" class="brand-logo" alt="This img is not visible due to incorrect url">
            <div class="nav-clothes">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search products,accessories">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="image/user.png" alt="user not available"></a>
                <a href="#"><img src="image/cart.png" alt=" not available"></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>    
        </ul>`;
}

CreateNav();