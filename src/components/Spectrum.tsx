"use client";

import { useEffect, useRef } from "react";
import { Activity } from "lucide-react";

export function Spectrum() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const width = canvas.width;
    const height = canvas.height;
    const spectrumHeight = 100;
    const waterfallHeight = height - spectrumHeight;

    // Create an offscreen canvas for the waterfall scrolling effect
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = waterfallHeight;
    const tempCtx = tempCanvas.getContext("2d");

    const signals = [
      { freq: 0.2, width: 0.02, speed: 0.05, phase: 0 },
      { freq: 0.5, width: 0.01, speed: 0.1, phase: 0 }, // Our "signal"
      { freq: 0.8, width: 0.05, speed: 0.02, phase: 0 },
    ];

    const draw = () => {
      // 1. Generate simulated FFT data
      const data = new Float32Array(width);
      const time = Date.now() / 1000;

      // Noise floor
      for (let i = 0; i < width; i++) {
        data[i] = Math.random() * 0.2;
      }

      // Signals
      signals.forEach(sig => {
        // Modulate signal
        const active = Math.sin(time * sig.speed * 10 + sig.phase) > 0;
        if (active) {
            const center = sig.freq * width;
            const bw = sig.width * width;
            for (let i = 0; i < width; i++) {
                const dist = Math.abs(i - center);
                if (dist < bw) {
                    data[i] += (1 - dist/bw) * 0.8;
                }
            }
        }
      });

      // 2. Draw Spectrum (Top)
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, spectrumHeight);
      
      // Grid
      ctx.strokeStyle = "#003300";
      ctx.beginPath();
      for(let i=0; i<width; i+=50) { ctx.moveTo(i, 0); ctx.lineTo(i, spectrumHeight); }
      for(let i=0; i<spectrumHeight; i+=20) { ctx.moveTo(0, i); ctx.lineTo(width, i); }
      ctx.stroke();

      // Line
      ctx.beginPath();
      ctx.strokeStyle = "#0f0";
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i++) {
        const y = spectrumHeight - (data[i] * spectrumHeight);
        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }
      ctx.stroke();

      // Fill
      ctx.lineTo(width, spectrumHeight);
      ctx.lineTo(0, spectrumHeight);
      ctx.fillStyle = "rgba(0, 255, 0, 0.1)";
      ctx.fill();

      // 3. Draw Waterfall (Bottom)
      // Scroll existing waterfall down
      if (tempCtx) {
          tempCtx.drawImage(canvas, 0, spectrumHeight, width, waterfallHeight - 1, 0, 1, width, waterfallHeight - 1);
          
          // Draw new line at top of waterfall
          const imageData = tempCtx.createImageData(width, 1);
          for (let i = 0; i < width; i++) {
              const val = data[i];
              // Color map: Black -> Blue -> Green -> Yellow -> Red
              const r = val > 0.8 ? 255 : val > 0.6 ? (val-0.6)*1275 : 0;
              const g = val > 0.4 ? 255 : val > 0.2 ? (val-0.2)*1275 : 0;
              const b = val > 0.2 ? 0 : val * 1275;
              
              const idx = i * 4;
              imageData.data[idx] = r;
              imageData.data[idx+1] = g;
              imageData.data[idx+2] = b;
              imageData.data[idx+3] = 255;
          }
          tempCtx.putImageData(imageData, 0, 0);
          
          // Copy back to main canvas
          ctx.drawImage(tempCanvas, 0, 0, width, waterfallHeight, 0, spectrumHeight, width, waterfallHeight);
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="border-2 border-green-700 bg-black my-6 font-vt323">
        <div className="bg-green-900/20 p-1 border-b border-green-800 flex justify-between text-xs text-green-400 px-2">
            <span className="flex items-center gap-1"><Activity className="w-3 h-3"/> SPECTRUM MONITOR</span>
            <span>BW: 24kHz</span>
        </div>
        <canvas ref={canvasRef} width={800} height={300} className="w-full h-auto block" />
    </div>
  );
}
