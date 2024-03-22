import React, { useEffect } from 'react';
import './hello.css';

const Hello = () => {
    useEffect(() => {
        // Set default value to "Ethereum" when component mounts
        document.getElementById("dropdownMenuButton").innerText = "Ethereum";

        // Function to handle click events on dropdown items
        const handleDropdownItemClick = (event) => {
            // Set selected dropdown item as button text
            document.getElementById("dropdownMenuButton").innerText = event.target.innerText;
        };

        // Add click event listener to dropdown items
        const dropdownItems = document.querySelectorAll(".dropdown-item");
        dropdownItems.forEach(item => {
            item.addEventListener("click", handleDropdownItemClick);
        });

        // Cleanup event listeners when component unmounts
        return () => {
            dropdownItems.forEach(item => {
                item.removeEventListener("click", handleDropdownItemClick);
            });
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className="btnsss">
            <div className="button">
                <button type="button" className="btn btn-primary">
                    Connect Wallet
                </button>
            </div>
            <div className="dropdown">
                <button id="dropdownMenuButton" className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ethereum
                </button>   
                <ul className="dropdown-menu ">
                    <li><a className="dropdown-item" href="#">Ethereum</a></li>
                    <li><a className="dropdown-item" href="#">Polygon</a></li>
                    <li><a className="dropdown-item" href="#">BSC</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Hello;
