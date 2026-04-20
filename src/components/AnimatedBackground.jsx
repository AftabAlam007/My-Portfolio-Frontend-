import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Mouse and Scroll position tracking
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let scrollY = 0;
    let scrollVelocity = 0;
    let lastScrollY = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.baseOpacity = this.opacity;
        this.originalX = this.x;
        this.originalY = this.y;
      }

      update(scrollY, scrollVelocity) {
        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Scroll effect - particles tilt/shift based on scroll
        const scrollEffect = Math.sin(scrollY * 0.002) * 50;
        const tiltX = Math.cos(scrollY * 0.003) * 30;
        
        this.x += scrollEffect * 0.05;
        this.y += tiltX * 0.02;

        // Make particle oscillate based on scroll speed
        const velocityEffect = Math.abs(scrollVelocity) * 0.5;
        this.speedX += (Math.random() - 0.5) * velocityEffect * 0.1;
        this.speedY += (Math.random() - 0.5) * velocityEffect * 0.1;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Friction/damping
        this.speedX *= 0.98;
        this.speedY *= 0.98;
      }

      draw(scrollVelocity) {
        // Check if affected by mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Particle brightness changes with scroll velocity
        const scrollGlow = Math.min(Math.abs(scrollVelocity) * 0.1, 0.5);

        if (distance < 250) {
          // Glow effect near cursor - particles become brighter
          const glowIntensity = 1 - (distance / 250);
          ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity + glowIntensity * 0.5 + scrollGlow})`;
          ctx.shadowColor = `rgba(100, 200, 255, ${glowIntensity * 0.8})`;
          ctx.shadowBlur = 15 * glowIntensity;
        } else {
          // Color changes based on scroll - blue to purple gradient
          const scrollColor = Math.sin(scrollY * 0.001) * 50 + 59;
          ctx.fillStyle = `rgba(${scrollColor}, 130, 246, ${this.opacity + scrollGlow})`;
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connecting lines
    const drawLines = (scrollVelocity) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Lines glow when near particles affected by cursor
            const isNearCursor = (
              Math.sqrt((mouseX - particles[i].x) ** 2 + (mouseY - particles[i].y) ** 2) < 250 ||
              Math.sqrt((mouseX - particles[j].x) ** 2 + (mouseY - particles[j].y) ** 2) < 250
            );

            // Line brightness responds to scroll
            const scrollLineGlow = Math.min(Math.abs(scrollVelocity) * 0.1, 0.3);

            if (isNearCursor) {
              ctx.strokeStyle = `rgba(100, 200, 255, ${0.4 * (1 - distance / 100) + scrollLineGlow})`;
              ctx.lineWidth = 2;
            } else {
              ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance / 100) + scrollLineGlow})`;
              ctx.lineWidth = 1;
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw cursor glow effect
    const drawCursorGlow = () => {
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
      gradient.addColorStop(0, 'rgba(100, 200, 255, 0.3)');
      gradient.addColorStop(0.5, 'rgba(100, 200, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2);
      ctx.fill();

      // Cursor ring
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
      ctx.stroke();
    };

    // Draw scroll indicator
    const drawScrollIndicator = (scrollVelocity) => {
      if (Math.abs(scrollVelocity) > 0.1) {
        const scrollIntensity = Math.min(Math.abs(scrollVelocity) * 0.2, 1);
        
        // Scroll wave effect at the center
        ctx.strokeStyle = `rgba(100, 200, 255, ${scrollIntensity * 0.4})`;
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 5; i++) {
          const radius = 50 + i * 20;
          const alpha = scrollIntensity * (1 - i / 5);
          ctx.globalAlpha = alpha;
          
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.globalAlpha = 1;
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(3, 7, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(scrollY, scrollVelocity);
        particle.draw(scrollVelocity);
      });

      // Draw cursor glow effect
      drawCursorGlow();

      // Draw scroll indicator
      drawScrollIndicator(scrollVelocity);

      // Draw connecting lines
      drawLines(scrollVelocity);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle mouse interaction - ENHANCED
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // STRONGER REPULSION - Apply force to particles
      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distance / 200) * 2.5;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }
      });
    };

    // Handle scroll event - SCROLL ANIMATION
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      scrollVelocity = currentScrollY - lastScrollY;
      scrollY = currentScrollY;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'linear-gradient(135deg, #030720 0%, #1a0835 50%, #0f0620 100%)',
      }}
    />
  );
};

export default AnimatedBackground;