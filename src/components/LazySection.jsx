import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Loading Spinner Component
const LoadingSpinner = () => (
  <motion.div
    className="flex items-center justify-center py-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="w-12 h-12 border-4 border-purple-500 rounded-full border-t-blue-500"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  </motion.div>
);

// Lazy Loading Wrapper Component
const LazySection = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} id={id}>
      {isVisible ? (
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      ) : (
        <div className="py-12" />
      )}
    </div>
  );
};

export { LazySection, LoadingSpinner };