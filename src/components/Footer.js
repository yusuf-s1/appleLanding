import React from 'react'

export default function Footer() {
  const forBusiness = ['Apple and Business', 'Shop for Business'];
  const forEducation = ['Apple and Education', 'Shop for K-12', 'Shop for College'];
  const forHealthCare = ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on Iphone'];
  return (
    <footer>
      <div className='footer-top'>
        <details>
          <summary>Shop and Learn</summary>
          <div className='footer-links'>
            <a href="#">Store</a>
            <a href="#">Mac</a>
            <a href="#">Ipad</a>
            <a href="#">Iphone</a>
            <a href="#">Watch</a>
            <a href="#">Vision</a>
            <a href="#">AirPods</a>
            <a href="#">TV & Home</a>
            <a href="#">AirTag</a>
            <a href="#">Accessories</a>
            <a href="#">Gift Cards</a>
          </div>
        </details>
        <details>
          <summary>Apple Wallet</summary>
          <div className='footer-links'>
            <a href="#">Wallet</a>
            <a href="#">Apple Card</a>
            <a href="#">Apple Pay</a>
            <a href="#">Apple Cash</a>
          </div>
        </details>
        <details>
          <summary>Account</summary>
          <div className='footer-links'>
            <a href="#">Manage Your Apple ID</a>
            <a href="#">Apple Store Account</a>
            <a href="#">iCloud.com</a>
          </div>
        </details>
        <details>
          <summary>Entertainment</summary>
          <div className='footer-links'>
            <a href="#">Apple One</a>
            <a href="#">Apple TV+</a>
            <a href="#">Apple Music</a>
            <a href="#">Apple Arcade</a>
            <a href="#">Apple Fitness+</a>
            <a href="#">Apple News+</a>
            <a href="#">Apple Podcasts</a>
            <a href="#">Apple Books</a>
            <a href="#">App Store</a>
          </div>
        </details>
        <details>
          <summary>Apple Store</summary>
          <div className='footer-links'>
            <a href="#">Find a Store</a>
            <a href="#">Genius Bar</a>
            <a href="#">Today at Apple</a>
            <a href="#">Apple Camp</a>
            <a href="#">Apple Store App</a>
            <a href="#">Certified Refurbished</a>
            <a href="#">Apple Trade In</a>
            <a href="#">Financing</a>
            <a href="#">Carrier Deals at Apple</a>
            <a href="#">Order Status</a>
            <a href="#">Shopping Help</a>
          </div>
        </details>
        <details>
          <summary>For Business</summary>
          <div class="footer-links">
            {forBusiness.map((item) => <a key={item}>{item}</a>)}
          </div>
        </details>
        <details>
          <summary>For Education</summary>
          <div class="footer-links">
            {forEducation.map((item) => <a key={item}>{item}</a>)}
          </div>
        </details>
        <details>
          <summary>For Healthcare</summary>
          <div class="footer-links">
            {forHealthCare.map((item) => <a key={item}>{item}</a>)}
          </div>
        </details>
        <details>
          <summary>For Government</summary>
          <div class="footer-links">
            <a href="">Shop for Government</a>
            <a href="">Shop for Veterans and Military</a>
          </div>
        </details>
        <details>
          <summary>Apple Values</summary>
          <div class="footer-links">
          <a href="">Accessibility</a>
          <a href="">Education</a>
          <a href="">Environment</a>
          <a href="">Inclusion and Diversity</a>
          <a href="">Privacy</a>
          <a href="">Racial Equity and Justice</a>
          <a href="">Supplier Responsibility</a>
          </div>
        </details>
        <details>
          <summary>About Apple</summary>
          <div class="footer-links">
            <a href="">Newsroom</a>
            <a href="">Apple Leadership</a>
            <a href="">Career Opportunities</a>
            <a href="">Investors</a>
            <a href="">Ethics & Compliance</a>
            <a href="">Events</a>
            <a Contact href="">Contact Apple</a>
          </div>
        </details>
      </div>
      <div className='footer-expand'>
        <div className='wrapper'>
          <div className='footer-links'>
              <p>Shop and Learn</p>
              <a href="#">Store</a>
              <a href="#">Mac</a>
              <a href="#">Ipad</a>
              <a href="#">Iphone</a>
              <a href="#">Watch</a>
              <a href="#">Vision</a>
              <a href="#">AirPods</a>
              <a href="#">TV & Home</a>
              <a href="#">AirTag</a>
              <a href="#">Accessories</a>
              <a href="#">Gift Cards</a>
            </div>
            <div className='footer-links'>
              <p>Apple Wallet</p>
              <a href="#">Wallet</a>
              <a href="#">Apple Card</a>
              <a href="#">Apple Pay</a>
              <a href="#">Apple Cash</a>
            </div>
        </div>
          <div className='wrapper'>
            <div className='footer-links'>
              <p>Account</p>
              <a href="#">Manage Your Apple ID</a>
              <a href="#">Apple Store Account</a>
              <a href="#">iCloud.com</a>
            </div>
            <div className='footer-links'>
              <p>Entertainment</p>
              <a href="#">Apple One</a>
              <a href="#">Apple TV+</a>
              <a href="#">Apple Music</a>
              <a href="#">Apple Arcade</a>
              <a href="#">Apple Fitness+</a>
              <a href="#">Apple News+</a>
              <a href="#">Apple Podcasts</a>
              <a href="#">Apple Books</a>
              <a href="#">App Store</a>
            </div>
          </div>
          <div className='footer-links'>
            <p>Apple Store</p>
            <a href="#">Find a Store</a>
            <a href="#">Genius Bar</a>
            <a href="#">Today at Apple</a>
            <a href="#">Apple Camp</a>
            <a href="#">Apple Store App</a>
            <a href="#">Certified Refurbished</a>
            <a href="#">Apple Trade In</a>
            <a href="#">Financing</a>
            <a href="#">Carrier Deals at Apple</a>
            <a href="#">Order Status</a>
            <a href="#">Shopping Help</a>
          </div>
          <div className='wrapper'>
            <div className='footer-links'>
              <p>For Business</p>
              {forBusiness.map((item) => <a key={item}>{item}</a>)}
            </div>
            <div class="footer-links">
              <p>For Education</p>
              {forEducation.map((item) => <a key={item}>{item}</a>)}
            </div>
            <div class="footer-links">
              <p>For Healthcare</p>
              {forHealthCare.map((item) => <a key={item}>{item}</a>)}
            </div>
            <div class="footer-links">
              <p>For Government</p>
              <a href="">Shop for Government</a>
              <a href="">Shop for Veterans and Military</a>
            </div>
          </div>
          <div className='wrapper'>
            <div class="footer-links">
              <p>Apple Values</p>
              <a href="">Accessibility</a>
              <a href="">Education</a>
              <a href="">Environment</a>
              <a href="">Inclusion and Diversity</a>
              <a href="">Privacy</a>
              <a href="">Racial Equity and Justice</a>
              <a href="">Supplier Responsibility</a>
            </div>
            <div class="footer-links">
              <p>About Apple</p>
              <a href="">Newsroom</a>
              <a href="">Apple Leadership</a>
              <a href="">Career Opportunities</a>
              <a href="">Investors</a>
              <a href="">Ethics & Compliance</a>
              <a href="">Events</a>
              <a Contact href="">Contact Apple</a>
          </div>
          </div>
      </div>
      <div className='footer-bottom'>
          <p>More ways to shop: <a href="/">Find an Apple Store</a> or <a href="/">other retailer</a> near you. <span class="">Or call 1-800-MY-APPLE.</span></p>
          <p>United States</p>
          <p>Copyright &copy; Apple Inc. 2023 All rights reserved.</p>
          <div className='in-block'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
      </div>
     
    </footer>
  )
}
