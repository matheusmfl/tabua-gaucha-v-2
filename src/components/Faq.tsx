import { Container } from "./Container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

type faqObject = {
  question: string
  answer: string
}

export function FAQ() {

  const FaqQuestions: faqObject[] = [
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Existem opções de móveis rústicos para áreas externas, como varandas e jardins?'
    },
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Os móveis precisam de alguma manutenção de rotina?'
    },
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Quais tipos de madeira são usados na fabricação dos móveis rústicos?'
    },
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Posso personalizar os móveis  com minhas preferências de cor e acabamento?'
    },
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Os móveis requerem montagem? O serviço de montagem é oferecido?'
    },
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Qual é a política de devolução e troca para móveis?'
    },
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Quais são as opções de pagamento disponíveis ao comprar móveis rústicos?'
    },
    {
      answer: 'Temos resinas específicas para ambientes externos que garantem uma proteção contra radiação do sol, solicite acabamento para ambientes externos se pretende deixar o móvel exposto.',
      question: 'Os móveis rústicos são resistentes a pragas e insetos?'
    },

  ]
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