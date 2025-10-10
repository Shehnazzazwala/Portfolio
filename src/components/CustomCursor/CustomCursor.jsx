import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  // We use useGSAP for safe animation cleanup
  useGSAP(() => {
    // Check if the user is on a touch device
    if ('ontouchstart' in window) {
      // Don't run the cursor logic on touch devices
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
      return;
    }

    // GSAP's quickTo is a high-performance way to animate properties
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.5, ease: "power3" });

    // The main event listener that updates the cursor's position
    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // --- Hover Effect ---
    // Select all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .project-card, .navbar-logo'
    );

    const onMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3 }); // Grow the cursor
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 }); // Shrink it back
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });
    
    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  });

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <img src="/skincare.png" alt="Custom Cursor" />
    </div>
  );
};

export default CustomCursor;