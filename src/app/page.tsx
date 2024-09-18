"use client";
import { useAuth, SignInButton } from '@clerk/nextjs'; // Import Clerk hooks and components
import { useRouter } from 'next/navigation'; // Use Next.js router for navigation

const HomePage = () => {
  const { isSignedIn } = useAuth(); // Check if the user is signed in
  const router = useRouter(); // Get Next.js router to handle redirects

  const handleGetStarted = () => {
    // If the user is signed in, redirect them to the food tracking page
    if (isSignedIn) {
      router.push('/food_tracking_page');
    }
    // Otherwise, Clerk's SignInButton will handle the sign-in process
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>NutriTrack</h1>
          <p className='py-6 text-lg leading-loose'>
            AI Powered nutrition tracker
          </p>
          {/* Check if the user is already signed in */}
          {isSignedIn ? (
            <button className='btn btn-secondary' onClick={handleGetStarted}>
              Get Started
            </button>
          ) : (
            // Use Clerk's SignInButton to show the sign-in form
            <SignInButton mode="modal">
              <button className='btn btn-secondary'>
                Get Started
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
