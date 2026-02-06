import React, { useEffect, useState, useRef, useCallback, memo } from 'react';

const CustomScrollbar: React.FC = memo(() => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(40);
  const [scrollTop, setScrollTop] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateThumbHeight = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const viewport = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const dynamicHeight = Math.max((viewport / fullHeight) * viewport, 40);
      setThumbHeight(dynamicHeight);
    });
  }, []);

  const updateScrollTop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const viewport = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const maxScroll = fullHeight - viewport;
      const trackHeight = trackRef.current
        ? trackRef.current.offsetHeight - thumbHeight
        : 0;

      if (maxScroll > 0) {
        const newTop = (window.scrollY / maxScroll) * trackHeight;
        setScrollTop(newTop);
      }
    });
  }, [thumbHeight]);

  useEffect(() => {
    updateThumbHeight();
    window.addEventListener('resize', updateThumbHeight);

    return () => {
      window.removeEventListener('resize', updateThumbHeight);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateThumbHeight]);

  useEffect(() => {
    updateScrollTop();
    window.addEventListener('scroll', updateScrollTop);

    return () => {
      window.removeEventListener('scroll', updateScrollTop);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateScrollTop]);

  const handleDrag = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startTop = scrollTop;

    document.body.style.userSelect = 'none';
    (document.body.style as any).webkitUserSelect = 'none';

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const delta = moveEvent.clientY - startY;
        const trackHeight = trackRef.current
          ? trackRef.current.offsetHeight - thumbHeight
          : 0;

        let newTop = Math.max(0, Math.min(startTop + delta, trackHeight));
        setScrollTop(newTop);

        const viewport = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const maxScroll = fullHeight - viewport;

        if (trackHeight > 0) {
          const newScroll = (newTop / trackHeight) * maxScroll;
          window.scrollTo(0, newScroll);
        }
      });
    };

    const onMouseUp = () => {
      document.body.style.userSelect = '';
      (document.body.style as any).webkitUserSelect = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, [scrollTop, thumbHeight]);

  return (
    <div className="custom-scroll-track" ref={trackRef}>
      <div
        className="custom-scroll-thumb"
        style={{ height: thumbHeight, top: scrollTop }}
        onMouseDown={handleDrag}
      />
    </div>
  );
});

export default CustomScrollbar;

