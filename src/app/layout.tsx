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
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs'

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
          <Navbar/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}