import { Container } from "./Container";
import { Button } from "./ui/button";
import heroImg from '../../public/HeroTabua.jpeg'
import Image from "next/image";

export function Hero() {
  return (
    <main className="bg-neutral-100 py-16 px-[120px] flex justify-center">
      <Container>
        {/* Principal Container */}
        <div className="flex gap-20 w-full justify-between">
          {/* Container da esquerda */}
          <div className="w-[520px] flex flex-col gap-12 py-12">
            {/* Primeira parte com SVGS */}
            <div className="flex gap-6 w-full">
              <span className="text-sm text-neutral-400 font-medium leading-8">Design by nature</span>

              <div className="flex gap-3">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.7568 8.36884C17.2618 6.44376 16.0726 4.76964 14.4179 3.66838H19.3341C19.5109 3.66838 19.6805 3.59815 19.8055 3.47313C19.9305 3.34812 20.0007 3.17856 20.0007 3.00176C20.0007 2.82497 19.9305 2.65541 19.8055 2.5304C19.6805 2.40538 19.5109 2.33515 19.3341 2.33515H12.5847C12.4378 1.76158 12.1042 1.25321 11.6365 0.89017C11.1688 0.527131 10.5936 0.330078 10.0015 0.330078C9.40947 0.330078 8.83424 0.527131 8.36654 0.89017C7.89883 1.25321 7.56526 1.76158 7.41841 2.33515H0.668935C0.492138 2.33515 0.322582 2.40538 0.197568 2.5304C0.0725531 2.65541 0.00232078 2.82497 0.00232078 3.00176C0.00232078 3.17856 0.0725531 3.34812 0.197568 3.47313C0.322582 3.59815 0.492138 3.66838 0.668935 3.66838H5.58522C3.93048 4.76964 2.74129 6.44376 2.24631 8.36884C1.60626 8.47097 1.02531 8.80273 0.612107 9.3021C0.198903 9.80146 -0.0182668 10.4342 0.00120443 11.0821C0.0206756 11.73 0.275455 12.3485 0.717902 12.8222C1.16035 13.2958 1.76017 13.5921 2.4052 13.6556C3.05024 13.7191 3.69632 13.5455 4.22264 13.1672C4.74896 12.789 5.11948 12.2319 5.26492 11.6003C5.41036 10.9687 5.32076 10.3057 5.01287 9.73536C4.70498 9.165 4.19989 8.72632 3.59204 8.50133C3.87825 7.51451 4.38706 6.60651 5.07932 5.84723C5.77157 5.08794 6.62881 4.49761 7.58506 4.12168C7.79901 4.583 8.14041 4.97352 8.569 5.2472C8.9976 5.52087 9.49552 5.66628 10.004 5.66628C10.5126 5.66628 11.0105 5.52087 11.4391 5.2472C11.8677 4.97352 12.2091 4.583 12.423 4.12168C13.3783 4.49824 14.2346 5.08885 14.9259 5.8481C15.6173 6.60735 16.1253 7.51502 16.411 8.50133C15.8029 8.72556 15.2972 9.16361 14.9886 9.73359C14.68 10.3036 14.5896 10.9664 14.7343 11.5983C14.8789 12.2301 15.2488 12.7876 15.7746 13.1665C16.3005 13.5454 16.9463 13.7198 17.5915 13.6571C18.2366 13.5944 18.8368 13.2988 19.2798 12.8257C19.7228 12.3526 19.9784 11.7343 19.9986 11.0865C20.0189 10.4386 19.8025 9.8056 19.3899 9.30573C18.9773 8.80587 18.3967 8.4734 17.7568 8.37051V8.36884ZM4.00201 11.0011C4.00201 11.2648 3.92381 11.5226 3.77732 11.7418C3.63082 11.9611 3.4226 12.132 3.17898 12.2329C2.93537 12.3338 2.6673 12.3602 2.40868 12.3087C2.15006 12.2573 1.9125 12.1303 1.72604 11.9439C1.53959 11.7574 1.41261 11.5199 1.36117 11.2612C1.30972 11.0026 1.33613 10.7345 1.43704 10.4909C1.53794 10.2473 1.70883 10.0391 1.92808 9.8926C2.14732 9.7461 2.40509 9.66791 2.66878 9.66791C3.02237 9.66791 3.36148 9.80837 3.61151 10.0584C3.86154 10.3084 4.00201 10.6475 4.00201 11.0011ZM10.0015 4.33499C9.73785 4.33499 9.48008 4.2568 9.26083 4.1103C9.04158 3.96381 8.8707 3.75558 8.76979 3.51197C8.66888 3.26835 8.64248 3.00028 8.69392 2.74166C8.74537 2.48304 8.87234 2.24548 9.0588 2.05903C9.24526 1.87257 9.48281 1.7456 9.74144 1.69415C10.0001 1.64271 10.2681 1.66911 10.5117 1.77002C10.7554 1.87093 10.9636 2.04181 11.1101 2.26106C11.2566 2.48031 11.3348 2.73808 11.3348 3.00176C11.3348 3.35536 11.1943 3.69447 10.9443 3.9445C10.6942 4.19453 10.3551 4.33499 10.0015 4.33499ZM17.3343 12.3344C17.0706 12.3344 16.8128 12.2562 16.5936 12.1097C16.3743 11.9632 16.2035 11.755 16.1025 11.5113C16.0016 11.2677 15.9752 10.9997 16.0267 10.741C16.0781 10.4824 16.2051 10.2449 16.3916 10.0584C16.578 9.87195 16.8156 9.74497 17.0742 9.69352C17.3328 9.64208 17.6009 9.66848 17.8445 9.76939C18.0881 9.8703 18.2963 10.0412 18.4428 10.2604C18.5893 10.4797 18.6675 10.7374 18.6675 11.0011C18.6675 11.3547 18.5271 11.6938 18.277 11.9439C18.027 12.1939 17.6879 12.3344 17.3343 12.3344Z" fill="#737373" />
                </svg>
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3012 0.65668C20.2916 0.493579 20.2226 0.339653 20.107 0.224126C19.9915 0.108599 19.8376 0.0395151 19.6745 0.0299902C15.361 -0.220019 11.8975 1.0917 10.4091 3.54845C9.42576 5.17268 9.42743 7.14526 10.3958 9.02699C9.84461 9.68315 9.44178 10.4507 9.21492 11.2771L7.85904 9.91619C8.51073 8.55531 8.48573 7.13692 7.7757 5.95855C6.67566 4.14264 4.1364 3.16927 0.98378 3.35428C0.820678 3.36381 0.666752 3.43289 0.551225 3.54842C0.435699 3.66394 0.366615 3.81787 0.35709 3.98097C0.17125 7.13359 1.14545 9.67285 2.96135 10.7729C3.5606 11.139 4.2492 11.3328 4.95143 11.3329C5.63304 11.3245 6.30404 11.163 6.91484 10.8604L8.99825 12.9438V15.3331C8.99825 15.5099 9.06849 15.6795 9.19352 15.8045C9.31855 15.9295 9.48812 15.9998 9.66494 15.9998C9.84176 15.9998 10.0113 15.9295 10.1364 15.8045C10.2614 15.6795 10.3316 15.5099 10.3316 15.3331V12.8755C10.3287 11.8148 10.6896 10.7853 11.3542 9.9587C12.2117 10.4068 13.1627 10.6466 14.1301 10.6587C15.0655 10.6617 15.9834 10.4062 16.7827 9.92036C19.2395 8.43364 20.5545 4.97018 20.3012 0.65668ZM3.64888 9.63285C2.3705 8.85865 1.64714 7.02609 1.66464 4.666C4.02473 4.646 5.8573 5.37186 6.63149 6.65024C7.03567 7.31693 7.10151 8.09446 6.8365 8.89532L4.80226 6.86108C4.67621 6.74133 4.50837 6.67555 4.33452 6.67778C4.16068 6.68001 3.99458 6.75006 3.87164 6.87299C3.7487 6.99593 3.67865 7.16203 3.67642 7.33588C3.6742 7.50973 3.73997 7.67757 3.85972 7.80361L5.89396 9.83786C5.0931 10.1029 4.31641 10.037 3.64888 9.63285ZM16.0918 8.78115C14.9751 9.45701 13.6626 9.50868 12.3292 8.94782L16.8035 4.47266C16.9233 4.34661 16.9891 4.17877 16.9868 4.00492C16.9846 3.83108 16.9146 3.66497 16.7916 3.54204C16.6687 3.4191 16.5026 3.34905 16.3287 3.34682C16.1549 3.3446 15.9871 3.41037 15.861 3.53012L11.3858 7.99946C10.8225 6.66607 10.8733 5.35269 11.5525 4.23681C12.7142 2.32008 15.4693 1.2517 18.997 1.33421C19.077 4.861 18.0103 7.61944 16.0918 8.78115Z" fill="#737373" />
                </svg>
              </div>
            </div>
            {/* Segunda parte com hero H1 e paragrafo */}
            <div className="flex flex-col gap-6">
              {/* Hero H1 */}
              <div className="flex flex-col gap-3">
                <h1 className="text-neutral-700 text-[44px] font-normal leading-[48px]">Móveis rústicos <span className="font-semibold text-neutral-500">premium</span> e personalizados</h1>

                <div className="h-1 w-32 bg-yellow-400" />
              </div>

              {/* Hero Description */}

              <span className="max-w-[396px] text-neutral-500 text-base font-normal">
                Personalize cada detalhe do seu móvel dos sonhos criando uma peça única que reflete seu estilo
              </span>
            </div>

            {/* Button */}
            <Button className="mt-4 w-[260px] group">
              Encomende o seu <span className="ml-2 transition-transform duration-300 group-hover:animate-pulse">&gt;</span>
            </Button>
          </div>

          {/* Container da imagem */}

          <div className="relative h-[480px] w-[590px] rounded-tl-[180px] rounded-br-[180px] overflow-hidden shadow-xl ">
            <Image src={heroImg} fill alt="Imagem da Hero Section" className="object-cover" />
          </div>
        </div>
      </Container>
    </main>
  )
}