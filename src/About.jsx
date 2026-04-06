import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import aboutImage from "./assets/about-img.png";
import logo from "./assets/logo.png";
import { Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";

function About({ name, setIsLoggedIn, cart }) {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSocialClick = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000); // 3 seconds
  };

  const handleSendMessage = () => {
    // show toast
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // clear inputs
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

  return (
    <div className="products-header">

      {/* TOP ROW */}
      <div className="profile-section">
        <User size={28} />
        <span className="welcome-text">Welcome {name}</span>

        <button
          className="logout-button"
          onClick={() => {
            setIsLoggedIn(false);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      {/* DIVIDER */}
      <div className="header-divider"></div>

      {/* NAVBAR */}
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        cartCount={cart.reduce((t, i) => t + i.quantity, 0)}
      />

      {/* DIVIDER */}
      <div className="header-divider"></div>

      <div className="about-layout">

      {/* LEFT: IMAGE + LOGO STACK */}
      <div className="about-left">
        <img
          src={aboutImage}
          alt="about"
          className="about-image"
        />

        <img
          src={logo}
          alt="logo"
          className="about-logo"
        />
      </div>

      {/* MIDDLE: DESCRIPTION */}
      <div className="about-middle">
        <p>
          We believe that great sound deserves an equally great experience. 
          Our goal is to create a space where premium audio products meet thoughtful design, allowing you to explore, discover, and enjoy technology in a way that feels effortless.

          <br /><br />
          We are inspired by the idea that music is more than just sound. It's atmosphere, emotion, and connection.
          Whether it's filling a room with rich, immersive audio or creating a personal listening experience that travels with you, the right product can completely transform how you engage with your environment.
          That belief is what drives everything we do.
          <br /><br />

          Our collection is carefully curated to reflect modern lifestyles. 
          From compact speakers designed for everyday convenience to powerful home setups built for cinematic experiences, each product is selected with both performance and design in mind.
          We focus on versatility, offering options that adapt to different spaces, preferences, and moments.
          <br /><br />

          We also understand that choosing the right product should feel intuitive. 
          That's why we've built an experience that puts clarity first. 
          You can explore different variations, compare options visually, and make decisions with confidence. 
          Every detail — from how products are presented to how interactions flow — is designed to feel smooth, responsive, and natural.

          <br /><br />

          Beyond the products themselves, we care deeply about the experience of using our platform. 
          We aim to remove unnecessary complexity and replace it with simplicity. 
          From browsing to managing your selections, every step is designed to feel seamless. 
          It's not just about functionality — it's about creating something that feels refined and enjoyable to use.
        </p>

        <div className="about-socials">

          <Mail size={20} onClick={handleSocialClick} />
          <Phone size={20} onClick={handleSocialClick} />
          <Globe size={20} onClick={handleSocialClick} />

          {/* Instagram */}
          <svg onClick={handleSocialClick} width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
            <circle cx="17" cy="7" r="1.5" fill="white"/>
          </svg>

          {/* X */}
          <svg onClick={handleSocialClick} width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L20 20M20 4L4 20" stroke="white" strokeWidth="1.5"/>
          </svg>

          {/* TikTok */}
          <svg onClick={handleSocialClick} width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14 3V14.5A3.5 3.5 0 1 1 10.5 11" stroke="white" strokeWidth="1.5"/>
            <path d="M14 3C15.5 5 17.5 6 20 6" stroke="white" strokeWidth="1.5"/>
          </svg>

        </div>
      </div>

      {/* RIGHT: CONTACT */}
      <div className="about-right">
        <div className="contact-card">
          <h2>Contact</h2>

          <input
            placeholder="Your name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            placeholder="Your email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>

          <button className="contact-btn" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>

    </div>

    {showToast && (
    <div className="cart-toast">
      <div>
        <div className="toast-title">Message sent</div>
        <div className="toast-sub">We’ll get back to you soon</div>
      </div>
    </div>
  )}
    </div>
  );
}

export default About;
