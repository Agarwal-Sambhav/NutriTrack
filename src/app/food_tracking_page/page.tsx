"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Camera, Search } from "lucide-react";

export default function FoodTracking() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageSubmit = async () => {
    if (!image) {
      setError('Please upload an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResults(response.data);
      setError('');
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
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
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="mt-4"
                    />
                  </div>
                  <Button className="w-full mt-4" onClick={handleImageSubmit}>
                    <Camera className="mr-2 h-4 w-4" /> Upload Image
                  </Button>
                </div>
                {error && <p className="mt-4 text-red-600">{error}</p>}
                {results.length > 0 && (
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">Results:</h2>
                    {results.map((item, index) => (
                      <div key={index} className="mt-2 p-2 border rounded bg-white">
                        <h3 className="font-medium">{item.name}</h3>
                        <p>Calories: {item.calories.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                )}
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
  );
}