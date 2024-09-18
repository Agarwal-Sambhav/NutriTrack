"use client";
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Calendar } from "../../components/ui/calendar"
import { ChevronLeft, ChevronRight } from "lucide-react"


export default function CalorieHistory() {
  return (
    
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Calorie History</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={new Date()}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Daily Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold">May 15, 2023</span>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Calories:</p>
                  <p className="text-2xl font-bold">1,850 / 2,000</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Macronutrients:</p>
                  <p>Carbs: 45% | Protein: 30% | Fat: 25%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Detailed History</CardTitle>
              <Select defaultValue="week">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Calories</TableHead>
                  <TableHead>Carbs</TableHead>
                  <TableHead>Protein</TableHead>
                  <TableHead>Fat</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>May 15, 2023</TableCell>
                  <TableCell>1,850</TableCell>
                  <TableCell>208g</TableCell>
                  <TableCell>139g</TableCell>
                  <TableCell>51g</TableCell>
                </TableRow>
                {/* Add more rows here */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
    
  )
}