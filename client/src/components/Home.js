import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'; 

const Home = () => {
    return (
        <div className="home text-center mt-5"> {/* Applying custom class */}
            <h2 className="display-4">Welcome to the Home Page</h2>
            <p className="lead">You are successfully logged in</p>
            <p>
                <Link to="/login" className="btn btn-link">Back</Link>
            </p>
        </div>
    );
}

export default Home;
