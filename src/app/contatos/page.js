import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

export default function Contatos() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <div className="w-full max-w-sm">
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <h1 className="text-xl font-bold">Olá, me chamo Luiz Felipe</h1>
                <h2 className="text-xl text-center">sou consultor certificado Zendesk e amo desenvolver aplicações que te ajudam a crescer.</h2>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="Phone">Meu LinkedIn</Label>
                  <Input
                    id="Phone"
                    type="Phone"
                    value="felipeceltic"
                    readOnly
                  />
                  <Button className="w-full">
                    <Link href="https://www.linkedin.com/in/felipeceltic/" target="_blank">
                      Visitar LinkedIn
                    </Link>
                  </Button>
                  <Label htmlFor="email">Meu Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value="felipeceltic@gmail.com"
                    readOnly
                  />
                  <Button className="w-full">
                    <Link href="mailto:felipeceltic@gmail.com">
                      Enviar Mensagem
                    </Link>
                  </Button>
                  <Label htmlFor="Phone">Meu Telefone</Label>
                  <Input
                    id="Phone"
                    type="Phone"
                    value="+55 81 99881-8070"
                    readOnly
                  />
                  <Button className="w-full">
                    <Link href="https://wa.me/5581998818070" target="_blank">
                      Enviar WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border p-4" />
            </div>
          </form>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
            Obrigado pela visita, este site foi feito com amor mas em 3 horas 🏇🏻
          </div>
        </div>
      </div>
    </div>
  )
}
