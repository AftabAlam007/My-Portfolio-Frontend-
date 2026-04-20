import React, { Suspense } from 'react';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Component Error</h2>
            <p className="text-gray-300 mb-4">Something went wrong with {this.props.componentName}</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lazy load components with error boundaries
const Navbar = React.lazy(() => import('./components/Navbar').catch(() => ({ default: () => <div>Navbar failed to load</div> })));
const AnimatedBackground = React.lazy(() => import('./components/AnimatedBackground').catch(() => ({ default: () => <div>Background failed to load</div> })));
const Hero = React.lazy(() => import('./components/Hero').catch(() => ({ default: () => <div>Hero failed to load</div> })));
const About = React.lazy(() => import('./components/About').catch(() => ({ default: () => <div>About failed to load</div> })));
const Skills = React.lazy(() => import('./components/Skills').catch(() => ({ default: () => <div>Skills failed to load</div> })));
const Projects = React.lazy(() => import('./components/Projects').catch(() => ({ default: () => <div>Projects failed to load</div> })));
const Certificates = React.lazy(() => import('./components/Certificates').catch(() => ({ default: () => <div>Certificates failed to load</div> })));
const Contact = React.lazy(() => import('./components/Contact').catch(() => ({ default: () => <div>Contact failed to load</div> })));
const Footer = React.lazy(() => import('./components/Footer').catch(() => ({ default: () => <div>Footer failed to load</div> })));

// Loading component
const LoadingComponent = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #030720 0%, #1a0835 50%, #0f0620 100%)' }}>
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Aftab Alam</h1>
      <p className="text-xl mb-8">Java Full Stack Developer</p>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p className="text-lg mt-4">Loading Portfolio...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary componentName="App">
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden" style={{ background: 'linear-gradient(135deg, #030720 0%, #1a0835 50%, #0f0620 100%)' }}>
        <Suspense fallback={<LoadingComponent />}>
          <ErrorBoundary componentName="AnimatedBackground">
            <AnimatedBackground />
          </ErrorBoundary>
          <ErrorBoundary componentName="Navbar">
            <Navbar />
          </ErrorBoundary>
          <ErrorBoundary componentName="Hero">
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary componentName="About">
            <About />
          </ErrorBoundary>
          <ErrorBoundary componentName="Skills">
            <Skills />
          </ErrorBoundary>
          <ErrorBoundary componentName="Projects">
            <Projects />
          </ErrorBoundary>
          <ErrorBoundary componentName="Certificates">
            <Certificates />
          </ErrorBoundary>
          <ErrorBoundary componentName="Contact">
            <Contact />
          </ErrorBoundary>
          <ErrorBoundary componentName="Footer">
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;