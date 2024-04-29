import React, { useState } from 'react';

const OpenInputBox = () => {
  // State to track whether the input box is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle button click and toggle the state
  const toggleInputBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleInputBox}>Open Input Box</button>
      {isOpen && (
        <div>
          <input type="text" placeholder="Enter something..." />
        </div>
      )}
    </div>
  );
};

export default OpenInputBox;
