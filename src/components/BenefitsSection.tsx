import { Container } from "./Container";

export function BenefitsSection() {
  return (
    <section className="py-10 px-[120px] w-full bg-neutral-900 flex justify-center">
      <Container>
        <div className="flex w-full items-center justify-center h-fit">
          {/* Primeiro card */}
          <div className="flex gap-4 items-center justify-center w-[299px]">
            <div className="py-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M16 18.8889H17.3333C18.8 18.8889 20 17.6889 20 16.2222V2.88892H8C6 2.88892 4.25335 3.99557 3.34668 5.62224" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.66663 22.8889C2.66663 25.1022 4.45329 26.8889 6.66663 26.8889H7.99996C7.99996 25.4222 9.19996 24.2222 10.6666 24.2222C12.1333 24.2222 13.3333 25.4222 13.3333 26.8889H18.6666C18.6666 25.4222 19.8666 24.2222 21.3333 24.2222C22.8 24.2222 24 25.4222 24 26.8889H25.3333C27.5466 26.8889 29.3333 25.1022 29.3333 22.8889V18.8889H25.3333C24.6 18.8889 24 18.2889 24 17.5556V13.5556C24 12.8222 24.6 12.2222 25.3333 12.2222H27.0533L24.7733 8.2356C24.2933 7.40893 23.4133 6.88892 22.4533 6.88892H20V16.2222C20 17.6889 18.8 18.8889 17.3333 18.8889H16" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6667 29.5555C12.1394 29.5555 13.3333 28.3616 13.3333 26.8888C13.3333 25.416 12.1394 24.2222 10.6667 24.2222C9.19391 24.2222 8 25.416 8 26.8888C8 28.3616 9.19391 29.5555 10.6667 29.5555Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.3333 29.5555C22.8061 29.5555 24 28.3616 24 26.8888C24 25.416 22.8061 24.2222 21.3333 24.2222C19.8605 24.2222 18.6666 25.416 18.6666 26.8888C18.6666 28.3616 19.8605 29.5555 21.3333 29.5555Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.3333 16.2222V18.8888H25.3333C24.6 18.8888 24 18.2888 24 17.5555V13.5555C24 12.8222 24.6 12.2222 25.3333 12.2222H27.0533L29.3333 16.2222Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.66663 10.8889H10.6666" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.66663 14.8889H7.99996" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.66663 18.8889H5.33329" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-neutral-200 text-lg font-medium leading-6">Entrega em todo Brasil</span>
              <span className="text-sm text-neutral-500 font-medium">Consulte formas de envio</span>
            </div>
          </div>
          <div className="w-[2px] h-[50px] bg-neutral-800" />

          {/* Segundo card */}

          <div className="flex gap-4 items-center justify-center w-[299px]">
            <div className="py-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <g clip-path="url(#clip0_1052_650)">
                  <path d="M28.4 15.2222L29.25 11.2222M3.3 11.2222L6.25 26.2222H18.6M13.25 1.22217L4.3 11.2222M19.25 1.22217L28.25 11.2222M1.25 11.2222H31.25" stroke="#FAFAFA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.25 15.2222H31.25V21.1222C31.1946 23.3047 30.5025 25.4235 29.2589 27.2179C28.0152 29.0123 26.2742 30.4041 24.25 31.2222C22.2258 30.4041 20.4848 29.0123 19.2411 27.2179C17.9975 25.4235 17.3054 23.3047 17.25 21.1222V15.2222Z" stroke="#FAFAFA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.25 21.7222L23.75 24.2222L28.25 19.7222" stroke="#FAFAFA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1052_650">
                    <rect width="32" height="32" fill="white" transform="translate(0.25 0.222168)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-neutral-200 text-lg font-medium leading-6">Compra segura</span>
              <span className="text-sm text-neutral-500 font-medium">Compre pelo Mercado Livre</span>
            </div>
          </div>
          <div className="w-[2px] h-[50px] bg-neutral-800" />

          {/* Terceiro card */}

          <div className="flex gap-4 items-center justify-center w-[299px]">
            <div className="py-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path d="M29.5833 20.2222C29.5833 25.3822 25.41 29.5555 20.25 29.5555L21.65 27.2222" stroke="#FAFAFA" stroke-linecap="square" />
                <path d="M2.91663 12.2222C2.91663 7.06225 7.08996 2.88892 12.25 2.88892L10.85 5.22225" stroke="#FAFAFA" stroke-linecap="square" />
                <path d="M18.5167 6.15552L23.8233 9.22217L29.0766 6.16886" stroke="#FAFAFA" stroke-linecap="square" />
                <path d="M23.8232 14.6488V9.20874" stroke="#FAFAFA" stroke-linecap="square" />
                <path d="M22.57 3.16892L19.37 4.9422C18.65 5.3422 18.05 6.35552 18.05 7.18218V10.5689C18.05 11.3956 18.6367 12.4089 19.37 12.8089L22.57 14.5823C23.25 14.9689 24.37 14.9689 25.0634 14.5823L28.2634 12.8089C28.9834 12.4089 29.5834 11.3956 29.5834 10.5689V7.18218C29.5834 6.35552 28.9967 5.3422 28.2634 4.9422L25.0634 3.16892C24.3834 2.79558 23.2634 2.79558 22.57 3.16892Z" stroke="#FAFAFA" stroke-linecap="square" />
                <path d="M3.3833 20.8223L8.67663 23.8888L13.9433 20.8356" stroke="#FAFAFA" stroke-linecap="square" />
                <path d="M8.67664 29.3155V23.8755" stroke="#FAFAFA" stroke-linecap="square" />
                <path d="M7.43663 17.8354L4.23664 19.6088C3.51664 20.0088 2.91663 21.022 2.91663 21.8486V25.2354C2.91663 26.0621 3.50331 27.0754 4.23664 27.4754L7.43663 29.2488C8.11663 29.6354 9.23661 29.6354 9.92995 29.2488L13.13 27.4754C13.85 27.0754 14.45 26.0621 14.45 25.2354V21.8486C14.45 21.022 13.8633 20.0088 13.13 19.6088L9.92995 17.8354C9.23661 17.4621 8.11663 17.4621 7.43663 17.8354Z" stroke="#FAFAFA" stroke-linecap="square" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-neutral-200 text-lg font-medium leading-6">Fácil devolução</span>
              <span className="text-sm text-neutral-500 font-medium">Sem burocracia</span>
            </div>
          </div>
          <div className="w-[2px] h-[50px] bg-neutral-800" />

          {/* Quarto card */}

          <div className="flex gap-4 items-center justify-center w-[299px]">
            <div className="py-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="35" viewBox="0 0 26 35" fill="none">
                <path d="M5.65119 20.2522L1.61133 30.1924L6.28906 29.6077L9.21265 33.2223L12.6146 23.3353M20.9601 20.2522L25 30.1924L20.3223 29.6077L17.4518 33.2223L13.9967 23.3353" stroke="#FAFAFA" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M13.3058 18.7638C16.8287 18.7638 19.6845 15.908 19.6845 12.3851C19.6845 8.8622 16.8287 6.00635 13.3058 6.00635C9.78292 6.00635 6.92706 8.8622 6.92706 12.3851C6.92706 15.908 9.78292 18.7638 13.3058 18.7638Z" stroke="#FAFAFA" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M13.3055 2.60423L15.6975 1.22217L17.3454 3.45472L20.0563 3.18894L20.6411 5.84675L23.2457 6.7504L22.7141 9.40821L24.7341 11.2687L23.1394 13.5012L24.2557 16.0527L21.8636 17.4348V20.1457L19.0995 20.4647L17.9833 22.963L15.3786 22.1657L13.3055 23.973L11.2324 22.1657L8.62778 22.963L7.5115 20.4647L4.74738 20.1457V17.4348L2.35536 16.0527L3.47164 13.5012L1.87695 11.2687L3.89689 9.40821L3.36532 6.7504L5.96997 5.84675L6.55469 3.18894L9.26565 3.45472L10.9135 1.22217L13.3055 2.60423Z" stroke="#FAFAFA" stroke-miterlimit="10" stroke-linecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-neutral-200 text-lg font-medium leading-6">Qualidade premium</span>
              <span className="text-sm text-neutral-500 font-medium">Acabamento impecável</span>
            </div>
          </div>


        </div>
      </Container>

    </section>
  )
}