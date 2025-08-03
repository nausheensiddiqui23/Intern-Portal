import React from 'react';

export default function Dashboard() {
  const name = localStorage.getItem('internName') || 'Intern';

  return (
    <div>
      <h1>Welcome, {name}</h1>
      <p>Referral Code: {name.toLowerCase()}2025</p>
      <p>Total Donations Raised: ₹5000</p>
      <h2>Rewards</h2>
      <ul>
        <li>🥇 Bronze Badge</li>
        <li>🎁 Gift Voucher</li>
      </ul>
    </div>
  );
}
