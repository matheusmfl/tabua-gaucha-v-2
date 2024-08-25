'use client'

import Image from "next/image"
import { Container } from "./Container"
import logo from '../../public/logo.svg'
import logoNav from '../../public/NavigationLogo.svg'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { Button } from "./ui/button"
import Link from "next/link"
import SheetNotification from "./SheetNotification"
import SheetFavorites from "./SheetFavorites"


const NavigationMenuCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="p-3 flex flex-col gap-2 hover:bg-neutral-200 rounded-[6px]">
      <h2 className="font-medium leading-[14px] text-neutral-600 text-base  ">{title}</h2>
      <span className="text-sm text-neutral-500 font-normal leading-5">{description}</span>
    </div>
  )
}

export function Header() {
  return (
    <header className="px-[120px] pt-12 bg-neutral-800 w-full pb-4 flex justify-center">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            <Image src={logo} alt="Logomarca" />
          </Link>
          <nav>
            <NavigationMenu>
              <NavigationMenuList className="text-neutral-100 data-[state=open]:text-yellow-500/80">
                {/* Sobre */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={'hover:text-neutral-200  focus:text-neutral-200'}>Sobre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Container principal */}
                    <div className="bg-white w-[499px] p-6 flex gap-3 ">
                      {/* Container de links */}

                      {/* Container da esquerda */}
                      {/* Nav com logo */}
                      <div className="flex flex-col gap-5 px-6">
                        <NavigationMenuLink asChild>
                          <Link href={'/'} className="flex flex-col gap-5 px-6 hover:bg-neutral-200 pt-4 pb-4 rounded-md">
                            <Image src={logoNav} alt="Logo" />

                            <div className="flex flex-col gap-2">
                              <h2 className="text-lg font-medium leading-6 text-neutral-800">Tábua Gaúcha</h2>
                              <span className="text-neutral-500 font-normal leading-4 text-sm -tracking-[0.08px]">Móveis rústicos premium e personalizados</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Container da direita */}
                      <div className="flex flex-col gap-3">
                        <NavigationMenuLink asChild>
                          <Link href={'/'}>
                            <NavigationMenuCard title="Mesa de centro" description="Móveis maiores para salas e ambientes externos" />
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href={'/'}>
                            <NavigationMenuCard title="Mesa de canto" description="Peças menores ideais para ambientes aconchegantes e modernos" />
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link href={'/'}>
                            <NavigationMenuCard title="Conjunto" description="Móveis compostos por duas ou três mesas" />
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link href={'/'}>
                            <NavigationMenuCard title="Cruz de madeira" description="Item artesanal decorativo - cruz católica em madeira" />
                          </Link>
                        </NavigationMenuLink>
                      </div>

                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Nossa loja */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={'hover:text-neutral-200  focus:text-neutral-200'}>Nossa loja</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Container principal */}
                    <div className="bg-white w-[562px] p-6 flex flex-col ">
                      {/* Container de links */}
                      <div className="flex gap-3">
                        {/* Container da esquerda */}
                        <div className="flex flex-col gap-3">
                          <NavigationMenuLink asChild>
                            <Link href={'/'}>
                              <NavigationMenuCard title="Mesa de centro" description="Realce seus pontos fortes e corrija imperfeições como marcas de expressão e sinta sua melhor versão" />
                            </Link>

                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link href={'/'}>
                              <NavigationMenuCard title="Conjunto" description="Técnicas que visam remodelar seu corpo, eliminar gorduras localizadas com resultados eficazes" />
                            </Link>

                          </NavigationMenuLink>
                        </div>

                        {/* Container da direita */}
                        <div className="flex flex-col gap-3">
                          <NavigationMenuLink asChild>
                            <Link href={'/'}>
                              <NavigationMenuCard title="Mesa de canto" description="O Jetbronze é um método seguro e eficaz de bronzeamento artificial que não causa danos à pele" />
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href={'/'}>
                              <NavigationMenuCard title="Cruz de madeira" description="Elimine impurezas, renove a sua pele e desfrute da maciez e saúde que ela merece" />
                            </Link>
                          </NavigationMenuLink>
                        </div>


                      </div>

                      <Button>
                        Todos os produtos
                      </Button>

                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={'hover:text-neutral-200  focus:text-neutral-200'}>Contato</NavigationMenuTrigger>

                </NavigationMenuItem>
              </NavigationMenuList>


            </NavigationMenu>
          </nav>

          <div className="flex gap-2 items-center justify-center">
            <SheetFavorites />



            <SheetNotification />

          </div>
        </div>

      </Container>
    </header>
  )
}