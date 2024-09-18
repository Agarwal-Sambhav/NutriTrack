import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-card shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/food_tracking_page" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">NutriTrack</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard_page" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <Link href="/coach_page" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">AI-Coach</Link>
                <Link href="/food_tracking_page" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Food Tracking</Link>
                <Link href="/profile" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;