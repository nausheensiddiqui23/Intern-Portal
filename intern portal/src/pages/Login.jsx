import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };
    return (
       <div className="page-container">
        <div>
            <h2>Intern Login</h2>
            <button onClick={handleLogin}>Login as Nausheen</button>
       </div>
     </div>
    );
}