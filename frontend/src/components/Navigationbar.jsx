import React, {useState, useEffect} from 'react';
import logo from '../assets/images/logo.png'; 
import '../styles/Navigationbar.css'; 
import axios from 'axios';

const Navigationbar = () => {

    const [name, setName] = useState('');

    useEffect(()=>{
        async function getUserData(){
            try {
                const name = await axios.get('http://localhost:8000/register/')
                console.log(name.data)
                console.log(name.data[name.data.length-1].name)
                setName(name.data[name.data.length-1].name)
                
            } catch (error) {
                console.log(error)
            }
        } getUserData();

    
        
    },[])


  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="welcome-text">Welcome, {name}</div>
      </div>
      <div className="right-section">
      <img className='logo' src={logo} alt="OneNDF" />
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navigationbar;
