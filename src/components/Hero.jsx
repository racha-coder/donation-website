import React, { useState } from 'react';
import logo from '../assets/logo.png';
import hero1 from '../assets/hero-1.jpg';
import '../CSS/Hero.css';

const images = [

]

const Hero = () => {
	const [scrollerIndex, setScrollerIndex] = useState(0);

	return (
		<div className='hero-header'>
			<div className="logo-wrapper">
				<img src={logo} alt="Logo Image" />
			</div>
			<div className="header-wrapper">
				<h1 className="hero-text">
					People look beautiful <br /> with a Smile
				</h1>
				<div className="hero-description-text">
					<div>There are a lot of people in this world who needs help.</div>
					<div>We help them out to make this world a better place for everyone with beautiful smiles</div>
				</div>
			</div>
			<button className='cta-button' type="button">
				Donate to us
				<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
					<path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
				</svg>
			</button>
			<div className="display-images">
				<img src={hero1} alt="" />
			</div>
			<div className="next-button">
				<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
					<path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
				</svg>
			</div>
		</div >
	)
}

export default Hero