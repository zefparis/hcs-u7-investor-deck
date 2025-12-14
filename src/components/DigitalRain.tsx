'use client';

import React, { useEffect, useRef } from 'react';

interface DigitalRainProps {
  color?: string;
  opacity?: number;
}

export const DigitalRain: React.FC<DigitalRainProps> = ({ 
  color = '#00F0FF', 
  opacity = 0.15 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Configuration
    const columns = Math.floor(width / 20); // Spacing between streams
    const drops: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * 20,
        y: Math.random() * height * -1, // Start above screen
        speed: 1 + Math.random() * 3, // Varying speeds
        length: 10 + Math.random() * 50, // Varying tail lengths
        opacity: 0.1 + Math.random() * 0.5 // Varying brightness
      });
    }

    const draw = () => {
      // Clear with trail effect for smoothness
      ctx.fillStyle = 'rgba(5, 5, 5, 0.3)';
      ctx.fillRect(0, 0, width, height);

      drops.forEach(drop => {
        // Draw the stream tail (fading gradient)
        const gradient = ctx.createLinearGradient(drop.x, drop.y, drop.x, drop.y - drop.length);
        gradient.addColorStop(0, `${color}${Math.floor(drop.opacity * 255).toString(16).padStart(2, '0')}`); // Head (bright)
        gradient.addColorStop(1, 'rgba(0, 240, 255, 0)'); // Tail (transparent)

        ctx.fillStyle = gradient;
        ctx.fillRect(drop.x, drop.y - drop.length, 2, drop.length); // Thin sophisticated lines

        // Draw the "head" or "packet"
        ctx.shadowBlur = 5;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.fillRect(drop.x, drop.y, 2, 4); // Bright head
        ctx.shadowBlur = 0;

        // Move drop
        drop.y += drop.speed;

        // Reset if off screen
        if (drop.y - drop.length > height) {
          drop.y = Math.random() * -100;
          drop.speed = 1 + Math.random() * 3;
          drop.length = 10 + Math.random() * 50;
          drop.opacity = 0.1 + Math.random() * 0.5;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
      style={{ opacity }}
    />
  );
};
