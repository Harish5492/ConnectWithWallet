import React, { useState, useEffect } from 'react';
import './detail.css';

const Detail = () => {
  // Define state variables for account, wallet, and chainId
  const [account, setAccount] = useState("0x000...00");
  const [wallet, setWallet] = useState("Not Connected");
  const [chainId, setChainId] = useState("Not Connected");

  // Simulating data fetching using useEffect
  useEffect(() => {
    // Assuming you have some asynchronous data fetching function, replace this with your actual data fetching logic
    const fetchData = async () => {
      // Simulate fetching data
      // Here, you would typically fetch data from an API or some external source
      // For demonstration purposes, I'll simulate a delay using setTimeout
      setTimeout(() => {
        // Update state variables with fetched data
        setAccount("0x123456789...");
        setWallet("Connected");
        setChainId("1234");
      }, 2000); // Simulate a delay of 2 seconds (2000 milliseconds)
    };

    // Call the data fetching function
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after component mounts

  return (
    <div className='Details'>
      <div className='Account'>
        <h4>Account : </h4>
        <h4>{account}</h4>
      </div>
      <div className='Wallet'>
        <h4>Wallet : </h4>
        <h4>{wallet}</h4>
      </div>
      <div className='ChainId'>
        <h4>ChainId : </h4>
        <h4>{chainId}</h4>
      </div>
    </div>
  );
};

export default Detail;
