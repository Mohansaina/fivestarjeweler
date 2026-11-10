---
name: motion-graphics-animation
description: Comprehensive standards and implementation guidelines for luxury web motion graphics, scroll-driven reveals, interactive viewers, and buttery smooth animations.
---

# Luxury Web Motion Graphics & Scroll Animation Skill

This skill defines the motion design system and interactive standards for high-jewelry and ultra-luxury e-commerce applications.

## 1. Core Principles of Quiet Luxury Motion

High-luxury jewelry is defined by patience, weight, and precision. Motion must feel physical, weighty, and refined—never bouncy, arcade-like, or frenetic.

- **Weight & Damping**:
  - Prefer ease-out cubic beziers: `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.25, 0.1, 0.25, 1)`.
  - Spring configurations: high stiffness (`stiffness: 100-140`), high damping (`damping: 24-30`), zero overshoot.
- **Scroll Reveal Choreography**:
  - Never reveal an entire page simultaneously.
  - Stagger elements by `60ms - 120ms` for natural narrative progression.
  - Initial state: subtle opacity (`0 -> 1`), subtle vertical translation (`y: 24px -> 0`).
- **Interactive Inspection**:
  - Provide tangible feedback on drag, hover, and scrub interactions.
  - Parallax depth: background shifts by `5% - 15%`, foreground cards float with perspective (`perspective: 1000px`).
  - Diamond shimmer & metal luster: subtle light-sweep overlays triggered by cursor tracking.

## 2. Animation Layers

### A. Ambient Light & Metal Sheen
```css
@keyframes luxury-sheen {
  0% { transform: translateX(-100%) rotate(25deg); opacity: 0; }
  40% { opacity: 0.18; }
  100% { transform: translateX(200%) rotate(25deg); opacity: 0; }
}
```

### B. Scroll-Triggered Reveal Hook
```tsx
// Using IntersectionObserver for zero-jank hardware acceleration
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
```

### C. Interactive 3D Perspective Card Tilt
On hover or mouse move, calculate normalized mouse coordinates `[-0.5, 0.5]` and apply subtle `rotateX` and `rotateY` transforms (`max 8deg`) with smooth transition curves.

## 3. Performance & Accessibility Standards
- Always respect `prefers-reduced-motion`: disable non-essential motion or fall back to simple opacity fades.
- Use `will-change: transform, opacity` only on active elements during transitions to prevent memory bloat.
- Keep all animations running at locked 60/120fps using GPU compositor layers (`transform3d`).

