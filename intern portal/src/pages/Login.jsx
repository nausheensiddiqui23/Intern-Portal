import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }; 

    return (
       <div className="login-container">
        <h1>Intern Login</h1>
         <form className="login-form">
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <button type="submit">Login</button>
      </form>
     </div>
    );
}