const createFooter = ()=>{
    let footer = document.querySelector('footer');
    
    footer.innerHTML=`
    <div class="footer-content">
            <img src="image/botiquelogo.jpg" class="logo"alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">Sunglasses</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">Men kurtas</a></li>


                </ul>
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">Western wear</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">Sunglasses</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">earrings</a></li>
                    <li><a href="#" class="footer-link">kurtas</a></li>
                    <li><a href="#" class="footer-link">kurtis</a></li>
                    <li><a href="#" class="footer-link">jewellery</a></li>


                </ul>
            </div>
            
        </div>
        <p class="footer-title">About Botique</p>
        <p class="info">
                Boutique offers a curated selection of clothing, home goods, health, beauty and 
                other essentials at the best prices and provides customer service with immediate 
                response time. We focus in budget-conscious 
                individuals seeking basic wardrobe essentials to make sure we meet your unique needs.
        </p>
        <p class="info">support emails -poshbotique@gmail.com, customersupport@gmail.com</p>
        <p class="info">telephone-1800 345 234, 1800 543 678</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
            
        </div>
        <p class="footer-credit">Clothing,Best apparels online Botique</p>

    `;
}

createFooter();
