import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './ColorPicker.module.css'

// --- Color Conversion Helpers ---
// move to a utility:
function hsvToRgb(h, s, v) {
  s /= 100
  v /= 100
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
  else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
  else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
  else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
  else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
  else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function rgbToHex({ r, g, b }) {
  const toHex = (n) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  if (!/^[0-9A-Fa-f]{6}$/.test(clean)) return null;
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16),
  };
}

function rgbToHsv({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
}

// --- Main Component ---
function ColorPicker({ initialColor = '#3B82F6', onChange }) {
  const [hsv, setHsv] = useState(() => {
    const rgb = hexToRgb(initialColor) || { r: 59, g: 130, b: 246 };
    return rgbToHsv(rgb);
  })
  const [hexInput, setHexInput] = useState(initialColor.toUpperCase());
  const [copied, setCopied] = useState(false);

  const swatchRef = useRef(null);
  const isDragging = useRef(false);

  const updateColor = useCallback((newHsv) => {
    setHsv(newHsv);
    const hex = rgbToHex(hsvToRgb(newHsv.h, newHsv.s, newHsv.v));
    setHexInput(hex);
    if (onChange) onChange(hex);
  }, [onChange]);

  const handleSwatchMove = useCallback((clientX, clientY) => {
    if (!swatchRef.current) return;
    const rect = swatchRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const s = Math.round((x / rect.width) * 100);
    const v = Math.round(100 - (y / rect.height) * 100);
    updateColor({ ...hsv, s, v });
  }, [hsv, updateColor]);

  useEffect(() => {
    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches ? e.touches.clientX : e.clientX;
      const clientY = e.touches ? e.touches.clientY : e.clientY;
      handleSwatchMove(clientX, clientY);
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove);
    window.addEventListener('touchend', onPointerUp);

    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };
  }, [handleSwatchMove]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    const clientX = e.touches ? e.touches.clientX : e.clientX;
    const clientY = e.touches ? e.touches.clientY : e.clientY;
    handleSwatchMove(clientX, clientY);
  };

  const handleHexChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('#')) val = '#' + val;
    setHexInput(val.toUpperCase());

    const rgb = hexToRgb(val);
    if (rgb) {
      const newHsv = rgbToHsv(rgb);
      setHsv(newHsv);
      if (onChange) onChange(val.toUpperCase());
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hexInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const currentHex = rgbToHex(hsvToRgb(hsv.h, hsv.s, hsv.v));
  const pureHueHex = `hsl(${hsv.h}, 100%, 50%)`;

  return (
    <div className={styles.colorPicker}>
      {/* 2D Saturation & Value Swatch */}
      <div 
        ref={swatchRef} 
        className={styles.swatch}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        style={{ backgroundColor: pureHueHex }}>
        <div className={styles.swatchWhite} />
        <div className={styles.swatchBlack} />
        <div className={styles.thumb} style={{
          left: `${hsv.s}%`,
          top: `${100 - hsv.v}%`,
          backgroundColor: currentHex,
        }} />
      </div>

      {/* Hue Slider */}
      <div className={styles.slider}>
        <input
          className={styles.sliderHue}
          type="range"
          min="0"
          max="359"
          value={hsv.h}
          onChange={event => updateColor({ ...hsv, h: Number(event.target.value) })}
        />
      </div>

      {/* Preview Swatch & Hex Input */}
      <div className={styles.controls}>
        <div className={styles.preview} style={{ backgroundColor: currentHex }} />
        <input
          className={styles.input}
          type="text"
          value={hexInput}
          onChange={handleHexChange}
          maxLength={7}
          placeholder="#000000"
        />
        <button className={styles.btn} onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export default ColorPicker

/* Example Usage: 

import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('#3B82F6');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        gap: '24px',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
      }}
    >
      <ColorPicker
        initialColor={selectedColor}
        onChange={(hex) => setSelectedColor(hex)}
      />

      <div style={{ fontSize: '14px', color: '#4b5563' }}>
        Active Color:{' '}
        <span
          style={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontWeight: 700,
          }}
        >
          {selectedColor}
        </span>
      </div>
    </div>
  );
}

*/
