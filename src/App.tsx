import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator"

export function App() {
  return (
  <div>

    <div className="px-6 flex items-center justify-between border-b">
      <h1 className="text-x1 font-bold">upload.ai</h1>
      
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Desenvolvido por Lussati Santos na NLW IA da Rocketseat</span>

        <Separator orientation='vertical' className='h-6'/>
        <Button variant="outline">
          <Github className="m-4 h-4 mr-2" />
          Github</Button>
      </div>
    </div>
  </div>
  )
}