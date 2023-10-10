import React from 'react';
import { useEffect } from 'react';
import Header from './Header';
import './Home.css'
import { FaEnvelope } from 'react-icons/fa';
import YourImage from './pexels-photo-3599586.webp';
import TwLogo from './Twitterlogo.gif';
import R from './R.jpg';
import Back from './bikeback.jpeg'
import HomeElements from './HomeElements';
import FL from './Frontlook.jpeg';
import Bs from './istockphoto-1188820923-170667a.webp';
import Ww from'./waterwash.jpeg';
import Ow from './istockphoto-1174788025-1024x1024.jpg';
import Verfied from './check.png'
import { FaCheckCircle } from 'react-icons/fa';

import { FaHeart } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
function Home(){
  const emailAddress = 'gokulmadheshwaran1@gmail.com';
  useEffect(() => {
    const serviceContainer = document.getElementById('service-container');

    const handleScroll = () => {
      const { top } = serviceContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        serviceContainer.classList.add('animate-services');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // JavaScript code to add the show class when tweets are in the viewport
const tweets = document.querySelectorAll('.tweet');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Adjust the threshold as needed
};



return (<div> 

<div className='background'>
<Header/>
<div class="image-container">
<img src={YourImage}  className='A'></img>    
</div>

<p id="Hello">Welcome "Its John Garage"</p> 
<p id="Quotes"> We Provide A Best Service For A Your Bike From pedals to perfection, we do it all.
We Measure Our Success By The Satisfaction Of Our Customers
 </p>

<div className='bottonon'  id="service-container" >
  <h1 id="ourservices">Our Services</h1>
<p className='cononbottom' id="service1">we're passionate about bikes and committed to keeping yours in top-notch condition.
  <br /> Explore our comprehensive range of services to ensure your bike's performance, longevity, and safety."</p>
<br />
<p className='cononbottom'id="service2">Our oil wash service is designed to enhance your bike's power and longevity.<br />
   Our expert technicians use the finest oils and cleaning techniques to remove dirt, grime, and contaminants, leaving your bike running smoother and more efficiently than ever.</p>
<br/>
<p className='cononbottom'id="service3">Is your bike looking dull and dirty after a ride? Our water wash service is the solution you need.
  <br/> We use high-pressure, environmentally friendly methods to give your bike a thorough and gentle clean, preserving its finish and components.</p>
</div>

<div id="groupofbuttons">
<a href="/register" id="gobr" class="btn btn-danger">User Registration </a>
<br/>
<a href= "/login" id="gobl" class="btn btn-danger">Login For Service </a>
</div>


<div id="card-Background">
<div class="card" id='c1'>
  <img src={Ww} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Water Wash</h5>
    <p class="card-text"> "We're adding extra shine to your wheels that will make your bike unique on the road"</p>
    <a href="/login" class="btn btn-primary">Book the service</a>
  </div>
</div>
<div class="card" id='c2'>
  <img src={Bs} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">General Checkup</h5>
    <p class="card-text">"We provide a general check for your bike that increases safety for your bike's life."</p>
    <a href="/login" class="btn btn-primary">Book the service</a>
  </div>
</div>
<div class="card" id='c3'>
  <img src={Ow} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Oil Wash</h5>
    <p class="card-text">"We make the best oil wash for your bike increases the power and lifespan of bike."</p>
    <a href="/login" class="btn btn-primary">Book the service</a>
  </div>
</div>
</div>
<div id='verifiedicon' className='icon-animation'>
<FaCheckCircle className='iconcolor'/> {/* This will render a checkmark circle icon */}
      <span className='iconword'>Verified</span>
      <p className='textonic'>"Verified service under the expertise, surveillance, and guidelines."</p>
</div>
<div id='phoneicon' className='icon-animation'>
      <FaPhone className='iconcolor'/> {/* This will render a phone icon */}
      <span className='iconword'>24/7 Customer Support</span>
      <p  className='textonic'>"Free customer care service available 24/7 for you to call and ask questions."</p>
    </div>
    <div id="hearticon" className='icon-animation'>
      <FaHeart className='iconcolor'/> {/* This will render the heart icon */}
      <span className='iconword'>Health relationship with customer</span>
      <p className='textonic'>"We maintain a healthy relationship with customer and bikes"</p>
    </div>
    
    <div id="tweetpost">
    <h1 id="customerfeedback">Customer Feedback</h1>
  
    <div class="tweet">
    <div >
        <img src={TwLogo} alt="Twitter Logo"class="twitter-logo" />
    </div>
        <div class="user">Harish LS</div>
        <div class="timestamp">2 hours ago</div>
        <div class="message">
        I've been a loyal customer of your bike service for years, and I can't express how satisfied I am with your team's expertise and dedication. My bike always runs smoothly, thanks to your top-notch maintenance. Keep up the fantastic work!
        </div>
    </div>
    <div class="tweet">
    <div >
        <img src={TwLogo} alt="Twitter Logo"class="twitter-logo" />
    </div>
        <div class="user">Sowndariya S</div>
        <div class="timestamp">2 days ago</div>
        <div class="message">
        I was pleasantly surprised by the quick turnaround time and the professionalism of your staff. Not only did you fix my bike, but you also provided excellent customer service.
        </div>
    </div>
    <div class="tweet">
    <div >
        <img src={TwLogo} alt="Twitter Logo"class="twitter-logo" />
    </div>
        <div class="user">Gokul</div>
        <div class="timestamp">2 days ago</div>
        <div class="message">
        Thank you for your passionate service!
        </div>
    </div>
</div>
<footer id="footer">
  
<div className='contact'>
  <p id='ct'>Contact</p>
<a href={`mailto:${emailAddress}`} target='_blank'>
        <FaEnvelope /> Email:John@gmail.com
      </a> 
    </div>
    <div className='contact'>
     <p> contact: +91-9360829596</p>
    </div>
    <div className='contact'>
    <a href='/' target='_blank'> <FaLink />Our Site</a>
    </div>
    <div className='contact'>
    <a href='https://www.instagram.com/mekul_gokul/' target='_blank'> <FaLink />Author</a>
    </div>


</footer>
</div>

    
    
</div>)
}
export default Home; 