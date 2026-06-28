import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export function useScrollReveal(threshold = 0.15): [React.RefObject<HTMLElement> | ((node?: Element | null) => void), AnimationControls] {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return [ref, controls];
}
