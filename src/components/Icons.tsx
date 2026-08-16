import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true } as const

export function MoonIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20.4 15.2A8.6 8.6 0 0 1 8.8 3.6a7.8 7.8 0 1 0 11.6 11.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function SunIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.5" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
}

export function ArrowLeftIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m14.5 5-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function ArrowRightIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m9.5 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function ExternalIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M14 5h5v5M19 5l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
}

export function MicrophoneIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="8.25" y="3" width="7.5" height="12" rx="3.75" stroke="currentColor" strokeWidth="1.5" /><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
}

export function StopIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" /></svg>
}

export function SparkIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 2.5c.5 4.4 2.6 6.5 7 7-4.4.5-6.5 2.6-7 7-.5-4.4-2.6-6.5-7-7 4.4-.5 6.5-2.6 7-7ZM18.5 15.5c.2 1.8 1.2 2.8 3 3-1.8.2-2.8 1.2-3 3-.2-1.8-1.2-2.8-3-3 1.8-.2 2.8-1.2 3-3Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function CopyIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="8" y="8" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.5" /></svg>
}

export function SearchIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="m15 15 4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
}

export function CloseIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
}
