import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
}

export const RiseToWellnessLogo: React.FC<LogoProps> = ({
  className = "h-16 w-auto",
  variant = 'color',
  showSubtitle = false
}) => {
  // Variant colors
  const textColor = variant === 'dark' ? '#ffffff' : '#135E26';
  const subtitleColor = variant === 'dark' ? '#cccccc' : '#666666';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Gradients for vibrant green leaves matching wlogo.jpg */}
          <linearGradient id="leafGradientLeft" x1="160" y1="88" x2="90" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#589E1E" />
            <stop offset="45%" stopColor="#75BA27" />
            <stop offset="100%" stopColor="#96D142" />
          </linearGradient>

          <linearGradient id="leafGradientRight" x1="160" y1="88" x2="230" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#589E1E" />
            <stop offset="45%" stopColor="#75BA27" />
            <stop offset="100%" stopColor="#96D142" />
          </linearGradient>

          <linearGradient id="smallLeafGrad" x1="160" y1="118" x2="200" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5EA021" />
            <stop offset="100%" stopColor="#87CB34" />
          </linearGradient>
        </defs>

        {/* --- 1. CIRCULAR HAND EMBLEM IN WARM EARTH BROWN --- */}
        {/* Outer Circular Hand Silhouette cupping the sprout */}
        <path
          d="M 104 98
             C 93 114, 88 135, 92 155
             C 97 178, 113 198, 136 205
             C 155 211, 178 209, 196 199
             C 214 188, 226 170, 228 149
             C 230 132, 224 116, 214 102
             C 210 97, 203 103, 206 108
             C 214 120, 217 135, 214 149
             C 210 168, 196 184, 178 190
             C 162 196, 142 193, 128 184
             C 120 178, 115 168, 118 158
             C 120 150, 128 145, 137 147
             C 142 148, 146 151, 147 156
             C 148 163, 144 171, 150 176
             C 155 180, 164 180, 170 176
             C 178 171, 186 161, 190 148
             C 194 135, 192 121, 185 109
             C 183 104, 176 109, 178 114
             C 183 124, 184 136, 180 147
             C 176 156, 168 163, 158 165
             C 151 166, 142 163, 138 156
             C 134 148, 137 138, 132 131
             C 125 122, 114 122, 107 131
             C 102 137, 101 146, 104 154
             C 102 142, 104 128, 110 117
             C 114 111, 109 92, 104 98 Z"
          fill="#8D5A37"
        />

        {/* Central Sprout Stem emerging from palm */}
        <path
          d="M 153 174 Q 152 125 152 78"
          stroke="#8D5A37"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small Branch to the right */}
        <path
          d="M 152 118 Q 162 110 172 106"
          stroke="#8D5A37"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small Leaf on right side */}
        <path
          d="M 170 106 
             C 178 102, 192 98, 198 102 
             C 196 109, 184 115, 170 106 Z"
          fill="url(#smallLeafGrad)"
        />

        {/* --- 2. VIBRANT TOP LEAVES WITH WHITE VEINS --- */}
        {/* Left Leaf */}
        <g>
          <path
            d="M 152 82 
               C 132 87, 108 81, 91 58 
               C 89 54, 93 51, 96 52 
               C 118 63, 139 52, 152 46 
               C 153 58, 153 70, 152 82 Z"
            fill="url(#leafGradientLeft)"
          />
          {/* White center vein on left leaf */}
          <path
            d="M 148 76 Q 126 70 96 54"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
        </g>

        {/* Right Leaf */}
        <g>
          <path
            d="M 152 82 
               C 172 87, 196 81, 213 58 
               C 215 54, 211 51, 208 52 
               C 186 63, 165 52, 152 46 
               C 151 58, 151 70, 152 82 Z"
            fill="url(#leafGradientRight)"
          />
          {/* White center vein on right leaf */}
          <path
            d="M 156 76 Q 178 70 208 54"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
        </g>

        {/* --- 3. CALLIGRAPHIC SCRIPT TEXT "Rise To Wellness" --- */}
        <text
          x="160"
          y="244"
          textAnchor="middle"
          fill={textColor}
          style={{
            fontFamily: '"Kaushan Script", "Caveat", "Brush Script MT", cursive',
            fontWeight: 700,
            fontSize: '32px',
            fontStyle: 'italic',
            letterSpacing: '0.01em'
          }}
        >
          Rise To Wellness
        </text>

        {showSubtitle && (
          <text
            x="160"
            y="262"
            textAnchor="middle"
            fill={subtitleColor}
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: 600,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.22em'
            }}
          >
            ayurvedic massage centre
          </text>
        )}
      </svg>
    </div>
  );
};
