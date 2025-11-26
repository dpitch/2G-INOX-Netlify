import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  };

  return (
    <a href="#" className={`block ${className}`}>
      <img 
        src="/img/imgi_1_2Ginox_V3 copy.png" 
        alt="2G Metal Construction" 
        className={`${heights[size]} w-auto`}
      />
    </a>
  );
};
