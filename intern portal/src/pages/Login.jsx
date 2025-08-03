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
       <form>
        <h1>Intern Login</h1>
       </form>>
    );
}