import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectValue, SelectContent, SelectTrigger, SelectItem} from './components/ui/select';
import { Slider } from './components/ui/slider'

export function App() {
  return (
  <div className="min-h-screen flex flex-col">

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

    <main className="flex-1 p-6  flex gap-6">
     <div className="flex flex-col flex-1 gap-4">
      <div className="grid grid-rows-2 gap-4 flex-1">
        <Textarea
        className="resize-none p-4 leading-relaxed" 
          placeholder="Inclua o prompt para a IA..." 
        />
        <Textarea
        className="resize-none p-4 leading-relaxed"
          placeholder="Resulado gerado pela IA..." 
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Lembre-se: voce pode utilizar a variavel <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteudo da transcricao do video selecionado.
      </p>
     </div>
     <aside className="w-80 space-y-6">
      <form className="space-y-6">
        <label htmlFor="video"
        className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
        >
          <FileVideo className="w-4 h-4" />
          Selecione um video
        </label>

        <input type="file" id="video" accept="video/mp4" className="sr-only" />

        <Separator />
        <div className="space-y-2">
          <Label htmlFor="transcription_prompt">Prompt de transcricao</Label>
          <Textarea 
            id="transcription__prompt" 
            className="h-20 leading-relaxed resize-none"
            placeholder="Inclua palavras-chave mencionadas no video separadas por virgula (,)"  
          />
        </div>

        <Button type="submit" className="w-full">
          Carregar video
          <Upload className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <Separator />

      <div className="space-2">
          <Label>Prompt</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um prompt..." />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="title">Titulo do YouTube</SelectItem>
              <SelectItem value="description">Descricao do YouTube</SelectItem>
            </SelectContent>
          </Select>
        </div>

      <form className="space-y-6">
        <div className="space-2">
          <Label>Modelo</Label>
          <Select disabled defaultValue="gpt3.5">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="gpt3.5">GPT 3.5-turbo 16</SelectItem>
            </SelectContent>
          </Select>
          <span className="block text-xs text-muted-foreground italic leading-relaxed">
            Voce podera customizar essa opcao em breve
          </span>
        </div>

        <Separator />

        <div className="space-y-4">
          <Label>Temperatura</Label>
          <Slider
            min={0}
            max={1}
            step={0.1}
          />
          <span className="block text-xs text-muted-foreground italic leading-relaxed">
            Valores mais altos tendem a deixar mais criativo e com possiveis erros
          </span>
        </div>

        <Separator />

        <Button type="submit" className="w-full">
          Executar
          <Wand2 className="w-4 h-4 ml-2" />
        </Button>
      </form>
     </aside>
    </main>
  </div>
  )
}