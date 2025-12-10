import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

interface NavLinkProps {
  item: NavItem;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Smart navigation link component that handles both:
 * - Internal routes (e.g., /services) using React Router's Link
 * - Anchor links (e.g., #services) using regular <a> tags
 */
export const NavLink: React.FC<NavLinkProps> = ({ item, className, onClick, children, style }) => {
  const location = useLocation();
  
  // Check if this is an anchor link (starts with #)
  const isAnchorLink = item.href.startsWith('#') || item.isAnchor;
  
  // For anchor links on different pages, we need to navigate to home first
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    
    // If we're not on the homepage and clicking an anchor, go to homepage with hash
    if (location.pathname !== '/' && isAnchorLink) {
      e.preventDefault();
      window.location.href = '/' + item.href;
    }
  };

  if (isAnchorLink) {
    return (
      <a 
        href={item.href}
        className={className}
        onClick={handleAnchorClick}
        style={style}
      >
        {children || item.label}
      </a>
    );
  }

  return (
    <Link 
      to={item.href}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children || item.label}
    </Link>
  );
};
