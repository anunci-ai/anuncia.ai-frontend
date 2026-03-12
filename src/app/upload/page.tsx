import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloudIcon, WandSparklesIcon } from "lucide-react";

export default function Upload() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[358px] flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Envie uma foto do produto</CardTitle>
            <CardDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full border border-zinc-300 dark:border-zinc-700 border-dashed rounded-md p-6 text-center flex flex-col gap-3 justify-center items-center h-[128px]">
              <UploadCloudIcon size={18} className="text-muted-foreground" />
              <p className="text-muted-foreground text-xs">
                Arraste a foto aqui ou <br />
                <span className="underline">clique aqui para selecioná-la</span>
              </p>
            </div>
            <span className="block text-muted-foreground text-xs mt-4">Apenas JPG, PNG e WEBP são suportados.</span>
          </CardContent>
        </Card>

        <Textarea placeholder="Forneça detalhes sobre seu produto." />

        <Button>
          Criar anúncio <WandSparklesIcon />
        </Button>
      </div>
    </div>
  );
}
