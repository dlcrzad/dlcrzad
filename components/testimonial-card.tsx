import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  company: string
}

export function TestimonialCard({ quote, author, position, company }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <QuoteIcon className="h-8 w-8 text-primary/40 mb-4" />
        <p className="text-muted-foreground mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {position}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
