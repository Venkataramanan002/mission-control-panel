export const ChhattisgarhMap = () => {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 50%, 45%)" />
            <stop offset="100%" stopColor="hsl(145, 40%, 35%)" />
          </linearGradient>
          <linearGradient id="map3dGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 45%, 40%)" />
            <stop offset="100%" stopColor="hsl(145, 40%, 25%)" />
          </linearGradient>
          <filter id="mapShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="black" floodOpacity="0.5"/>
          </filter>
          <filter id="highlightGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* 3D extrusion effect - side faces */}
        <g transform="translate(0, 8)" opacity="0.6">
          <path
            d="M120,50 L180,40 L230,55 L280,45 L310,70 L320,100 L340,130 L330,170 L350,200 L340,240 L310,260 L280,280 L240,290 L200,285 L160,295 L120,280 L90,250 L70,210 L80,170 L60,140 L80,100 L100,70 Z"
            fill="hsl(145, 40%, 25%)"
          />
        </g>
        
        {/* Main map shape */}
        <g filter="url(#mapShadow)">
          <path
            d="M120,50 L180,40 L230,55 L280,45 L310,70 L320,100 L340,130 L330,170 L350,200 L340,240 L310,260 L280,280 L240,290 L200,285 L160,295 L120,280 L90,250 L70,210 L80,170 L60,140 L80,100 L100,70 Z"
            fill="url(#mapGradient)"
            stroke="hsl(145, 60%, 50%)"
            strokeWidth="1"
          />
        </g>
        
        {/* District boundaries - simplified */}
        <g stroke="hsl(145, 60%, 55%)" strokeWidth="0.5" fill="none" opacity="0.6">
          <path d="M120,50 L180,120 L200,200" />
          <path d="M180,40 L200,100 L250,150" />
          <path d="M280,45 L250,100 L260,180" />
          <path d="M310,70 L280,130 L300,200" />
          <path d="M90,250 L150,220 L200,250" />
          <path d="M160,295 L180,240 L240,250" />
          <path d="M80,170 L130,180 L160,150" />
          <path d="M150,100 L200,130 L180,180" />
        </g>
        
        {/* Highlighted district (Bastar - reddish) */}
        <g filter="url(#highlightGlow)">
          <path
            d="M260,200 L290,210 L300,240 L280,260 L250,255 L240,230 L250,210 Z"
            fill="hsl(0, 70%, 50%)"
            stroke="hsl(0, 80%, 60%)"
            strokeWidth="1.5"
            className="animate-pulse-glow"
          />
          {/* Raikhurd label */}
          <text x="265" y="235" fill="hsl(0, 0%, 100%)" fontSize="8" fontWeight="bold" textAnchor="middle">
            Raikhurd
          </text>
        </g>
        
        {/* District labels */}
        <g fill="hsl(0, 0%, 85%)" fontSize="7" fontFamily="Inter, sans-serif">
          <text x="140" y="80">Jashpur</text>
          <text x="200" y="70">Surguja</text>
          <text x="100" y="120">Koriya</text>
          <text x="160" y="130">Bilaspur</text>
          <text x="220" y="100">Korba</text>
          <text x="290" y="100">Raigarh</text>
          <text x="120" y="170">Kabeerdham</text>
          <text x="180" y="170">Durg</text>
          <text x="240" y="150">Janjgir</text>
          <text x="100" y="220">Rajnandgaon</text>
          <text x="160" y="210">Dhamtari</text>
          <text x="220" y="200">Mahasamund</text>
          <text x="120" y="265">Kanker</text>
          <text x="200" y="275">Kondagaon</text>
          <text x="280" y="290">Sukma</text>
          <text x="170" y="250">Narayanpur</text>
        </g>
        
        {/* Map glow effect */}
        <ellipse
          cx="200"
          cy="320"
          rx="150"
          ry="20"
          fill="hsl(145, 50%, 30%)"
          opacity="0.3"
          filter="blur(10px)"
        />
      </svg>
    </div>
  );
};
