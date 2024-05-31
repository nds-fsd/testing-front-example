// src/components/ToggleDetails.jsx
import React, { useState } from 'react';

const ToggleDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
      {showDetails && <p>Here are some details...</p>}
    </div>
  );
};

export default ToggleDetails;