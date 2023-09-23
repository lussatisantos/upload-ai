import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, useMemo, useState } from "react";

export function VideoInputForm() {
    const [videoFile, setVideoFile] = useState<File | null>(null)

    function  handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.currentTarget

        if(!files) {
            return 
        }
        
        const selectedFile = files[0]

        setVideoFile(selectedFile)

        const previewURL = useMemo(() => {
            if(!videoFile) {
                return null
            }
            
            return URL.createObjectURL(videoFile)
        }, [videoFile])
    }
    return (
        <form className="space-y-6">
        <label htmlFor="video"
        className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
        >
          { previewURL ? (
            <video src={ previewURL } controls={false} className="pointer-events-none" />
          ) : (
            <>
            <FileVideo className="w-4 h-4" />
            Selecione um video
            </>
          )}
        </label>

        <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelection} />

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
    )
}