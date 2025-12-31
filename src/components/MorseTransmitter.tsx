"use client";

import { useState, useEffect, useRef } from "react";
import { MORSE_CODE, textToMorse } from "@/utils/morse";
import { Play, Square, Download, Volume2, Activity } from "lucide-react";

export function MorseTransmitter() {
  const [text, setText] = useState("BI3BFG");
  const [wpm, setWpm] = useState(20);
  const [frequency, setFrequency] = useState(700);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSignal, setActiveSignal] = useState(false); // For the flashing light

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => stop();
  }, []);

  const stop = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch (e) {}
      oscillatorRef.current = null;
    }
    setIsPlaying(false);
    setActiveSignal(false);
  };

  const playMorse = async () => {
    if (isPlaying) {
      stop();
      return;
    }

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }

    setIsPlaying(true);
    
    const ctx = audioCtxRef.current;
    const dotDuration = 1.2 / wpm; // seconds
    const morse = textToMorse(text);
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.value = frequency;
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    
    oscillatorRef.current = osc;
    gainNodeRef.current = gain;

    let currentTime = ctx.currentTime + 0.1; // Start slightly in future

    const symbols = morse.split('');
    let timeOffset = 0;

    // We need to schedule visual updates as well, which uses setTimeout
    // Audio scheduling is precise, visual is approximate
    
    const scheduleVisual = (delay: number, duration: number) => {
        const t1 = setTimeout(() => setActiveSignal(true), delay * 1000);
        const t2 = setTimeout(() => setActiveSignal(false), (delay + duration) * 1000);
        timeoutsRef.current.push(t1, t2);
    };

    // Parse and schedule
    // We need to iterate through the morse string properly
    // This is a simplified parser. 
    // Real implementation should handle spaces correctly.
    
    // Let's re-parse to handle letter spacing
    const words = text.toUpperCase().split(' ');
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const chars = word.split('');
        
        for (let j = 0; j < chars.length; j++) {
            const char = chars[j];
            const code = MORSE_CODE[char];
            if (!code) continue;
            
            const signals = code.split('');
            for (let k = 0; k < signals.length; k++) {
                const signal = signals[k];
                const duration = signal === '.' ? dotDuration : dotDuration * 3;
                
                // Audio
                gain.gain.setValueAtTime(1, currentTime);
                gain.gain.setValueAtTime(0, currentTime + duration);
                
                // Visual
                scheduleVisual(currentTime - ctx.currentTime, duration);
                
                currentTime += duration;
                currentTime += dotDuration; // Intra-character space
            }
            currentTime += dotDuration * 2; // Letter space (3 dots total, we already added 1)
        }
        currentTime += dotDuration * 4; // Word space (7 dots total, we already added 3)
    }

    // Stop everything at the end
    const totalDuration = currentTime - ctx.currentTime;
    const endTimeout = setTimeout(() => {
        stop();
    }, totalDuration * 1000);
    timeoutsRef.current.push(endTimeout);
  };

  return (
    <div className="border-2 border-green-700 p-4 bg-green-950/30 my-6 font-vt323">
      <h2 className="text-xl border-b-2 border-green-700 mb-4 pb-1 flex items-center gap-2">
        <Activity className="w-5 h-5" />
        CW TRANSMITTER
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-green-600 mb-1">MESSAGE</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-green-900/20 border border-green-700 p-2 text-green-300 focus:outline-none focus:border-green-400 font-mono uppercase"
            />
            <div className="mt-1 text-sm text-green-600 break-all h-12 overflow-y-auto">
                {textToMorse(text)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-green-600 mb-1">SPEED (WPM): {wpm}</label>
                <input 
                    type="range" 
                    min="5" 
                    max="40" 
                    value={wpm} 
                    onChange={(e) => setWpm(Number(e.target.value))}
                    className="w-full accent-green-500"
                />
            </div>
            <div>
                <label className="block text-green-600 mb-1">FREQ (Hz): {frequency}</label>
                <input 
                    type="range" 
                    min="400" 
                    max="1000" 
                    value={frequency} 
                    onChange={(e) => setFrequency(Number(e.target.value))}
                    className="w-full accent-green-500"
                />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={playMorse}
              className={`flex-1 flex items-center justify-center gap-2 p-2 border-2 ${
                isPlaying 
                ? "border-red-500 text-red-500 bg-red-950/30" 
                : "border-green-500 text-green-500 hover:bg-green-900/30"
              } transition-colors`}
            >
              {isPlaying ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "STOP TX" : "SEND CW"}
            </button>
            <button className="flex items-center justify-center gap-2 p-2 border-2 border-green-700 text-green-700 hover:bg-green-900/30 transition-colors" title="Export WAV (Coming Soon)">
                <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative bg-black border-2 border-green-800 p-4 flex flex-col items-center justify-center min-h-[200px]">
            {/* TX Indicator */}
            <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${activeSignal ? 'bg-red-500 shadow-[0_0_10px_red]' : 'bg-red-900'}`}></div>
            <div className="absolute top-2 left-2 text-xs text-green-700">TX MONITOR</div>
            
            {/* Visualizer Placeholder - Could be a real canvas later */}
            <div className="w-full h-32 flex items-center justify-center">
                {activeSignal ? (
                    <div className="w-16 h-16 bg-green-500 rounded-full shadow-[0_0_50px_#22c55e] animate-pulse"></div>
                ) : (
                    <div className="w-4 h-4 bg-green-900/50 rounded-full"></div>
                )}
            </div>
            
            <div className="mt-4 text-center text-green-500 text-2xl font-bold tracking-widest">
                {activeSignal ? "ON AIR" : "STANDBY"}
            </div>
        </div>
      </div>
    </div>
  );
}
