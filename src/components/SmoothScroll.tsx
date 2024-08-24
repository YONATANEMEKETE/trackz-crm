import { ReactLenis } from '../lib/lenis-scroll';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
