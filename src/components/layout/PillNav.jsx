import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;
        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, pointerEvents: 'none' });
    }

    if (initialLoadAnimation) {
      if (logoRef.current) gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease });
      if (navItemsRef.current) gsap.fromTo(navItemsRef.current, { width: 0 }, { width: 'auto', duration: 0.6, ease, overflow: 'hidden' });
    }

    return () => window.removeEventListener('resize', layout);
  }, [items, ease, initialLoadAnimation]);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    const menu = mobileMenuRef.current;
    const lines = hamburgerRef.current?.querySelectorAll('.hamburger-line');

    if (lines) {
      gsap.to(lines[0], { rotation: newState ? 45 : 0, y: newState ? 4 : 0, duration: 0.3 });
      gsap.to(lines[1], { rotation: newState ? -45 : 0, y: newState ? -4 : 0, duration: 0.3 });
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible', pointerEvents: 'auto' });
        gsap.to(menu, { opacity: 1, y: 0, duration: 0.3, ease });
      } else {
        gsap.to(menu, { opacity: 0, y: 10, duration: 0.2, onComplete: () => gsap.set(menu, { visibility: 'hidden', pointerEvents: 'none' }) });
      }
    }
  };

  const isExternal = href => href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto');

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} style={{ '--pill-bg': pillColor, '--base': baseColor }}>
        <a href="#me" className="pill-logo" ref={logoRef} onMouseEnter={() => gsap.to(logoImgRef.current, { rotate: 360, duration: 0.4 })}>
      
        </a>

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list">
            {items.map((item, i) => (
              <li key={i}>
                <a 
                  href={item.href} 
                  className={`pill ${activeHref === item.href ? 'is-active' : ''}`}
                  onMouseEnter={() => {
                    const tl = tlRefs.current[i];
                    activeTweenRefs.current[i] = tl?.tweenTo(tl.duration(), { duration: 0.3 });
                  }}
                  onMouseLeave={() => {
                    const tl = tlRefs.current[i];
                    activeTweenRefs.current[i] = tl?.tweenTo(0, { duration: 0.2 });
                  }}
                >
                  <span className="hover-circle" ref={el => circleRefs.current[i] = el} />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover">{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button className="mobile-menu-button mobile-only" onClick={toggleMobileMenu} ref={hamburgerRef}>
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={i}>
              <a 
                href={item.href} 
                className="mobile-menu-link" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const menu = mobileMenuRef.current;
                  gsap.to(menu, { opacity: 0, duration: 0.2, onComplete: () => gsap.set(menu, { visibility: 'hidden', pointerEvents: 'none' }) });
                  const lines = hamburgerRef.current?.querySelectorAll('.hamburger-line');
                  if (lines) {
                    gsap.to(lines[0], { rotation: 0, y: 0 });
                    gsap.to(lines[1], { rotation: 0, y: 0 });
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;