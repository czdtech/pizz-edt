'use client';

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rotate-45 animate-float-medium"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-lg animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-violet-500/10 transform rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-cyan-500/10 rounded-full animate-float-medium"></div>
        
        {/* Medium shapes */}
        <div className="absolute top-60 left-1/3 w-12 h-12 bg-emerald-500/15 rotate-45 animate-float-fast"></div>
        <div className="absolute top-80 right-1/4 w-14 h-14 bg-amber-500/15 rounded-lg animate-float-slow"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-rose-500/15 rounded-full animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-teal-500/15 rotate-12 animate-float-fast"></div>
        <div className="absolute bottom-60 right-1/3 w-16 h-16 bg-orange-500/15 rounded-lg animate-float-slow"></div>
        
        {/* Small shapes */}
        <div className="absolute top-32 left-1/2 w-6 h-6 bg-pink-500/20 rounded-full animate-float-medium"></div>
        <div className="absolute top-96 left-16 w-4 h-4 bg-lime-500/20 rotate-45 animate-float-fast"></div>
        <div className="absolute bottom-80 left-1/3 w-5 h-5 bg-sky-500/20 rounded-lg animate-float-slow"></div>
        <div className="absolute top-1/4 right-16 w-7 h-7 bg-fuchsia-500/20 rotate-12 animate-float-medium"></div>
        <div className="absolute bottom-24 left-1/2 w-6 h-6 bg-yellow-500/20 rounded-full animate-float-fast"></div>
        
        {/* Extra small decorative elements */}
        <div className="absolute top-16 right-1/4 w-3 h-3 bg-blue-400/25 rounded-full animate-float-slow"></div>
        <div className="absolute top-72 left-8 w-2 h-2 bg-purple-400/25 rotate-45 animate-float-medium"></div>
        <div className="absolute bottom-16 right-1/2 w-4 h-4 bg-indigo-400/25 rounded-lg animate-float-fast"></div>
        <div className="absolute top-1/3 left-8 w-3 h-3 bg-violet-400/25 rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-48 right-8 w-2 h-2 bg-cyan-400/25 rounded-full animate-float-medium"></div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-purple-500/5 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-indigo-500/5 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}
