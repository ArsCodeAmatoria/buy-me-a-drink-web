import { Card, CardContent } from "@/components/ui/card"
import { Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MatchesPage() {
  return (
    <main className="container max-w-lg pt-20 pb-16">
      <div className="relative">
        <Card className="w-full">
          <CardContent className="pt-6">
            <div className="aspect-[3/4] w-full bg-muted rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">Sarah Smith</h2>
            <p className="text-muted-foreground">Tea connoisseur</p>
            <div className="flex justify-center gap-4 mt-6">
              <Button size="icon" variant="outline" className="h-12 w-12">
                <X className="h-6 w-6" />
              </Button>
              <Button size="icon" variant="outline" className="h-12 w-12">
                <Heart className="h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
} 