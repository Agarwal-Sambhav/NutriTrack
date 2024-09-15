"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardContent, Card } from "@/components/ui/card"

export default function LoginRegister() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
              <path d="M2 20h20" />
              <path d="M14 12v.01" />
            </svg>
            <h1 className="text-2xl font-bold text-text">CalorieTracker</h1>
          </div>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Log In</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">Register</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}