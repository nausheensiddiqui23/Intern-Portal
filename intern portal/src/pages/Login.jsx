import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (name) {
          localStorage.setItem('internName', name);
        
        navigate("/dashboard");
        }
    }; 

    return (
       <form onSubmit={handleLogin}>
        <h1>Intern Login</h1>
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        
        <input type="email" placeholder="Enter your email" required />
       </form>
    );
}