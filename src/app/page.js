import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[65%]">
        <Carousel className="w-full" opts={{
          loop: true
        }}>
          <CarouselContent>
            <CarouselItem>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Clinica Idée</CardTitle>
                  <CardDescription>Projeto privado baseado em <span style={{ color: 'red' }}>Laravel</span> + <span style={{ color: 'cyan' }}>React</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Uma plataforma para psicólogos que organiza toda a burocracia da profissão, além de possibilitar a emissão de laudos e relatórios personalizados, e organização das finanças com integrações de pagamento com a plataforma Stripe.</p>
                  <img className="rounded-xl w-full" src="https://www.clinicaidee.com.br/img/plans/1.webp" alt="clinicaidee" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <a href="https://www.clinicaidee.com.br" target="_blank">Visitar</a>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Meu Portifólio</CardTitle>
                  <CardDescription>Desenvolvido em Next.js + React + ShadcnUi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Este projeto é o meu primeiro utilizando este framework o qual estou aprendendo junto ao React para aproveitar estes estudos no meu trabalho em tempo integral de consultor Zendesk</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <a href="https://www.github.com/felipeceltic" target="_blank">Visitar</a>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </div>
  );
}

