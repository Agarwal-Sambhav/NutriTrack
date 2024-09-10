"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Moon, Sun, User } from "lucide-react";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { metadata } from './metadata'; // Ensure this import is correct
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login_page';

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-background text-black">
          {!isLoginPage && (
            <nav className="bg-card shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Link href="/" className="flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">NutriTrack</span>
                    </Link>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <Link href="/dashboard" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                        <Link href="/nutrition" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Nutrition</Link>
                        <Link href="/progress" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Progress</Link>
                        <Link href="/profile" className="hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" aria-label="User Menu" />
                  </div>
                </div>
              </div>
            </nav>
          )}
          {children}
        </div>
      </body>
    </html>
  );
}