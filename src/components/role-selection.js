import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    alert(`You have selected the role: ${role}`);
    // Store the role in session storage (optional)
    sessionStorage.setItem("role", role);
    // Redirect to the login page
    navigate("/login");
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, delay: 0.75 ,duration: 5 } },
  };

  return (
    <div
      style={{
        margin: "0",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to right, #02225e, #2a5298)",
        color: "#fbf8f8",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 1rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          animation: "fadeIn 1.5s ease",
        }}
      >
        Edusphere
      </div>

      {/* Role Images and Descriptions */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        <motion.div
          style={{ textAlign: "center", margin: "0 2rem" }}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/images/educator.jpg"
            alt="Educator"
            style={{
              width: "350px",
              height: "250px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
              e.target.style.outline = "5px solid rgba(0, 204, 255, 0.7)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
              e.target.style.outline = "none";
            }}
          />
          <motion.div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "1rem",
              color: "#f9f7f7",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Educator
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.2rem",
              color: "#f7f5f5",
              maxWidth: "600px",
              lineHeight: "1.6",
              marginTop: "1rem",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <strong>Share your knowledge</strong>
            <br />
            As an Educator, you can guide students, create content, and foster
            learning in a blockchain-based system.
          </motion.div>
        </motion.div>

        <motion.div
          style={{ textAlign: "center", margin: "0 2rem" }}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/images/student.jpg"
            alt="Student"
            style={{
              width: "350px",
              height: "250px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
              e.target.style.outline = "5px solid rgba(0, 204, 255, 0.7)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
              e.target.style.outline = "none";
            }}
          />
          <motion.div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "1rem",
              color: "#f9f7f7",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Student
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.2rem",
              color: "#f7f5f5",
              maxWidth: "600px",
              lineHeight: "1.6",
              marginTop: "1rem",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <strong>Learn and grow</strong>
            <br />
            As a Student, you can access courses, gain new skills, and interact
            with an innovative educational community.
          </motion.div>
        </motion.div>
      </div>

      {/* Role Selection Buttons */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button
          style={{
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            color: "#0c0c0c",
            padding: "1rem 2.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
          }}
          onClick={() => handleRoleSelection("Educator")}
        >
          I am an Educator
        </button>
        <button
          style={{
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            color: "#0c0c0c",
            padding: "1rem 2.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
          }}
          onClick={() => handleRoleSelection("Student")}
        >
          I am a Student
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
