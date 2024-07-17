'use client';

import { useCallback, useEffect, useRef } from 'react';
import { MouseFollowerProps } from './MouseFollower.type';

let x = 0;
let y = 0;

let targetX = 0;
let targetY = 0;

const speed = 0.1;

const MouseFollower = ({ children }: MouseFollowerProps) => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    x = e.pageX;
    y = e.pageY;
  };

  const loop = useCallback(() => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    if (mouseRef.current) {
      mouseRef.current.style.top = `${targetY}px`;
      mouseRef.current.style.left = `${targetX}px`;
    }

    requestRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(requestRef.current);
  }, [loop]);

  const handleMouseDown = () => {
    if (mouseRef.current) {
      mouseRef.current.style.backgroundColor = '#0ba5e9';
    }
  };

  const handleMouseUp = () => {
    if (mouseRef.current) {
      mouseRef.current.style.backgroundColor = '#000000';
    }
  };

  const handleMouseEnter = () => {
    if (mouseRef.current) {
      mouseRef.current.style.display = 'block';
    }
  };

  const handleMouseLeave = () => {
    if (mouseRef.current) {
      mouseRef.current.style.display = 'none';
    }
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute top-1/2 left-1/2 z-[1001] w-12 h-12
        pointer-events-none bg-black rounded-full opacity-30
        transition-transform duration-1000 ease-in-out transform
        -translate-x-1/2 -translate-y-1/2"
        ref={mouseRef}
      ></div>
      {children}
    </div>
  );
};

export default MouseFollower;
