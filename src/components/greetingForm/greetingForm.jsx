// src/components/GreetingForm.jsx
import React, { useState } from 'react';

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Greet</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default GreetingForm;
