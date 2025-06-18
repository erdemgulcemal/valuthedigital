import { useEffect, useState, useRef } from "react";

export const RobotHead = () => {
  const [rotation, setRotation] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      
      // Div'in merkez koordinatlarını al
      const rect = divRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Mouse ile merkez arasındaki açıyı hesapla
      const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const angleDeg = (angleRad * 180) / Math.PI;
      
      // Rotasyonu sınırla (-45 ile 45 derece arası)
      const limitedRotation = Math.max(-45, Math.min(45, angleDeg));
      
      setRotation(limitedRotation);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute -top-20 right-0 w-32 h-32 z-20" ref={divRef}>
      <svg
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center",
          transition: "transform 0.1s ease-out"
        }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="headGradient" cx="50%" cy="50%" r="50%" fx="25%" fy="25%">
            <stop offset="0%" style={{ stopColor: '#1E3A8A' }} />
            <stop offset="100%" style={{ stopColor: '#1E40AF' }} />
          </radialGradient>
          <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Robot head main with 3D effect */}
        <circle
          cx="50" cy="50"
          r="40"
          fill="url(#headGradient)"
          filter="url(#shadow)"
          className="shadow-lg"
        />

        {/* Robot eyes with enhanced 3D look */}
        <g>
          {/* Left eye */}
          <circle cx="35" cy="45" r="8" fill="#0F172A" filter="url(#shadow)" />
          <circle cx="35" cy="45" r="6" fill="#3B82F6" />
          <circle cx="33" cy="43" r="2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="36" cy="46" r="1" fill="#60A5FA" opacity="0.7" />

          {/* Right eye */}
          <circle cx="65" cy="45" r="8" fill="#0F172A" filter="url(#shadow)" />
          <circle cx="65" cy="45" r="6" fill="#3B82F6" />
          <circle cx="63" cy="43" r="2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="66" cy="46" r="1" fill="#60A5FA" opacity="0.7" />
        </g>

        {/* Robot mouth */}
        <path
          d="M35 65 Q50 75 65 65"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#shadow)"
          fill="none"
        />

        {/* Antenna with 3D effect */}
        <rect
          x="45" y="0"
          width="10" height="15"
          fill="#3B82F6"
          filter="url(#shadow)"
        />
        <circle
          cx="50" cy="0"
          r="5"
          fill="#3B82F6"
          filter="url(#shadow)"
        />
      </svg>
    </div>
  );
};