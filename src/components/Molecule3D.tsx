import React, { useEffect, useRef } from 'react';

interface Molecule3DProps {
    size?: number;
}

const Molecule3D: React.FC<Molecule3DProps> = ({ size = 300 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = size;
        canvas.height = size;

        const cx = size / 2;
        const cy = size / 2;
        let angle = 0;
        let animId: number;

        const atoms = [
            { x: 0, y: 0, z: 0, r: 18, label: 'H', fill: '#bbf7d0', text: '#14532d' },
            { x: 80, y: 30, z: 40, r: 12, label: 'C', fill: '#86efac', text: '#14532d' },
            { x: -70, y: -50, z: 50, r: 12, label: 'O', fill: '#6ee7b7', text: '#065f46' },
            { x: 50, y: -80, z: -40, r: 12, label: 'N', fill: '#4ade80', text: '#14532d' },
            { x: -60, y: 70, z: -30, r: 12, label: 'S', fill: '#a3e635', text: '#365314' },
        ];
        const bonds = [[0, 1], [0, 2], [0, 3], [0, 4]];

        const rotY = (x: number, y: number, z: number, a: number) =>
            ({ x: x * Math.cos(a) - z * Math.sin(a), y, z: x * Math.sin(a) + z * Math.cos(a) });
        const rotX = (x: number, y: number, z: number, a: number) =>
            ({ x, y: y * Math.cos(a) - z * Math.sin(a), z: y * Math.sin(a) + z * Math.cos(a) });
        const proj = (x: number, y: number, z: number) => {
            const s = 350 / (350 + z);
            return { px: x * s + cx, py: y * s + cy, scale: s };
        };

        function draw() {
            ctx!.clearRect(0, 0, size, size);

            // orbit rings
            ctx!.save();
            ctx!.translate(cx, cy);
            for (let i = 0; i < 3; i++) {
                ctx!.strokeStyle = `rgba(134,239,172,${0.07 + i * 0.05})`;
                ctx!.lineWidth = 1;
                ctx!.beginPath();
                ctx!.ellipse(0, 0, 50 + i * 40, 20 + i * 16, angle * 0.3 + i * 0.7, 0, Math.PI * 2);
                ctx!.stroke();
            }
            ctx!.restore();

            // transform atoms
            const tf = atoms.map(a => {
                let p = rotY(a.x, a.y, a.z, angle);
                p = rotX(p.x, p.y, p.z, angle * 0.6);
                return { ...proj(p.x, p.y, p.z), atom: a };
            });

            // bonds
            ctx!.strokeStyle = 'rgba(134,239,172,0.25)';
            ctx!.lineWidth = 1.5;
            bonds.forEach(([i, j]) => {
                ctx!.beginPath();
                ctx!.moveTo(tf[i].px, tf[i].py);
                ctx!.lineTo(tf[j].px, tf[j].py);
                ctx!.stroke();
            });

            // atoms (back-to-front)
            [...tf].sort((a, b) => a.scale - b.scale).forEach(({ px, py, scale, atom }) => {
                const r = atom.r * scale;
                const g = ctx!.createRadialGradient(px - r * 0.3, py - r * 0.3, r * 0.1, px, py, r);
                g.addColorStop(0, '#ffffff');
                g.addColorStop(0.4, atom.fill);
                g.addColorStop(1, '#14532d');

                ctx!.shadowBlur = 14;
                ctx!.shadowColor = atom.fill;
                ctx!.fillStyle = g;
                ctx!.beginPath();
                ctx!.arc(px, py, r, 0, Math.PI * 2);
                ctx!.fill();
                ctx!.shadowBlur = 0;

                ctx!.fillStyle = atom.text;
                ctx!.font = `bold ${Math.round(10 * scale)}px sans-serif`;
                ctx!.textAlign = 'center';
                ctx!.textBaseline = 'middle';
                ctx!.fillText(atom.label, px, py);
            });

            angle += 0.007;
            animId = requestAnimationFrame(draw);
        }

        draw();
        return () => cancelAnimationFrame(animId);
    }, [size]);

    return <canvas ref={canvasRef} style={{ width: size, height: size }} />;
};

export default Molecule3D;
