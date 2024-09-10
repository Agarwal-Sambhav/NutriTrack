"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Search } from "lucide-react"
import Layout from '../layout'

export default function FoodTracking() {
  return (
    <Layout>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Food Tracking</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="search" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="search">Search Food</TabsTrigger>
                <TabsTrigger value="recognize">Recognize Food</TabsTrigger>
              </TabsList>
              <TabsContent value="search" className="mt-4">
                <div className="flex space-x-2">
                  <Input placeholder="Search for a food item..." className="flex-grow" />
                  <Button>
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
                {/* Add search results here */}
              </TabsContent>
              <TabsContent value="recognize" className="mt-4">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-1 text-sm text-gray-600">Take a photo or upload an image of your food</p>
                  </div>
                  <Button className="w-full">
                    <Camera className="mr-2 h-4 w-4" /> Take Photo
                  </Button>
                  <Button variant="outline" className="w-full">
                    Upload Image
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recently Added Foods</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add list of recently added foods here */}
          </CardContent>
        </Card>
      </main>
    </div>
    </Layout>
  )
}