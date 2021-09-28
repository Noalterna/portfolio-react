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
                <div>
                    <p>1</p>
                    <div></div>
                    <p>2</p>
                    <div></div>
                    <p>3</p>
                    <div></div>
                </div>
                <div>
                    <p>Project Title</p>
                    <p>Project brief</p>

                </div>

            </div>
        </>
    )
};

export default Home;
