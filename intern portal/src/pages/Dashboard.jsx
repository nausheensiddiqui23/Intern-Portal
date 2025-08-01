import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [data, setData] = useState({});


useEffect (()=> {
    axios.get("https://api.example.com/data")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
}, []);

return (
    <div>
        <h1>Welcome, {data.name}</h1>
        <p><strong>Referral Code:</strong> {data.referralCode}</p>
        <p><strong>Total Donations: </strong>₹{data.donations}</p>
        <h3>🎁 Rewards / Unlockables</h3>
        <ul>
        <li>🔓 Bronze Badge – 10 Donations</li>
        <li>🔓 Silver Badge – 50 Donations</li>
        <li>🔓 Gold Badge – 100 Donations</li>
        </ul>
    </div>
);

}