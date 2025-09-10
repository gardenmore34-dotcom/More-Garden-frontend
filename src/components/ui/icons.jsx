// Minimal, consistent inline SVG icon set

export const IconWateringCan = ({ className = "w-5 h-5 text-green-600" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10a4 4 0 0 1 4-4h2a1 1 0 0 1 1 1v1h1.5a3.5 3.5 0 0 1 3.3 2.4l.2.6a1 1 0 0 1-1.16 1.27L17 12v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 9h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M18 9l2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M6 16c0-1.1.9-2 2-2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export const IconFertilizerSack = ({ className = "w-5 h-5 text-amber-700" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4h10l1.5 2v12l-1.5 2H7L5.5 18V6L7 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M10 10a3.5 3.5 0 0 0 4 0c-1 2.5-2 3.9-2 3.9S11 12.5 10 10Z" fill="currentColor"/>
    <circle cx="12" cy="10" r="0.8" fill="#fff"/>
  </svg>
);

export const IconPot = ({ className = "w-5 h-5 text-orange-700" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7h14l-1 3a8 8 0 0 1-12 0L5 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M7 10h10l-.7 5.2A3 3 0 0 1 13.3 18h-2.6a3 3 0 0 1-3-2.8L7 10Z" fill="currentColor"/>
  </svg>
);

export const IconPlant = ({ className = "w-5 h-5 text-green-700" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 14c-4 0-5.8-2.8-6.5-5 .8-.3 3.8-.9 6.5 1.2 2.7-2.1 5.7-1.5 6.5-1.2-.7 2.2-2.5 5-6.5 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M9 20h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export const IconSeeds = ({ className = "w-5 h-5 text-yellow-600" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 9c1.6 0 3 .7 3 2.3 0 1.2-1.4 2.7-3 4.2-1.6-1.5-3-3-3-4.2C9 9.7 10.4 9 12 9Z" fill="currentColor"/>
    <circle cx="12" cy="11" r="0.7" fill="#fff"/>
  </svg>
);

// Blog (notebook/paper + pen)
export const IconBlog = ({ className = "w-5 h-5 text-green-700" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 7h4M9 10h6M9 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M17 8l2.5 2.5-5.5 5.5H12v-2L17 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);

// About (info badge / user info)
export const IconAbout = ({ className = "w-5 h-5 text-green-700" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6 19a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="19" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M19 4.5v1M18.5 5h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// Bulk (box/package)
export const IconBulk = ({ className = "w-5 h-5 text-green-700" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7.5 12 3l9 4.5v9L12 21 3 16.5v-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M12 21v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M21 7.5 12 12 3 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);
