import React,{useState} from "react";


const Register=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const validateForm = () => {
        let formErrors = {};
        let isValid = true;
    
        if (!formData.name) {
          formErrors.name = 'Name is required';
          isValid = false;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
          formErrors.email = 'Please enter a valid email';
          isValid = false;
        }
    
        if (!formData.password) {
          formErrors.password = 'Password is required';
          isValid = false;
        }
    
        if (formData.password !== formData.confirmPassword) {
          formErrors.confirmPassword = 'Passwords must match';
          isValid = false;
        }
    
        setErrors(formErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form submitted successfully!', formData);
          // You can handle the form submission logic here
        }
      };
    
      return (
        <div className="register-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
    
            <div>
              <label>Email :</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
    
            <div>
              <label>Password :</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
    
            <div>
              <label>Confirm Password :</label>
              <input
                type="password"
                name="confirmPassword"
               placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
    
            <button type="submit">Register</button>
          </form>
        </div>
      );
}

export default Register