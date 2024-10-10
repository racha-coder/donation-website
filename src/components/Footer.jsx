import '../CSS/footer.css';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
        <section className='company'>
            <div className="logo-img">
                <img src={logo} alt="" />
            </div>
            <h3 className='footer-column-heading'>Hear from us?</h3>
            <div className='footer-form'>
                <input type="email" placeholder='Enter your email' />
                <button type='submit'>Subscribe</button>
            </div>
        </section>
        <section className='general'>
            <h3 className='footer-column-heading'>General</h3>
            <ul>
                <li><a href="">Events</a></li>
                <li><a href="">Programs</a></li>
                <li><a href="">Testimonials</a></li>
            </ul>
        </section>
        <section className='get-in-touch'>
            <h3 className='footer-column-heading'>Get in Touch</h3>
            <div className='company-email'>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:companyname@company.com">companyname@company.com</a>
            </div>
            <div className="social-links">
                <a href=""><div className="fa-brands fa-whatsapp"></div></a>
                <a href=""><div className="fa-brands fa-facebook"></div></a>
                <a href=""><div className="fa-brands fa-twitter"></div></a>
                <a href=""><div className="fa-brands fa-instagram"></div></a>
            </div>
        </section>
    </footer>
  )
}

export default Footer