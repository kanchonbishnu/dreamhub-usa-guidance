import { motion } from 'framer-motion';

export function SkylineAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1920 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0.1, 0.08, 0.06, 0.08, 0.1, 0.08, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 0.95, 1]
        }}
      >
        {/* Skyline Silhouette - Iconic USA buildings */}
        <g>
          {/* Empire State Building inspired */}
          <rect x="120" y="80" width="60" height="320" fill="#0B0F19" />
          <polygon points="135,80 150,40 165,80" fill="#1D4ED8" opacity="0.3" />
          
          {/* Chrysler Building inspired */}
          <rect x="220" y="120" width="50" height="280" fill="#0B0F19" />
          <polygon points="235,120 245,70 255,120" fill="#1D4ED8" opacity="0.4" />
          
          {/* Modern skyscraper cluster */}
          <rect x="310" y="100" width="45" height="300" fill="#0B0F19" />
          <rect x="370" y="140" width="55" height="260" fill="#0B0F19" />
          <rect x="440" y="90" width="40" height="310" fill="#0B0F19" />
          
          {/* One World Trade Center inspired */}
          <polygon points="520,400 540,400 560,70 550,60 530,70" fill="#0B0F19" />
          <rect x="535" y="60" width="20" height="15" fill="#1D4ED8" opacity="0.5" />
          
          {/* Willis Tower inspired */}
          <rect x="640" y="110" width="70" height="290" fill="#0B0F19" />
          <rect x="650" y="80" width="25" height="30" fill="#0B0F19" />
          <rect x="685" y="80" width="25" height="30" fill="#0B0F19" />
          
          {/* Modern glass tower cluster */}
          <rect x="750" y="130" width="48" height="270" fill="#0B0F19" />
          <rect x="812" y="150" width="42" height="250" fill="#0B0F19" />
          <rect x="868" y="120" width="50" height="280" fill="#0B0F19" />
          
          {/* Art Deco inspired building */}
          <rect x="960" y="140" width="55" height="260" fill="#0B0F19" />
          <polygon points="975,140 987.5,100 1000,140" fill="#1D4ED8" opacity="0.35" />
          
          {/* Capitol-like dome structure */}
          <rect x="1060" y="160" width="70" height="240" fill="#0B0F19" />
          <ellipse cx="1095" cy="160" rx="40" ry="25" fill="#0B0F19" />
          <ellipse cx="1095" cy="155" rx="25" ry="20" fill="#1D4ED8" opacity="0.4" />
          
          {/* Mixed height buildings cluster */}
          <rect x="1180" y="180" width="38" height="220" fill="#0B0F19" />
          <rect x="1230" y="160" width="45" height="240" fill="#0B0F19" />
          <rect x="1290" y="190" width="40" height="210" fill="#0B0F19" />
          <rect x="1345" y="170" width="42" height="230" fill="#0B0F19" />
          
          {/* Seattle Space Needle inspired */}
          <rect x="1430" y="200" width="15" height="200" fill="#0B0F19" />
          <ellipse cx="1437.5" cy="180" rx="35" ry="20" fill="#0B0F19" />
          <polygon points="1427,170 1437.5,150 1448,170" fill="#1D4ED8" opacity="0.5" />
          
          {/* Final cluster of modern towers */}
          <rect x="1520" y="140" width="50" height="260" fill="#0B0F19" />
          <rect x="1585" y="160" width="45" height="240" fill="#0B0F19" />
          <rect x="1645" y="130" width="48" height="270" fill="#0B0F19" />
          <rect x="1708" y="150" width="42" height="250" fill="#0B0F19" />
          
          {/* Subtle window highlights on select buildings */}
          <g opacity="0.15">
            <rect x="130" y="100" width="8" height="12" fill="#1D4ED8" />
            <rect x="145" y="100" width="8" height="12" fill="#1D4ED8" />
            <rect x="330" y="150" width="6" height="10" fill="#1D4ED8" />
            <rect x="660" y="120" width="10" height="14" fill="#1D4ED8" />
            <rect x="780" y="170" width="7" height="11" fill="#1D4ED8" />
            <rect x="1550" y="180" width="8" height="12" fill="#1D4ED8" />
          </g>
        </g>
      </motion.svg>
    </div>
  );
}
