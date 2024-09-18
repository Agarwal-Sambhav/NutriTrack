"use client";
import React from 'react';
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Moon, Sun, User } from "lucide-react";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { metadata } from './metadata'; // Ensure this import is correct
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
            <nav style={{ display: 'flex', alignItems: 'center' }}>
              <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ margin: '0 1rem' }}><Link href="/">Home</Link></li>
                <li style={{ margin: '0 1rem' }}><Link href="/about">About</Link></li>
                <li style={{ margin: '0 1rem' }}><Link href="/contact">Contact</Link></li>
                <SignedIn>
                  <li style={{ margin: '0 1rem' }}><UserButton /></li>
                </SignedIn>
                <SignedOut>
                  <li style={{ margin: '0 1rem' }}><SignInButton /></li>
                </SignedOut>
              </ul>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}