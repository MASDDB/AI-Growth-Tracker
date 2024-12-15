import React, { useEffect, useState } from 'react';

    const Quote = () => {
      const [quote, setQuote] = useState('');

      useEffect(() => {
        const fetchQuote = async () => {
          try {
            const response = await fetch('https://zenquotes.io/api/random');
            const data = await response.json();
            setQuote(data[0].q);
          } catch (error) {
            console.error('Error fetching quote:', error);
          }
        };

        fetchQuote();
      }, []);

      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Motivational Quote</h2>
          <blockquote className="text-lg italic">
            "{quote}"
          </blockquote>
        </div>
      );
    };

    export default Quote;
