import React from "react";

export default function Dashboard() {
  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#121212", minHeight: "100vh" }}>
      <h1>Welcome, Intern</h1>
      <p>Referral Code: <strong>nausheen2025</strong></p>
      <p>Total Donations Raised: ₹5000</p>
      
      <h2>Rewards / Unlockables</h2>
      <ul>
        <li>🎖️ Bronze Badge - Achieved</li>
        <li>🥈 Silver Badge - Locked</li>
        <li>🎁 Custom T-shirt - Locked</li>
      </ul>
    </div>
  );
}
