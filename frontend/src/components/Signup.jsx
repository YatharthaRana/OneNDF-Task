import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Signup.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phn: '',
    email: '',
    pan: '',
    loantype: '', 
    loanamount: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formData){
        axios.post('http://localhost:8000/register/',formData)
        .then((response)=>{
            console.log(response.data)
            console.log('Form Data:', formData);
            window.location.href = '/dashboard'
        })
        .catch((error)=>{
            console.log(error)
            window.location.href = '/signup-again'
        })
    }
    
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          name="phn"
          value={formData.phn}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        PAN Number:
        <input type="text" name="pan" value={formData.pan} onChange={handleChange} required />
      </label>

      <label>
        Type of Loan Required:
        <select name="loantype" value={formData.loantype} onChange={handleChange} required>
          <option value="">Select Loan Type</option>
          <option value="Personal Loan">Personal Loan</option>
          <option value="Business Loan">Business Loan</option>
          <option value="Home Loan">Home Loan</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label>
        Loan Amount:
        <input type="number" name="loanamount" value={formData.loanamount} onChange={handleChange} required />
      </label>

      <button className='submit'>Submit</button>
    </form>

    {/* Popup */}
    {showPopup && (
        <div className="popup">
          <p>Account already exists. Please log in or use a different email.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

    </div>
  );
};

export default Signup;
