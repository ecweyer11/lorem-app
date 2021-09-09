import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h2>Lorem Ipsum Generator</h2>
      <h4>Tired of Boring Placeholder Text? Heres the solution:</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input 
          type='number'
          min='1'
          max='8'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
