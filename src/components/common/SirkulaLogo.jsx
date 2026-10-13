import React from 'react';

/**
 * SirkulaLogo - Official Brand Mark
 * Represents the closed circular economy loop with a living bio-green sprout in the center.
 */
export default function SirkulaLogo({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Sirkula Logo"
    >
      <defs>
        <linearGradient id="logoSirkulaBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B4D3E" />
          <stop offset="100%" stopColor="#0E2F25" />
        </linearGradient>

        <linearGradient id="logoLoopArc1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="logoLoopArc2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E6AF2E" />
          <stop offset="60%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient id="logoSproutGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>

      {/* Circular Base Badge with Forest Border */}
      <circle cx="32" cy="32" r="30" fill="url(#logoSirkulaBg)" stroke="#2E7D5B" strokeWidth="1.5" />

      {/* Outer Circular Flow Arc 1 (Top & Right clockwise stroke) */}
      <path
        d="M 23 13 A 20 20 0 0 1 51 31"
        stroke="url(#logoLoopArc1)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Flow Arrowhead 1 */}
      <path
        d="M 48 36 L 52.5 30 L 45.5 28.5 Z"
        fill="#34D399"
      />

      {/* Outer Circular Flow Arc 2 (Bottom & Left clockwise stroke) */}
      <path
        d="M 41 51 A 20 20 0 0 1 13 33"
        stroke="url(#logoLoopArc2)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Flow Arrowhead 2 */}
      <path
        d="M 16 28 L 11.5 34 L 18.5 35.5 Z"
        fill="#E6AF2E"
      />

      {/* Center Organic Sprout & Leaves */}
      {/* Stem */}
      <path
        d="M 32 44 C 32 37 32 32 32 26"
        stroke="#6EE7B7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Right Primary Leaf */}
      <path
        d="M 32 33 C 32 23 44 20 44 20 C 44 20 42 32 32 36 Z"
        fill="url(#logoSproutGrad)"
      />

      {/* Left Secondary Leaf */}
      <path
        d="M 32 37 C 32 28 22 25 22 25 C 22 25 24 35 32 39 Z"
        fill="#34D399"
        fillOpacity="0.9"
      />

      {/* Center Seed Core */}
      <circle cx="32" cy="43" r="2" fill="#E6AF2E" />
    </svg>
  );
}
