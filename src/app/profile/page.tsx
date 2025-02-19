import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit } from "lucide-react"

export default function ProfilePage() {
  return (
    <main className="container max-w-4xl pt-20 pb-16">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Profile</CardTitle>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="aspect-square w-32 rounded-full bg-muted" />
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">Coffee enthusiast</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Drink Preferences</h3>
              <p className="text-muted-foreground">
                I love trying new coffee roasts and craft beers. Always up for a good espresso!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
} 