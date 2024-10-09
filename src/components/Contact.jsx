import { useState } from 'react';
import '../CSS/contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        address: ''
    });

    // State to handle errors
    const [errors, setErrors] = useState({});

    // Handle form input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Validate email format
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        // Simple validation
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            formErrors.email = "Invalid email format";
        }
        if (!formData.contact) formErrors.contact = "Contact number is required";
        if (!formData.address) formErrors.address = "Address is required";

        setErrors(formErrors);

       
        if (Object.keys(formErrors).length === 0) {
            console.log("Form Data Submitted:", formData);
            alert("Form Submitted Successfully!");
        }
    };

    return(
        <>
            <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    </div>

                    
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>

                  
                    <div>
                        <label>Contact Number:</label>
                        <input
                            type="tel"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                        />
                        {errors.contact && <p style={{ color: "red" }}>{errors.contact}</p>}
                    </div>

                   
                    <div>
                        <label>Address:</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                        />
                        {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>

            </div> 
            </>
    );
}

export default Contact;


