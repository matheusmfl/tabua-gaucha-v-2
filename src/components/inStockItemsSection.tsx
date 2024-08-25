import Image from "next/image";
import bg from '../../public/bg-in-stock-items.png'
import { Container } from "./Container";
import { Button } from "./ui/button";
import { InStockCarousel } from "./Carousel/InStockCarousel";



export function InStockItemsSection() {
  return (
    <section className="flex justify-center py-16 px-10 relative">
      <Image src={bg} className={'object-cover'} fill alt="Imagem de fundo" />
      <Container>
        {/* Container principal */}
        <div className="px-20 flex flex-col gap-12 relative z-10">
          {/* CTA */}
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-stone-50 text-[40px] font-normal leading-[48px] "><strong className="font-semibold text-stone-300">Pronta</strong> entrega</h2>
              <div className="h-1 w-[120px] bg-yellow-500" />
            </div>
            <Button variant={'ghost'} className="mt-auto">
              Ver todos
            </Button>
          </div>


          <InStockCarousel />


        </div>
      </Container>
    </section>
  )
}