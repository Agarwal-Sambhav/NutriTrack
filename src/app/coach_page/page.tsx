"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import Layout from '../layout'

export default function ChatbotCoach() {
  return (
    <Layout>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Personal Coach</h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
        <Card className="h-[calc(100vh-200px)] flex flex-col">
          <CardContent className="flex-grow p-6 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-blue-100 rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm">Hello! I'm your personal nutrition coach. How can I help you today?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-green-100 rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm">Hi! I'm looking for advice on how to reduce my calorie intake.</p>
                </div>
              </div>
              {/* Add more chat messages here */}
            </div>
          </CardContent>
          <div className="p-4 border-t">
            <form className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-grow" />
              <Button type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      </main>
    </div>
    </Layout>
  )
}