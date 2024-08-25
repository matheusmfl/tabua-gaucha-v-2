import { Container } from "./Container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

type faqObject = {
  question: string
  answer: string
}

export function FAQ() {

  const FaqQuestions: faqObject[] = [
    {
      answer: 'Sim, oferecemos móveis rústicos projetados especificamente para áreas externas. Usamos acabamentos especiais e resinas que garantem a durabilidade e resistência às condições climáticas.',
      question: 'Existem opções de móveis rústicos para áreas externas, como varandas e jardins?'
    },
    {
      answer: 'Sim, recomendamos a manutenção regular dos móveis para garantir sua durabilidade. Isso inclui a limpeza com produtos apropriados e a aplicação de acabamentos protetores periodicamente.',
      question: 'Os móveis precisam de alguma manutenção de rotina?'
    },
    {
      answer: 'Utilizamos uma variedade de madeiras, incluindo o pinho, o carvalho e a nogueira. Cada tipo de madeira oferece características únicas em termos de aparência e durabilidade.',
      question: 'Quais tipos de madeira são usados na fabricação dos móveis rústicos?'
    },
    {
      answer: 'Sim, você pode personalizar os móveis de acordo com suas preferências. Oferecemos opções de cores, acabamentos e dimensões para atender às suas necessidades específicas.',
      question: 'Posso personalizar os móveis com minhas preferências de cor e acabamento?'
    },
    {
      answer: 'Os móveis podem exigir montagem dependendo do modelo. Oferecemos serviço de montagem para sua conveniência, que pode ser solicitado durante o processo de compra.',
      question: 'Os móveis requerem montagem? O serviço de montagem é oferecido?'
    },
    {
      answer: 'Nossa política de devolução e troca permite que você devolva ou troque o móvel dentro de um prazo específico, desde que ele esteja em condições originais e com a embalagem intacta. Consulte nossa política completa para mais detalhes.',
      question: 'Qual é a política de devolução e troca para móveis?'
    },
    {
      answer: 'Aceitamos várias formas de pagamento, incluindo cartões de crédito, débito e transferência bancária. Também oferecemos opções de parcelamento para facilitar sua compra.',
      question: 'Quais são as opções de pagamento disponíveis ao comprar móveis rústicos?'
    },
    {
      answer: 'Nossos móveis são tratados com produtos que ajudam a prevenir a infestação por pragas e insetos. No entanto, é importante realizar inspeções regulares e manter os móveis em condições adequadas.',
      question: 'Os móveis rústicos são resistentes a pragas e insetos?'
    },
  ];
  return (
    <section className="bg-neutral-100 py-[120px] px-20 flex justify-center">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] text-stone-700 font-semibold leading-[48px]">Dúvidas <strong className="text-stone-400 font-normal">frequentes</strong></h2>
            <div className="bg-yellow-400 h-2 w-[120px]" />
            <span className="mt-1 text-stone-600 text-xl font-medium">Esclareça possíveis dúvidas</span>
          </div>

          {/* Accordion div */}
          <Accordion className=" overflow-hidden rounded-lg shadow-md" type="single" collapsible>
            {FaqQuestions.map((faq, i) => (
              <AccordionItem className="rounded-md" key={i} value={`item-${i}`}>
                <AccordionTrigger className="bg-neutral-800 text-stone-50 px-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="bg-neutral-100 text-stone-800 px-4 py-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>
        </div>
      </Container>

    </section>
  )
}