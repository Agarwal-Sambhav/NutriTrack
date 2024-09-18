import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Camera, BarChart2, Brain, ArrowRight, CheckCircle, Smartphone } from 'lucide-react'

export default function LandingPage() {
  return (
    
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Track Your Nutrition Journey with NutriTrack
                </h1>
                <p className="text-xl mb-8">
                  Upload food photos, track nutrients, and get personalized AI coaching for a healthier you.
                </p>
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-100 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Get Started Free
                </Button>
              </div>
              <div className="lg:w-1/2 relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="NutriTrack App Interface"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How NutriTrack Empowers You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <FeatureCard
                icon={<Camera className="w-12 h-12 text-green-500" />}
                title="Snap and Track"
                description="Simply upload a photo of your meal, and our AI will analyze and log the nutritional content instantly."
              />
              <FeatureCard
                icon={<BarChart2 className="w-12 h-12 text-blue-500" />}
                title="Comprehensive Insights"
                description="Get detailed breakdowns of calories, macronutrients, vitamins, and minerals for every meal."
              />
              <FeatureCard
                icon={<Brain className="w-12 h-12 text-purple-500" />}
                title="AI Diet Coach"
                description="Receive personalized nutrition advice and meal suggestions from our advanced AI trainer."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How NutriTrack Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-6 mb-4">
                  <Camera className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Snap a Photo</h3>
                <p className="text-gray-600">Take a picture of your meal using the NutriTrack app.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-6 mb-4">
                  <BarChart2 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Get Instant Analysis</h3>
                <p className="text-gray-600">Our AI analyzes the photo and provides detailed nutritional information.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-6 mb-4">
                  <Brain className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Receive Personalized Advice</h3>
                <p className="text-gray-600">Get tailored nutrition tips and meal suggestions from our AI coach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-8 lg:mb-0 lg:mr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
                  <p className="text-xl text-white opacity-90">Join thousands of users transforming their health with NutriTrack.</p>
                </div>
                <div className="flex-shrink-0">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full lg:w-64 mb-4 lg:mb-0 lg:mr-4 py-3 px-4 rounded-full text-gray-900"
                  />
                  <Button size="lg" className="w-full lg:w-auto bg-white text-green-600 hover:bg-green-100 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits of Using NutriTrack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard
                icon={<CheckCircle className="w-6 h-6 text-green-500" />}
                title="Accurate Nutrition Tracking"
                description="Get precise measurements of your food intake without manual logging."
              />
              <BenefitCard
                icon={<CheckCircle className="w-6 h-6 text-green-500" />}
                title="Personalized Recommendations"
                description="Receive tailored advice based on your unique nutritional needs and goals."
              />
              <BenefitCard
                icon={<CheckCircle className="w-6 h-6 text-green-500" />}
                title="Time-Saving Convenience"
                description="Spend less time tracking and more time enjoying your meals and life."
              />
              <BenefitCard
                icon={<CheckCircle className="w-6 h-6 text-green-500" />}
                title="Educational Insights"
                description="Learn about the nutritional composition of various foods to make informed choices."
              />
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience NutriTrack on Your Device</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our intuitive app makes nutrition tracking a breeze. Download now and start your journey to better health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    <Smartphone className="mr-2 h-5 w-5" />
                    App Store
                  </Button>
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="NutriTrack App Preview"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="NutriTrack has completely changed how I approach my diet. The AI suggestions are like having a nutritionist in my pocket!"
                author="Sarah L."
                role="Fitness Enthusiast"
              />
              <TestimonialCard
                quote="As a busy professional, the photo tracking feature saves me so much time. It's incredibly accurate and convenient."
                author="Michael R."
                role="Software Engineer"
              />
              <TestimonialCard
                quote="The personalized insights have helped me make smarter food choices. I've never felt healthier!"
                author="Emily T."
                role="Yoga Instructor"
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Nutrition Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their health with NutriTrack. Your path to better nutrition starts here.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-100 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Sign Up Now - It's Free!
            </Button>
          </div>
        </section>
      </main>

    
    
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
      <CardContent>
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <CardContent>
        <p className="text-gray-600 mb-4">"{quote}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}