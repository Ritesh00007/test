import React, { useState } from "react";
import Draggable from "react-draggable";
import "./FloatingUI.css";

const FloatingUI = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFloatingUI = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Draggable>
      <div className={`floating-container ${isOpen ? "open" : "closed"}`}>
        <div className="floating-header">
          <span>Floating Plugin</span>
          <button onClick={toggleFloatingUI}>{isOpen ? "Close" : "Open"}</button>
        </div>
        {isOpen && (
          <div className="floating-content">
            <p>This is your dynamic floating UI content!</p>
            <button onClick={() => alert("Action performed!")}>Click Me</button>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default FloatingUI;
