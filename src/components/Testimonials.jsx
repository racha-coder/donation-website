import React from 'react';
import '../CSS/Testimonials.css'

const Testimonials = () => {
	return (
		<>
			<section className='testimonials-logo-wrapper'>
				<div className="testimonial-wrapper">
					<img src="./src/assets/testimonials/1.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-wrapper">
					<img src="./src/assets/testimonials/2.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-wrapper">
					<img src="./src/assets/testimonials/3.png" alt="testimonial-logo" />
				</div>
			</section>

			<section className='testimonials-wrapper'>
				<article className='testimonial'>
					<div className="testimonial-img">
						<img src='./src/assets/testimonials/testimonial.jpg' alt="" />
					</div>
					<div className="content">
						<h2 className="name">
							Lorem, ipsum Name
						</h2>
						<div className="message">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam laborum aliquam provident modi excepturi earum iusto quae necessitatibus repellat nisi eveniet sit, sunt fugit. Esse voluptatibus ex facilis molestiae fugit.
						</div>
						<div className="rating">
							<div className="fa-solid fa-star" style={{ color: 'yellow' }}></div>
							<div className="fa-solid fa-star" style={{ color: 'yellow' }}></div>
							<div className="fa-solid fa-star" style={{ color: 'yellow' }}></div>
							<div className="fa-solid fa-star" style={{ color: 'yellow' }}></div>
							<div className="fa-solid fa-star"></div>
						</div>
					</div>
				</article>
			</section>


			<section className='testimonials-logo-wrapper'>
				<div className="testimonial-wrapper">
					<img src="./src/assets/testimonials/4.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-wrapper">
					<img src="./src/assets/testimonials/5.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-wrapper">
					<img src="./src/assets/testimonials/6.svg" alt="testimonial-logo" />
				</div>
				<div className="testimonial-wrapper">
					<img src="./src/assets/testimonials/7.png" alt="testimonial-logo" />
				</div>
			</section>

			<div className="nest-btn">
				
			</div>
		</>
	)
}

export default Testimonials