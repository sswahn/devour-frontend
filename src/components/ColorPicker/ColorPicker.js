import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- Color Conversion Helpers ---
function hsvToRgb(h, s, v) {
  s /= 100;
  v /= 100;
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
export default function ColorPicker({ initialColor = '#3B82F6', onChange }) {
  const [hsv, setHsv] = useState(() => {
    const rgb = hexToRgb(initialColor) || { r: 59, g: 130, b: 246 };
    return rgbToHsv(rgb);
  });
  const [hexInput, setHexInput] = useState(initialColor.toUpperCase());
  const [copied, setCopied] = useState(false);

  const swatchRef = useRef(null);
  const isDragging = useRef(false);

  // Sync hex string and parent callback whenever HSV updates
  const updateColor = useCallback((newHsv) => {
    setHsv(newHsv);
    const hex = rgbToHex(hsvToRgb(newHsv.h, newHsv.s, newHsv.v));
    setHexInput(hex);
    if (onChange) onChange(hex);
  }, [onChange]);

  // Calculate Saturation & Value from pointer coordinates
  const handleSwatchMove = useCallback((clientX, clientY) => {
    if (!swatchRef.current) return;
    const rect = swatchRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const s = Math.round((x / rect.width) * 100);
    const v = Math.round(100 - (y / rect.height) * 100);
    updateColor({ ...hsv, s, v });
  }, [hsv, updateColor]);

  // Global mouse/touch drag listeners
  useEffect(() => {
    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
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
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    handleSwatchMove(clientX, clientY);
  };

  // Handle manual hex typing
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
    <div className="w-72 p-4 bg-white rounded-xl shadow-lg border border-gray-200 select-none font-sans">
      {/* 2D Saturation & Value Swatch */}
      <div
        ref={swatchRef}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        className="relative w-full h-44 rounded-lg cursor-crosshair overflow-hidden mb-4"
        style={{ backgroundColor: pureHueHex }}
      >
        {/* White horizontal gradient (Saturation) */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #fff, transparent)' }}
        />
        {/* Black vertical gradient (Value/Brightness) */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #000, transparent)' }}
        />
        {/* Picker Thumb */}
        <div
          className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md pointer-events-none"
          style={{
            left: `${hsv.s}%`,
            top: `${100 - hsv.v}%`,
            backgroundColor: currentHex,
          }}
        />
      </div>

      {/* Hue Slider */}
      <div className="mb-4">
        <input
          type="range"
          min="0"
          max="359"
          value={hsv.h}
          onChange={(e) => updateColor({ ...hsv, h: Number(e.target.value) })}
          className="w-full h-3 rounded-lg appearance-none cursor-pointer"
          style={{
            background:
              'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
          }}
        />
      </div>

      {/* Preview Swatch & Hex Input */}
      <div className="flex items-center gap-2">
        <div
          className="w-9 h-9 rounded-lg border border-gray-300 shrink-0 shadow-inner"
          style={{ backgroundColor: currentHex }}
        />
        <input
          type="text"
          value={hexInput}
          onChange={handleHexChange}
          maxLength={7}
          className="w-full px-2.5 py-1.5 text-sm font-mono text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="#000000"
        />
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 transition"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
