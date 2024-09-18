"use client"

import { useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Utensils, BarChart2, Loader2, ChevronRight, Info } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function FoodTracking() {
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const handleImageSubmit = async () => {
    if (!image) {
      setError('Please upload an image')
      return
    }

    setIsLoading(true)
    const formData = new FormData()
    formData.append('image', image)

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
const foodData = response.data;
    setResults(foodData);
    setError('');

    // Send each food item to the Next.js API route for saving
    for (const item of foodData) {
      await axios.post('src/app/api/food/index.js', {
        name: item.name,
        calories: item.calories,
      });
    }
  } catch (error) {
    setError('Something went wrong. Please try again.');
  }
};
      // const foodData = response.data;
// const foodData = response.data;
//       setResults(foodData);
//       setError('');
//     } catch (error) {
//       setError('Something went wrong. Please try again.');
//     }
//   };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center cursor-pointer hover:text-gray-600 transition-colors">
                <Utensils className="mr-2 h-6 w-6 text-gray-600" />
                Food Tracking
              </h1>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>About Food Tracking</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p>Food tracking is an essential part of maintaining a healthy diet. With NutriTrack, you can easily log your meals, analyze their nutritional content, and keep track of your dietary habits.</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Upload food images for instant analysis</li>
                  <li>Get detailed nutritional information</li>
                  <li>Track your meals over time</li>
                  <li>Receive personalized dietary recommendations</li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
          <BarChart2 className="h-6 w-6 text-gray-600" />
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden shadow-md">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-50">
                  <Label htmlFor="image-upload" className="cursor-pointer">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        alt="Food preview"
                        width={300}
                        height={300}
                        className="mx-auto rounded-lg object-cover"
                      />
                    ) : (
                      <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <p className="mt-1 text-sm text-gray-600">
                      {imagePreview ? "Click to change image" : "Take a photo or upload an image of your food"}
                    </p>
                  </Label>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <Button
                  className="w-full mt-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
                  onClick={handleImageSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Camera className="mr-2 h-4 w-4" />
                  )}
                  {isLoading ? "Analyzing..." : "Analyze Food"}
                </Button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-red-600"
                >
                  {error}
                </motion.p>
              )}
              <AnimatePresence>
                {results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                  >
                    <h2 className="text-xl font-semibold mb-4">Analysis Results:</h2>
                    {results.map((item, index) => (
                      <div key={index} className="mt-2 p-2 border rounded bg-white">
                        
                        <h3 className="font-medium">{item.name}</h3>
                        <p>Calories: {item.calories.toFixed(2)}</p>
                         {/* <p>Fats: {item.fats}</p>
                         <p>Carbs: {item.carbs}</p>
                         <p>Protein: {item.protein}</p> */}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mt-6 overflow-hidden shadow-md">
            <CardHeader className="bg-gray-50 border-b border-gray-200">
              <CardTitle className="text-xl text-gray-800">Recently Analyzed Foods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-gray-200">
                {recentlyAddedFoods.map((food, index) => (
                  <li key={index} className="py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Utensils className="h-6 w-6 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">{food.name}</p>
                        <p className="text-sm text-gray-500">{food.calories} calories</p>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Info className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{food.name}</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Nutritional Information</h4>
                          <div className="space-y-2">
                            <p><strong>Calories:</strong> {food.calories}</p>
                            <p><strong>Protein:</strong> {food.nutrients.protein}g</p>
                            <p><strong>Carbs:</strong> {food.nutrients.carbs}g</p>
                            <p><strong>Fat:</strong> {food.nutrients.fat}g</p>
                            <p><strong>Fiber:</strong> {food.nutrients.fiber}g</p>
                            <h5 className="text-sm font-medium text-gray-500 mt-4 mb-2">Vitamins</h5>
                            <ul className="list-disc pl-5">
                              {Object.entries(food.nutrients.vitamins).map(([vitamin, value]) => (
                                <li key={vitamin}>
                                  Vitamin {vitamin}: {value}%
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}