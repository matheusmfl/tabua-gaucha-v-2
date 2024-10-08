import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./ui/button";
import customizeImg from '../../public/customizeImg.png'
import bgWood from '../../public/bg-wood-svg.svg'

export function CustomizeFurnitureSection() {
  return (
    <section className="p-20 bg-gray-100 flex justify-center relative overflow-hidden">

      <div className="absolute right-0 top-0">
        <div className="relative h-[600px] w-[450px]">
          <Image src={bgWood} fill alt="Backgroud de madeira" className="object-cover" />
        </div>
      </div>



      <Container >
        {/* Container total */}
        <div className="flex gap-5 px-10 w-full items-center justify-center">
          {/* Div da esquerda */}
          <div className="py-9 flex flex-col gap-5 min-w-[400px] max-w-[590px] pr-14">
            {/* Primeiro texto com divisor */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[40px] text-neutral-500 font-normal leading-[48px]">Do seu <strong className="text-neutral-600 font-semibold">jeito<span className="font-semibold text-yellow-400">!</span></strong></h2>
                <div className="bg-yellow-400 h-2 w-[120px]" />
              </div>

              <span className="font-medium text-xl leading-7 text-neutral-600">Personalizar cada elemento do eu móvel rústico e tenha uma peça com o seu estilo.</span>
            </div>

            {/* CheckList */}
            <div className="flex flex-col gap-2">
              {/* Check 1 */}
              <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.944092C8.02219 0.944092 6.08879 1.53058 4.4443 2.6294C2.79981 3.72821 1.51809 5.29 0.761209 7.11726C0.00433284 8.94452 -0.1937 10.9552 0.192152 12.895C0.578004 14.8348 1.53041 16.6166 2.92894 18.0152C4.32746 19.4137 6.10929 20.3661 8.0491 20.7519C9.98891 21.1378 11.9996 20.9398 13.8268 20.1829C15.6541 19.426 17.2159 18.1443 18.3147 16.4998C19.4135 14.8553 20 12.9219 20 10.9441C19.9972 8.29278 18.9427 5.75087 17.068 3.87612C15.1932 2.00136 12.6513 0.946892 10 0.944092ZM14.3904 9.18063L9.00577 14.5652C8.93433 14.6368 8.84949 14.6935 8.75611 14.7322C8.66273 14.7709 8.56263 14.7908 8.46154 14.7908C8.36045 14.7908 8.26035 14.7709 8.16697 14.7322C8.07359 14.6935 7.98875 14.6368 7.91731 14.5652L5.60962 12.2576C5.46528 12.1132 5.38419 11.9174 5.38419 11.7133C5.38419 11.5092 5.46528 11.3134 5.60962 11.1691C5.75396 11.0248 5.94972 10.9437 6.15385 10.9437C6.35798 10.9437 6.55374 11.0248 6.69808 11.1691L8.46154 12.9335L13.3019 8.09217C13.3734 8.0207 13.4582 7.964 13.5516 7.92533C13.645 7.88665 13.7451 7.86674 13.8462 7.86674C13.9472 7.86674 14.0473 7.88665 14.1407 7.92533C14.2341 7.964 14.3189 8.0207 14.3904 8.09217C14.4619 8.16364 14.5185 8.24848 14.5572 8.34186C14.5959 8.43524 14.6158 8.53533 14.6158 8.6364C14.6158 8.73747 14.5959 8.83755 14.5572 8.93093C14.5185 9.02431 14.4619 9.10916 14.3904 9.18063Z" fill="#525252" />
                </svg>
                <span className="text-base font-medium leading-7 text-neutral-600">Formato da madeira</span>
              </div>

              {/* Check 2 */}
              <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.944092C8.02219 0.944092 6.08879 1.53058 4.4443 2.6294C2.79981 3.72821 1.51809 5.29 0.761209 7.11726C0.00433284 8.94452 -0.1937 10.9552 0.192152 12.895C0.578004 14.8348 1.53041 16.6166 2.92894 18.0152C4.32746 19.4137 6.10929 20.3661 8.0491 20.7519C9.98891 21.1378 11.9996 20.9398 13.8268 20.1829C15.6541 19.426 17.2159 18.1443 18.3147 16.4998C19.4135 14.8553 20 12.9219 20 10.9441C19.9972 8.29278 18.9427 5.75087 17.068 3.87612C15.1932 2.00136 12.6513 0.946892 10 0.944092ZM14.3904 9.18063L9.00577 14.5652C8.93433 14.6368 8.84949 14.6935 8.75611 14.7322C8.66273 14.7709 8.56263 14.7908 8.46154 14.7908C8.36045 14.7908 8.26035 14.7709 8.16697 14.7322C8.07359 14.6935 7.98875 14.6368 7.91731 14.5652L5.60962 12.2576C5.46528 12.1132 5.38419 11.9174 5.38419 11.7133C5.38419 11.5092 5.46528 11.3134 5.60962 11.1691C5.75396 11.0248 5.94972 10.9437 6.15385 10.9437C6.35798 10.9437 6.55374 11.0248 6.69808 11.1691L8.46154 12.9335L13.3019 8.09217C13.3734 8.0207 13.4582 7.964 13.5516 7.92533C13.645 7.88665 13.7451 7.86674 13.8462 7.86674C13.9472 7.86674 14.0473 7.88665 14.1407 7.92533C14.2341 7.964 14.3189 8.0207 14.3904 8.09217C14.4619 8.16364 14.5185 8.24848 14.5572 8.34186C14.5959 8.43524 14.6158 8.53533 14.6158 8.6364C14.6158 8.73747 14.5959 8.83755 14.5572 8.93093C14.5185 9.02431 14.4619 9.10916 14.3904 9.18063Z" fill="#525252" />
                </svg>
                <span className="text-base font-medium leading-7 text-neutral-600">Tipo de Suporte</span>
              </div>

              {/* Check 3 */}
              <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.944092C8.02219 0.944092 6.08879 1.53058 4.4443 2.6294C2.79981 3.72821 1.51809 5.29 0.761209 7.11726C0.00433284 8.94452 -0.1937 10.9552 0.192152 12.895C0.578004 14.8348 1.53041 16.6166 2.92894 18.0152C4.32746 19.4137 6.10929 20.3661 8.0491 20.7519C9.98891 21.1378 11.9996 20.9398 13.8268 20.1829C15.6541 19.426 17.2159 18.1443 18.3147 16.4998C19.4135 14.8553 20 12.9219 20 10.9441C19.9972 8.29278 18.9427 5.75087 17.068 3.87612C15.1932 2.00136 12.6513 0.946892 10 0.944092ZM14.3904 9.18063L9.00577 14.5652C8.93433 14.6368 8.84949 14.6935 8.75611 14.7322C8.66273 14.7709 8.56263 14.7908 8.46154 14.7908C8.36045 14.7908 8.26035 14.7709 8.16697 14.7322C8.07359 14.6935 7.98875 14.6368 7.91731 14.5652L5.60962 12.2576C5.46528 12.1132 5.38419 11.9174 5.38419 11.7133C5.38419 11.5092 5.46528 11.3134 5.60962 11.1691C5.75396 11.0248 5.94972 10.9437 6.15385 10.9437C6.35798 10.9437 6.55374 11.0248 6.69808 11.1691L8.46154 12.9335L13.3019 8.09217C13.3734 8.0207 13.4582 7.964 13.5516 7.92533C13.645 7.88665 13.7451 7.86674 13.8462 7.86674C13.9472 7.86674 14.0473 7.88665 14.1407 7.92533C14.2341 7.964 14.3189 8.0207 14.3904 8.09217C14.4619 8.16364 14.5185 8.24848 14.5572 8.34186C14.5959 8.43524 14.6158 8.53533 14.6158 8.6364C14.6158 8.73747 14.5959 8.83755 14.5572 8.93093C14.5185 9.02431 14.4619 9.10916 14.3904 9.18063Z" fill="#525252" />
                </svg>
                <span className="text-base font-medium leading-7 text-neutral-600">Acabamento</span>
              </div>
            </div>

            <Button className="group w-fit px-11 flex gap-1">
              Encomende seu móvel <span className="ml-2 transition-transform duration-300 group-hover:animate-pulse">&gt;</span>
            </Button>
          </div>

          {/* Image Container */}
          <div className="w-[534px] h-[400px] rounded-tl-lg rounded-br-lg drop-shadow-md overflow-hidden relative">
            <Image src={customizeImg} fill className="object-cover" alt="Customize seu móvel" />
          </div>
        </div>
      </Container>
    </section>
  )
}