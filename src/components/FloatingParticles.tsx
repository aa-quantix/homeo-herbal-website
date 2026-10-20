import React, { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
    count?: number;
    dark?: boolean;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ count = 40, dark = false }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const color = dark
            ? 'rgba(134, 239, 172,' // green-300 base
            : 'rgba(21, 128, 61,';  // primary-700 base

        class Particle {
            x: number; y: number;
            size: number; speedX: number; speedY: number; opacity: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 2.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update(w: number, h: number) {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0) this.x = w;
                if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h;
                if (this.y > h) this.y = 0;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = `${color} ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particles: Particle[] = [];

        const init = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
            particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(canvas.width, canvas.height); p.draw(ctx); });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => init();
        window.addEventListener('resize', handleResize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [count, dark]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
};

export default FloatingParticles;
