"use client";
import React from 'react'
import Layout from '../layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, Camera, Plus } from "lucide-react"

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full bg-gradient-to-r from-primary to-primary-foreground text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back, Alex!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">You're making great progress. Keep it up!</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Calories Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">1,500 / 2,000</div>
            <Progress value={75} className="h-2" />
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold">Protein</p>
                <p>75g / 100g</p>
              </div>
              <div>
                <p className="font-semibold">Carbs</p>
                <p>150g / 200g</p>
              </div>
              <div>
                <p className="font-semibold">Fat</p>
                <p>50g / 65g</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart className="h-48 w-full" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Meals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Breakfast - Oatmeal with berries</span>
                <span className="text-muted-foreground">300 cal</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Lunch - Grilled chicken salad</span>
                <span className="text-muted-foreground">450 cal</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Snack - Apple with peanut butter</span>
                <span className="text-muted-foreground">200 cal</span>
              </li>
            </ul>
            <Button className="w-full mt-4">
              <Camera className="mr-2 h-4 w-4" /> Add Meal
            </Button>
          </CardContent>
        </Card>
        
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="text-xl">Meal Planner</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="monday" className="w-full">
              <TabsList>
                <TabsTrigger value="monday">Mon</TabsTrigger>
                <TabsTrigger value="tuesday">Tue</TabsTrigger>
                <TabsTrigger value="wednesday">Wed</TabsTrigger>
                <TabsTrigger value="thursday">Thu</TabsTrigger>
                <TabsTrigger value="friday">Fri</TabsTrigger>
                <TabsTrigger value="saturday">Sat</TabsTrigger>
                <TabsTrigger value="sunday">Sun</TabsTrigger>
              </TabsList>
              <TabsContent value="monday">
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <h3 className="font-semibold">Breakfast</h3>
                    <p>Oatmeal with berries</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Lunch</h3>
                    <p>Grilled chicken salad</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Dinner</h3>
                    <p>Baked salmon with vegetables</p>
                  </div>
                </div>
              </TabsContent>
              {/* Add content for other days */}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}