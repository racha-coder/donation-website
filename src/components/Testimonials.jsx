import React, { useEffect, useRef, useState } from 'react';
import '../CSS/Testimonials.css'

const Testimonials = () => {
	const [scrollerIndex, setScrollerIndex] = useState(0);
	const containerRef = useRef(null);

	const handleNext = () => {
		if (scrollerIndex >= containerRef.current.children.length - 1) {
			return;
		}
		setScrollerIndex(prev => prev + 1);
	}

	useEffect(() => {
		containerRef.current.style.translate = `-${(scrollerIndex * 100) + scrollerIndex * 3}%`
	}, [scrollerIndex])

	const handlePrev = () => {
		if (scrollerIndex < 0) {
			return;
		}
		setScrollerIndex(prev => prev - 1);
	}

	return (
		<>
			<section className='testimonials-logo-wrapper'>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/7.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/1.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/2.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/3.png" alt="testimonial-logo" />
				</div>
			</section>
			<section className='testimonials-section'>
				{scrollerIndex > 0 &&
					<div
						className="prev-btn place-left"
						onClick={handlePrev}
					>
						<div className="fa-solid fa-chevron-left"></div>
					</div>
				}
				<div className='testimonials-wrapper'>
					<div className="slider" ref={containerRef}>
						<article className='testimonial'>
							<div className="testimonial-img">
								<img src='./src/assets/testimonials/testimonial.jpg' alt="" />
							</div>
							<div className="content">
								<h2 className="name">
									Lorem, ipsum Name 1
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
						<article className='testimonial'>
							<div className="testimonial-img">
								<img src='./src/assets/testimonials/testimonial.jpg' alt="" />
							</div>
							<div className="content">
								<h2 className="name">
									Lorem, ipsum Name 2
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
						<article className='testimonial'>
							<div className="testimonial-img">
								<img src='./src/assets/testimonials/testimonial.jpg' alt="" />
							</div>
							<div className="content">
								<h2 className="name">
									Lorem, ipsum Name 3
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
					</div>
				</div>
				<div
					className="next-btn place-right"
					onClick={handleNext}
				>
					<div className="fa-solid fa-chevron-right"></div>
				</div>
			</section>

			<section className='testimonials-logo-wrapper end'>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/4.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/5.png" alt="testimonial-logo" />
				</div>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/6.svg" alt="testimonial-logo" />
				</div>
				<div className="testimonial-logo">
					<img src="./src/assets/testimonials/7.png" alt="testimonial-logo" />
				</div>
			</section>
		</>
	)
}

export default Testimonials