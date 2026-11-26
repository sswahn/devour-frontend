import { useEffect, useRef, useState } from 'react';
import './CartesianPlane.css';

export default function CartesianPlane({ range = 10 }) {
  const [pt, setPt] = useState({ x: 3, y: 4 });
  const ref = useRef(null);
  const sim = useRef({ x: 3, y: 4, tx: 3, ty: 4, vx: 0, vy: 0, drag: false });

  useEffect(() => {
    let id;
    const tick = () => {
      const s = sim.current;
      // Spring stiffness (0.14) and damping (0.76) create weighted inertia
      s.vx = (s.vx + (s.tx - s.x) * 0.14) * 0.76;
      s.vy = (s.vy + (s.ty - s.y) * 0.14) * 0.76;
      s.x += s.vx;
      s.y += s.vy;

      if (Math.abs(s.vx) > 1e-4 || Math.abs(s.vy) > 1e-4 || Math.abs(s.tx - s.x) > 1e-4) {
        setPt({ x: +s.x.toFixed(1), y: +s.y.toFixed(1) });
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const onMove = (e) => {
    if (!sim.current.drag) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const clamp = (v) => Math.max(-range, Math.min(range, v));
    sim.current.tx = clamp(((e.clientX - left) / width) * 2 * range - range);
    sim.current.ty = clamp(range - ((e.clientY - top) / height) * 2 * range);
  };

  return (
    <div
      ref={ref}
      className="plane"
      style={{ '--r': range }}
      onPointerMove={onMove}
      onPointerUp={() => (sim.current.drag = false)}
      onPointerLeave={() => (sim.current.drag = false)}
    >
      <div className="axis-x" />
      <div className="axis-y" />
      <div
        className="point"
        style={{ '--x': pt.x, '--y': pt.y }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          sim.current.drag = true;
        }}
      >
        <span className="label">({pt.x}, {pt.y})</span>
      </div>
    </div>
  );
}
