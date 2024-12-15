import React, { useState, useEffect } from 'react';

    const Gamification = () => {
      const [points, setPoints] = useState(0);
      const [streak, setStreak] = useState(0);
      const [level, setLevel] = useState(1);

      useEffect(() => {
        // Simulate points and streaks for demonstration
        const simulatePointsAndStreaks = () => {
          setPoints(150);
          setStreak(5);
          setLevel(2);
        };

        simulatePointsAndStreaks();
      }, []);

      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Gamification</h2>
          <div className="mb-2">
            <span className="text-lg">Points: {points}</span>
          </div>
          <div className="mb-2">
            <span className="text-lg">Streak: {streak} days</span>
          </div>
          <div className="mb-2">
            <span className="text-lg">Level: {level}</span>
          </div>
        </div>
      );
    };

    export default Gamification;
