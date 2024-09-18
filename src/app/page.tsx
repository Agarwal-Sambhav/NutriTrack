"use client";
import { useAuth, SignInButton } from '@clerk/nextjs'; // Import Clerk hooks and components
import { useRouter } from 'next/navigation'; // Use Next.js router for navigation
import LandingPage from "./landing_page/page"
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
    <LandingPage />
  );
};

export default HomePage;
