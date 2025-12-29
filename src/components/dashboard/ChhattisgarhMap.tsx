export const ChhattisgarhMap = () => {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 380" className="w-full h-full">
        <defs>
          {/* Top surface gradient */}
          <linearGradient id="mapTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 55%, 48%)" />
            <stop offset="50%" stopColor="hsl(145, 50%, 42%)" />
            <stop offset="100%" stopColor="hsl(145, 45%, 38%)" />
          </linearGradient>
          
          {/* 3D side gradient - darker for depth */}
          <linearGradient id="mapSideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 40%, 28%)" />
            <stop offset="100%" stopColor="hsl(145, 35%, 18%)" />
          </linearGradient>
          
          {/* Front edge gradient */}
          <linearGradient id="mapFrontGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 45%, 32%)" />
            <stop offset="100%" stopColor="hsl(145, 40%, 20%)" />
          </linearGradient>
          
          {/* Highlight gradient for red zone */}
          <radialGradient id="hotspotGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(0, 75%, 55%)" />
            <stop offset="70%" stopColor="hsl(0, 70%, 45%)" />
            <stop offset="100%" stopColor="hsl(0, 65%, 38%)" />
          </radialGradient>
          
          {/* Shadow filter */}
          <filter id="mapDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="hsl(220, 30%, 4%)" floodOpacity="0.7"/>
          </filter>
          
          {/* Inner shadow for depth */}
          <filter id="innerShadow">
            <feOffset dx="0" dy="2"/>
            <feGaussianBlur stdDeviation="2" result="offset-blur"/>
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
            <feFlood floodColor="black" floodOpacity="0.3" result="color"/>
            <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
            <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
          </filter>
          
          {/* Glow for hotspot */}
          <filter id="hotspotGlow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Ambient light effect */}
          <filter id="ambientLight">
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.5" specularExponent="20" lightingColor="hsl(145, 60%, 70%)">
              <fePointLight x="150" y="50" z="200"/>
            </feSpecularLighting>
          </filter>
        </defs>
        
        {/* Ground shadow */}
        <ellipse
          cx="200"
          cy="345"
          rx="140"
          ry="25"
          fill="hsl(220, 30%, 4%)"
          opacity="0.6"
        />
        
        {/* 3D Extrusion - Back layer (deepest) */}
        <g transform="translate(0, 25)" opacity="0.4">
          <path
            d="M120,50 L180,40 L230,55 L280,45 L310,70 L320,100 L340,130 L330,170 L350,200 L340,240 L310,260 L280,280 L240,290 L200,285 L160,295 L120,280 L90,250 L70,210 L80,170 L60,140 L80,100 L100,70 Z"
            fill="hsl(145, 35%, 12%)"
          />
        </g>
        
        {/* 3D Extrusion - Middle layer */}
        <g transform="translate(0, 18)" opacity="0.6">
          <path
            d="M120,50 L180,40 L230,55 L280,45 L310,70 L320,100 L340,130 L330,170 L350,200 L340,240 L310,260 L280,280 L240,290 L200,285 L160,295 L120,280 L90,250 L70,210 L80,170 L60,140 L80,100 L100,70 Z"
            fill="url(#mapSideGradient)"
          />
        </g>
        
        {/* 3D Extrusion - Front layer */}
        <g transform="translate(0, 10)">
          <path
            d="M120,50 L180,40 L230,55 L280,45 L310,70 L320,100 L340,130 L330,170 L350,200 L340,240 L310,260 L280,280 L240,290 L200,285 L160,295 L120,280 L90,250 L70,210 L80,170 L60,140 L80,100 L100,70 Z"
            fill="url(#mapFrontGradient)"
          />
        </g>
        
        {/* Main top surface */}
        <g filter="url(#mapDropShadow)">
          <path
            d="M120,50 L180,40 L230,55 L280,45 L310,70 L320,100 L340,130 L330,170 L350,200 L340,240 L310,260 L280,280 L240,290 L200,285 L160,295 L120,280 L90,250 L70,210 L80,170 L60,140 L80,100 L100,70 Z"
            fill="url(#mapTopGradient)"
            stroke="hsl(145, 60%, 55%)"
            strokeWidth="1.5"
          />
          
          {/* Highlight edge on top */}
          <path
            d="M120,50 L180,40 L230,55 L280,45 L310,70"
            fill="none"
            stroke="hsl(145, 70%, 65%)"
            strokeWidth="1"
            opacity="0.6"
          />
        </g>
        
        {/* District boundaries with 3D effect */}
        <g stroke="hsl(145, 55%, 50%)" strokeWidth="0.8" fill="none" opacity="0.5">
          <path d="M120,50 L180,120 L200,200" />
          <path d="M180,40 L200,100 L250,150" />
          <path d="M280,45 L250,100 L260,180" />
          <path d="M310,70 L280,130 L300,200" />
          <path d="M90,250 L150,220 L200,250" />
          <path d="M160,295 L180,240 L240,250" />
          <path d="M80,170 L130,180 L160,150" />
          <path d="M150,100 L200,130 L180,180" />
        </g>
        
        {/* Highlighted hotspot district with 3D extrusion */}
        <g filter="url(#hotspotGlow)">
          {/* Hotspot 3D extrusion */}
          <path
            d="M260,208 L290,218 L300,248 L280,268 L250,263 L240,238 L250,218 Z"
            fill="hsl(0, 60%, 30%)"
            transform="translate(0, 6)"
          />
          <path
            d="M260,205 L290,215 L300,245 L280,265 L250,260 L240,235 L250,215 Z"
            fill="hsl(0, 65%, 35%)"
            transform="translate(0, 3)"
          />
          
          {/* Hotspot top surface */}
          <path
            d="M260,200 L290,210 L300,240 L280,260 L250,255 L240,230 L250,210 Z"
            fill="url(#hotspotGradient)"
            stroke="hsl(0, 80%, 60%)"
            strokeWidth="1.5"
            className="animate-pulse-glow"
          />
          
          {/* Hotspot highlight */}
          <path
            d="M260,200 L290,210 L300,240"
            fill="none"
            stroke="hsl(0, 85%, 70%)"
            strokeWidth="1"
            opacity="0.5"
          />
          
          {/* Raikhurd label */}
          <text 
            x="268" 
            y="238" 
            fill="hsl(0, 0%, 100%)" 
            fontSize="9" 
            fontWeight="500" 
            textAnchor="middle"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
          >
            Raikhurd
          </text>
        </g>
        
        {/* District labels */}
        <g fill="hsl(0, 0%, 90%)" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="400">
          <text x="140" y="80" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Jashpur</text>
          <text x="200" y="70" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Surguja</text>
          <text x="100" y="120" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Koriya</text>
          <text x="160" y="130" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Bilaspur</text>
          <text x="220" y="100" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Korba</text>
          <text x="290" y="100" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Raigarh</text>
          <text x="120" y="170" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Kabeerdham</text>
          <text x="180" y="170" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Durg</text>
          <text x="240" y="150" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Janjgir</text>
          <text x="100" y="220" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Rajnandgaon</text>
          <text x="160" y="210" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Dhamtari</text>
          <text x="220" y="200" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Mahasamund</text>
          <text x="120" y="265" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Kanker</text>
          <text x="200" y="275" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Kondagaon</text>
          <text x="280" y="290" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Sukma</text>
          <text x="170" y="250" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Narayanpur</text>
        </g>
        
        {/* Ambient glow beneath map */}
        <ellipse
          cx="200"
          cy="330"
          rx="120"
          ry="15"
          fill="hsl(145, 50%, 40%)"
          opacity="0.15"
        />
      </svg>
    </div>
  );
};
