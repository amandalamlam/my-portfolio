type VisualProps = {
  id: string;
};

function Shadow({ id }: { id: string }) {
  return (
    <filter id={id} x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#111827" floodOpacity="0.1" />
    </filter>
  );
}

function ChatbotVisual() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="chat-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFEFB8" />
          <stop offset="1" stopColor="#FFF8E4" />
        </linearGradient>
        <Shadow id="chat-shadow" />
      </defs>
      <rect width="800" height="600" fill="url(#chat-bg)" />
      <circle cx="640" cy="120" r="150" fill="#FFD000" opacity="0.55" />
      <circle cx="140" cy="500" r="90" fill="#FFD000" opacity="0.28" />
      <rect x="145" y="78" width="510" height="444" rx="28" fill="#fff" filter="url(#chat-shadow)" />
      <circle cx="196" cy="128" r="10" fill="#FFD000" />
      <rect x="220" y="122" width="120" height="12" rx="6" fill="#E5E7EB" />
      <rect x="390" y="176" width="220" height="58" rx="18" fill="#FFD000" />
      <rect x="410" y="198" width="140" height="8" rx="4" fill="#111827" opacity="0.35" />
      <rect x="188" y="262" width="250" height="58" rx="18" fill="#F3F4F6" />
      <rect x="208" y="284" width="160" height="8" rx="4" fill="#9CA3AF" />
      <rect x="430" y="348" width="180" height="52" rx="18" fill="#FFD000" />
      <rect x="450" y="368" width="110" height="8" rx="4" fill="#111827" opacity="0.35" />
      <rect x="188" y="430" width="92" height="36" rx="18" fill="#111827" />
    </svg>
  );
}

function BookingVisual() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="book-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E4EDF5" />
          <stop offset="1" stopColor="#F7F4EE" />
        </linearGradient>
        <Shadow id="book-shadow" />
      </defs>
      <rect width="800" height="600" fill="url(#book-bg)" />
      <circle cx="150" cy="110" r="80" fill="#FFD000" opacity="0.35" />
      <rect x="168" y="64" width="464" height="472" rx="28" fill="#fff" filter="url(#book-shadow)" />
      <rect x="200" y="100" width="180" height="16" rx="8" fill="#111827" />
      <rect x="520" y="96" width="76" height="26" rx="13" fill="#FFD000" />
      {Array.from({ length: 35 }).map((_, index) => {
        const col = index % 7;
        const row = Math.floor(index / 7);
        const x = 206 + col * 56;
        const y = 168 + row * 64;
        const selected = index === 17;
        const muted = index === 3 || index === 24;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width="44"
            height="48"
            rx="10"
            fill={selected ? "#FFD000" : muted ? "#F3F4F6" : "#fff"}
            stroke={selected ? "#FFD000" : "#E5E7EB"}
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}

function TranslationVisual() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lang-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4EFE4" />
          <stop offset="1" stopColor="#FFF9F0" />
        </linearGradient>
        <Shadow id="lang-shadow" />
      </defs>
      <rect width="800" height="600" fill="url(#lang-bg)" />
      <rect x="78" y="78" width="250" height="444" rx="20" fill="#fff" filter="url(#lang-shadow)" />
      <rect x="472" y="78" width="250" height="444" rx="20" fill="#fff" filter="url(#lang-shadow)" />
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <rect
          key={`l-${row}`}
          x="112"
          y={130 + row * 58}
          width={row === 2 ? 150 : 184}
          height="12"
          rx="6"
          fill={row === 2 ? "#FFD000" : "#E5E7EB"}
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <rect
          key={`r-${row}`}
          x="506"
          y={130 + row * 58}
          width={row === 2 ? 160 : 176}
          height="12"
          rx="6"
          fill={row === 2 ? "#FFD000" : "#E5E7EB"}
        />
      ))}
      <circle cx="400" cy="300" r="36" fill="#FFD000" />
      <path
        d="M386 300h24M402 290l10 10-10 10"
        fill="none"
        stroke="#111827"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShopVisual() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="shop-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F8EFC8" />
          <stop offset="1" stopColor="#FFF8E8" />
        </linearGradient>
        <Shadow id="shop-shadow" />
      </defs>
      <rect width="800" height="600" fill="url(#shop-bg)" />
      <rect x="110" y="70" width="580" height="460" rx="24" fill="#fff" filter="url(#shop-shadow)" />
      <rect x="146" y="104" width="150" height="14" rx="7" fill="#111827" />
      <rect x="560" y="96" width="90" height="30" rx="15" fill="#FFD000" />
      {[0, 1, 2, 3].map((index) => {
        const col = index % 2;
        const row = Math.floor(index / 2);
        const x = 150 + col * 250;
        const y = 168 + row * 164;
        return (
          <g key={index}>
            <rect x={x} y={y} width="220" height="140" rx="16" fill="#F8F5EE" />
            <rect x={x + 70} y={y + 22} width="80" height="78" rx="8" fill={index === 0 ? "#FFD000" : "#fff"} stroke="#E5E7EB" />
            <rect x={x + 86} y={y + 40} width="48" height="6" rx="3" fill="#111827" opacity="0.25" />
            <rect x={x + 92} y={y + 54} width="36" height="28" rx="4" fill={index === 0 ? "#111827" : "#FFD000"} opacity={index === 0 ? 0.8 : 1} />
          </g>
        );
      })}
    </svg>
  );
}

const visuals: Record<string, () => JSX.Element> = {
  "ai-chatbot": ChatbotVisual,
  "room-booking": BookingVisual,
  "ai-translation": TranslationVisual,
  "card-break": ShopVisual,
};

export default function ProjectVisual({ id }: VisualProps) {
  const Visual = visuals[id] ?? ChatbotVisual;
  return <Visual />;
}
