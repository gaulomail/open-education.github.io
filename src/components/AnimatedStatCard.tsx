import React, { useState, useEffect, useRef } from 'react';

interface AnimatedStatCardProps {
  targetValue: string; // e.g., "50K+", "200+", "95%"
  label: string;
  icon: React.ReactNode;
  animationDelay?: string;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({ targetValue, label, icon, animationDelay }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const target = parseInt(targetValue.replace(/[^0-9]/g, '')); // Extract number
  const suffix = targetValue.replace(/[0-9]/g, ''); // Extract suffix like K+, %, etc.
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || isNaN(target)) return;

    let start = 0;
    const duration = 1500; // Animation duration in ms
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);
      
      setCurrentValue(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

  }, [isVisible, target]);

  const displayValue = isNaN(target) ? targetValue : `${currentValue}${suffix}`;

  return (
    <div 
      ref={cardRef}
      className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300 animate-in fade-in zoom-in-95 duration-500 ease-out"
      style={{ animationDelay: animationDelay || '0ms' }}
    >
      <div className="flex justify-center items-center mb-3 text-purple-300">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-10 h-10' })}
      </div>
      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
        {displayValue}
      </div>
      <div className="text-sm sm:text-base font-medium text-gray-200">{label}</div>
    </div>
  );
};

export default AnimatedStatCard;
