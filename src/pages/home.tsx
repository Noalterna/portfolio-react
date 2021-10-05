import React from "react";
import '../home.css';
import '../App.css'
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        document.body.style.backgroundColor = '#F9F9F9',
        <>
        <Navbar/>
            <div className="App">
                <div className="project-container">
                    <h1 id="Project-title">Train Delay Mobile Application</h1>
                    <p id="Project-brief">Train Delay is a mobile app that let's you check if your train is late.</p>

                </div>

            </div>
        </>
    )
};

export default Home;
