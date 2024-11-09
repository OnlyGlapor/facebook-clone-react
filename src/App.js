import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

const App = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background - Using inline styles to ensure it works */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: 'linear-gradient(-45deg, #E4E9F7, #F0F2F5, #E8F3FF, #EDF0F7)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      {/* Floating Orbs */}
      <div
        style={{
          position: 'fixed',
          top: '20%',
          right: '15%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(24, 119, 242, 0.1)',
          filter: 'blur(60px)',
          animation: 'float 7s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '20%',
          left: '15%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'rgba(66, 103, 178, 0.1)',
          filter: 'blur(50px)',
          animation: 'float 9s ease-in-out infinite',
        }}
      />

      {/* Add keyframe animations through a style tag */}
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(20px);
            }
          }
        `}
      </style>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <div className="pt-[56px]">
          <div className="mx-auto max-w-[1920px] flex justify-center">
            <div className="w-full flex justify-center">
              {/* Left Sidebar */}
              <div className="fixed top-[56px] left-0 lg:left-[calc((100%-1264px)/2)] xl:left-[calc((100%-1384px)/2)]">
                <div className="hidden lg:block w-[240px] xl:w-[280px]">
                  <LeftSidebar />
                </div>
              </div>

              {/* Main Feed */}
              <main className="w-full max-w-[744px] px-4 lg:px-0 mx-auto">
                <Feed />
              </main>

              {/* Right Sidebar */}
              <div className="fixed top-[56px] right-0 lg:right-[calc((100%-1264px)/2)] xl:right-[calc((100%-1384px)/2)]">
                <div className="hidden lg:block w-[220px] xl:w-[280px]">
                  <RightSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content glass effect overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
          backdropFilter: 'blur(100px)',
          WebkitBackdropFilter: 'blur(100px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default App;