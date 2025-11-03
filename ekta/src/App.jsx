import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaGithub, FaWordpress, FaYoutube, FaLinkedin } from "react-icons/fa";


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState({
    icon: null,
    text: "",
    url: "",
  });

  const links = [
    {
      icon: <FaGithub size={50} />,
      text: "Code Plug-In",
      url: "https://github.com/ekta-developer",
    },
    {
      icon: <FaWordpress size={50} />,
      text: "Readers Diet",
      url: "https://thestartofjourneys.wordpress.com",
    },
    {
      icon: <FaYoutube size={50} />,
      text: "Vlog Logs",
      url: "https://www.youtube.com/@shareNNcare",
    },
    {
      icon: <FaLinkedin size={50} />,
      text: "Employee @OpenSource",
      url: "https://www.linkedin.com/in/ekta-srivastava-b65064277/",
    },
  ];

  const handleClick = (link) => {
    if (window.innerWidth <= 430) {
      setActiveLink(link);
      setModalOpen(true);
    } else {
      window.open(link.url, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "60px",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
        </header>

        <main
          style={{
            marginTop: "60px",
            marginBottom: "60px",
            minHeight: "calc(100vh - 120px)",
            backgroundColor: "#fff",
          }}
        ></main>

        <footer
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "80px",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px", // default gap for desktop
            padding: "10px 0",
            marginBottom: "25px",
            fontFamily: "'Brush Script MT', cursive",
            fontSize: "1.2rem",
            letterSpacing: "1px",
          }}
          className="footer-container"
        >
          {links.map((link, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleClick(link)}
            >
              <div
                className="footer-icon"
                style={{ color: "#000", fontSize: "1.8rem" }}
              >
                {link.icon}
              </div>
              <span className="footer-text" style={{ fontSize: "1.5rem" }}>
                {link.text}
              </span>
            </div>
          ))}
        </footer>

        {modalOpen && (
          <div className="modal-bg" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <a
                href={activeLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {activeLink.icon} {activeLink.text}
              </a>
            </div>
          </div>
        )}
      </>{" "}
    </>
  );
}

export default App;
