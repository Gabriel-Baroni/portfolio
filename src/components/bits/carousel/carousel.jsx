import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './carousel.css';

const GAP = 20; // Espaço entre os cards
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, trackItemOffset, x }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  
  // Rotação suave para manter o foco centralizado
  const rotateY = useTransform(x, range, [35, 0, -35]);
  const scale = useTransform(x, range, [0.9, 1, 0.9]);
  const opacity = useTransform(x, range, [0, 1, 0]); // Esconde os cards laterais quase totalmente

  return (
    <motion.div
      className="carousel-item"
      style={{
        width: itemWidth,
        rotateY,
        scale,
        opacity,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="carousel-item-header">
        <div className="carousel-image-container">
          {item.image ? (
            <img src={item.image} alt={item.title} className="carousel-img" />
          ) : (
            <div className="carousel-icon-wrapper">{item.icon}</div>
          )}
        </div>
      </div>
      <div className="carousel-item-content">
        <h3 className="carousel-item-title">{item.title}</h3>
        <p className="carousel-item-description">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({ items = [], baseWidth = 500 }) {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Ajuste de largura: no mobile ou desktop, o container define o limite
  const containerPadding = 32;
  const effectiveWidth = useMemo(() => {
    if (windowWidth < 768) return windowWidth - containerPadding;
    return baseWidth;
  }, [windowWidth, baseWidth]);

  // itemWidth igual ao effectiveWidth garante UM card por vez ocupando o espaço
  const itemWidth = effectiveWidth;
  const trackItemOffset = itemWidth + GAP;

  const [position, setPosition] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    x.set(-position * trackItemOffset);
  }, [position, trackItemOffset, x]);

  const handleDragEnd = (_, info) => {
    const direction = info.offset.x < -50 ? 1 : info.offset.x > 50 ? -1 : 0;
    setPosition(p => Math.max(0, Math.min(p + direction, items.length - 1)));
  };

  return (
    <div className="carousel-container" style={{ width: '100%', maxWidth: `${effectiveWidth}px` }}>
      <motion.div
        className="carousel-track"
        drag="x"
        dragConstraints={{ left: -(items.length - 1) * trackItemOffset, right: 0 }}
        style={{ 
          x, 
          gap: `${GAP}px`, 
          perspective: 2000,
          width: itemWidth 
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={SPRING_OPTIONS}
      >
        {items.map((item, index) => (
          <CarouselItem 
            key={index} 
            item={item} 
            index={index} 
            itemWidth={itemWidth} 
            trackItemOffset={trackItemOffset} 
            x={x} 
          />
        ))}
      </motion.div>
      <div className="carousel-indicators">
        {items.map((_, i) => (
          <div 
            key={i} 
            className={`carousel-indicator ${position === i ? 'active' : 'inactive'}`} 
            onClick={() => setPosition(i)} 
          />
        ))}
      </div>
    </div>
  );
}