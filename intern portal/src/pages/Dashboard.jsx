import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [data, setData] = useState({});
}

useEffect (()=> {
    axios.get("https://api.example.com/data")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
}, []);



})