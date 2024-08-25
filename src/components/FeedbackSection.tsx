import { FeedbackCarousel } from "./Carousel/feedback/FeedbackCarousel";
import { Container } from "./Container";

export function FeedbackSection() {
  return (
    <section className="bg-neutral-200 px-20 py-16 flex justify-center">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] text-neutral-900 font-semibold leading-[48px]">O que dizem <strong className="text-neutral-600 font-normal">nossos clientes<span className="font-semibold text-yellow-400">?</span></strong></h2>
            <div className="bg-yellow-400 h-2 w-[120px]" />
          </div>

          <FeedbackCarousel />
        </div>
      </Container>
    </section>
  )
}