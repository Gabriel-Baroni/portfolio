import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useCallback } from 'react';
import gsap from 'gsap';
import './card.css';

/* --- COMPONENTE BASE DO CARD --- */
export const Card = forwardRef(({ customClass, children, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()}>
    {children}
  </div>
));
Card.displayName = 'Card';

/* --- (Funções makeSlot e placeNow permanecem as mesmas) --- */
const makeSlot = (i, distX, distY, total) => ({ x: i * distX, y: -i * distY, z: -i * distX * 1.5, zIndex: total - i });
const placeNow = (el, slot, skew) => gsap.set(el, { x: slot.x, y: slot.y, z: slot.z, xPercent: -50, yPercent: -50, skewY: skew, transformOrigin: 'center center', zIndex: slot.zIndex, force3D: true });

const CardSwap = ({
  width = 500, height = 400, cardDistance = 60, verticalDistance = 70,
  onCardClick, skewAmount = 6, easing = 'elastic', children
}) => {
  const config = useMemo(() => easing === 'elastic' 
    ? { ease: 'elastic.out(0.6,0.9)', durDrop: 2, durMove: 2, durReturn: 2, promoteOverlap: 0.9, returnDelay: 0.05 }
    : { ease: 'power1.inOut', durDrop: 0.8, durMove: 0.8, durReturn: 0.8, promoteOverlap: 0.45, returnDelay: 0.2 }
  , [easing]);

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const isAnimating = useRef(false);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation(); // Impede o clique de propagar para o card
    if (order.current.length < 2 || isAnimating.current) return;

    isAnimating.current = true;
    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    const tl = gsap.timeline({ onComplete: () => { order.current = [...rest, front]; isAnimating.current = false; } });

    tl.to(elFront, { y: '+=500', duration: config.durDrop, ease: config.ease });
    tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, 'promote');
      tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease }, `promote+=${i * 0.15}`);
    });

    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
    tl.call(() => { gsap.set(elFront, { zIndex: backSlot.zIndex }); }, undefined, 'return');
    tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease }, 'return');
  }, [refs, cardDistance, verticalDistance, config]);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => { if(r.current) placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount); });
  }, [refs, cardDistance, verticalDistance, skewAmount]);

  return (
    <div className="card-swap-container" style={{ width, height }}>
      {childArr.map((child, i) =>
        isValidElement(child) ? cloneElement(child, {
          key: i, ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          children: (
            <>
              {child.props.children}
              <button className="card-internal-btn" onClick={handleNext}>
                Next →
              </button>
            </>
          ),
          onClick: e => { child.props.onClick?.(e); onCardClick?.(i); }
        }) : child
      )}
    </div>
  );
};

export default CardSwap;