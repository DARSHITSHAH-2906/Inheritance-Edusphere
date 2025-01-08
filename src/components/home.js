import React from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const EduSphere = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the click on "Get Started Free" button
  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the Login page
  };

  return (
    <>
      <style>
        {`
          /* General Styles */
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

          body {
            margin: 0;
            padding: 0;
            font-family: 'Orbitron', sans-serif;
            background-color: #111;
            color: #fff;
            overflow-x: hidden;
          }
          a {
            text-decoration: none;
          }
          h1, h2, h3, h4, h5, h6, p {
            margin: 0;
            padding: 0;
          }

          /* Header */
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            background-color: #111;
            border-bottom: 1px solid #222;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
          }
          .logo {
            display: flex;
            align-items: center;
          }
          .logo img {
            width: 70px;
            margin-right: 10px;
          }
          .logo span {
            font-size: 24px;
            font-weight: bold;
            color:#f90;
          }
          nav {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          nav a {
            color: #fff;
            font-size: 16px;
            transition: color 0.3s;
          }
          nav a:hover {
            color: #f90;
          }
          .button {
            padding: 10px 20px;
            background-color: #f90;
            color: #000;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .button:hover {
            background-color: #ffae42;
          }

          /* Hero Section */
          .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
            padding-top: 80px;
            height: 100vh;
            background: url('images/home hero image.avif') no-repeat center center/cover;
            position: relative;
            overflow: hidden;
            margin-top: 80px;
            animation: fadeInImage 2s ease-out forwards;
          }
          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInContent 1.5s ease-out 2s forwards;
          }
          .hero-title {
            font-size: 64px;
            font-weight: bold;
            color: #f90;
            margin-bottom: 20px;
          }

          /* Stats Section */
          .stats {
            display: flex;
            justify-content: center;
            gap: 100px;
            position: relative;
            z-index: 2;
            margin-top: 20px;
          }
          .stat-box {
            background-color: rgba(51, 51, 51, 0.8);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            color: #fff;
            width: 250px;
            font-size: 24px;
            transition: background-color 0.3s ease-in-out;
          }
          .stat-box:hover {
            background-color: #f90;
          }

          /* Box Styling */
          .container {
            display: flex;
            justify-content: space-between;
            padding: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
            gap: 150px;
          }

          .info-box {
            width: 200px;
            height: 200px;
            padding: 20px;
            background-color: rgba(51, 51, 51, 0.8);
            color: #f90;
            border-radius: 20px;
            text-align: center;
            margin-top: 200px;
            cursor: pointer;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s ease-in-out;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }

          .info-box:hover {
            transform: rotateY(180deg);
          }

          /* Front and Back of the Card */
          .info-box .front,
          .info-box .back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 5px;
          }

          .info-box .front {
            background-color: rgba(51, 51, 51, 0.8);
            color: #f90;
          }

          .info-box .back {
            background-color: #333;
            color: #f90;
            transform: rotateY(180deg);
            text-align: left;
            padding: 20px;
          }

          /* Info Box Hover Effect */
          .info-box:hover .front {
            opacity: 1;
          }

          .info-box:hover .back {
            opacity: 1;
            transform: rotateY(0deg);
          }

          /* Footer Styling */
          footer {
            background-color: #111;
            color: #fff;
            text-align: center;
            padding: 20px;
            position: relative;
            bottom: 0;
            width: 100%;
          }
          footer a {
            color: #f90;
            text-decoration: none;
            margin: 0 15px;
            font-size: 16px;
          }
          footer a:hover {
            color: #ffae42;
          }
          footer .copyright {
            font-size: 14px;
            margin-top: 10px;
          }

          /* Animations */
          @keyframes fadeInImage {
            from {
              opacity: 0;
              transform: scale(1.1);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeInContent {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Header */}
      <header>
        <div className="logo">
          <img src="images/Edusphere logo.png" alt="EduSphere Logo" />
          <span>EduSphere</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#contest">Contest</a>
          <a href="#Payment">Payment</a>
          <button className="button" onClick={handleGetStarted}>Get Started Free</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to EduSphere</h1>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="stat-box">
          <h3>Courses</h3>
          <p>762k+</p>
        </div>
        <div className="stat-box">
          <h3>Students</h3>
          <p>300k+</p>
        </div>
        <div className="stat-box">
          <h3>17+ Years</h3>
          <p>Educational Excellence</p>
        </div>
      </section>

      {/* Container for the boxes */}
      <div className="container">
        {/* Info Boxes */}
        <div className="info-box">
          <div className="front">
            <h3>Learn More About Courses</h3>
          </div>
          <div className="back">
            <p>Explore our diverse range of courses designed to enhance your skills. We offer courses in various domains like Computer Science, Data Science, and more!</p>
          </div>
        </div>

        <div className="info-box">
          <div className="front">
            <h3>Safe and Secure Platform</h3>
          </div>
          <div className="back">
            <p>Your data is safe with us! We use the latest encryption technologies to ensure that your learning materials and information are protected at all times.</p>
          </div>
        </div>

        <div className="info-box">
          <div className="front">
            <h3>Transparent Transactions</h3>
          </div>
          <div className="back">
            <p>We believe in full transparency. All transactions on our platform are recorded on the blockchain, ensuring security and accountability for all users.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div>
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 EduSphere. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default EduSphere;