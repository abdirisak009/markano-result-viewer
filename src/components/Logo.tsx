
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Flame/Energy swirl */}
          <path
            d="M24 4C24 4 12 12 12 24C12 32 16 40 24 44C32 40 36 32 36 24C36 12 24 4 24 4Z"
            fill="url(#flame-gradient)"
            className="animate-pulse"
          />
          <path
            d="M24 8C24 8 16 14 16 24C16 30 19 36 24 38C29 36 32 30 32 24C32 14 24 8 24 8Z"
            fill="#BBF936"
            opacity="0.8"
          />
          <path
            d="M24 12C24 12 20 16 20 22C20 26 21.5 30 24 32C26.5 30 28 26 28 22C28 16 24 12 24 12Z"
            fill="#FFFFFF"
            opacity="0.6"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BBF936" />
              <stop offset="50%" stopColor="#9AE834" />
              <stop offset="100%" stopColor="#7EC432" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-markano-green opacity-20 blur-md rounded-full"></div>
      </div>
      
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-wider glow-text">
          MARKANO
        </h1>
        <span className="text-xs text-markano-green font-medium tracking-widest uppercase">
          APP
        </span>
      </div>
    </div>
  );
};

export default Logo;
