import React from 'react'
import aboutus from '../assets/images.jpg';
import '../CSS/aboutus.CSS'

const AboutUs = () => {
	return (
		<div className="aboutus-section">
			<div className="aboutus-container">
				<div className="aboutus-content">
					<h1>Misson</h1>
					<div className="p">
						<p>
							<i class="fa-solid fa-pen-fancy"></i>
							At , we are dedicated to creating sustainable change in our communities.
						</p>
						<p>
							<i class="fa-solid fa-pen-fancy"></i>
							Our mission is to
							empower individuals and promote social justice through education, healthcare, and advocacy.
						</p>
						<p>
							<i class="fa-solid fa-pen-fancy"></i>
							With
							a passionate team of volunteers and partners, we work tirelessly to address pressing issues, uplift
							marginalized voices, and foster a culture of collaboration and support.
						</p>
						<p> Together, we believe in
							building a brighter future for all. Join us in making a difference!
						</p>
					</div>
				</div>



				<div class="aboutus-img">
					<img src={aboutus} alt="image" />
				</div>
			</div>

			<div className="vision">
				<h1>Vision</h1>
				<p>our vision is to serve the people who are in need of helping them.</p>
				<p>our team will help the people where there problems are treated.</p>
				<p>there is saying that when we treat people</p>
			</div>
		</div >

	)
}

export default AboutUs