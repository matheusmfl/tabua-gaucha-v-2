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
import bgWood from '../../public/bg-wood-svg.svg'


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
                  <NavigationMenuTrigger className="hover:text-neutral-200 focus:text-neutral-200">
                    Nossa loja
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Container principal */}
                    <div className="bg-slate-50 w-[600px] p-6 flex flex-col gap-5 relative">
                      <Image src={bgWood} alt="Background de madeira" fill className="object-cover " />
                      {/* Título da seção */}
                      <div className="text-center mb-4 relative z-10">
                        <h3 className="text-xl font-semibold text-neutral-800">Explore Nossos Produtos</h3>
                        <p className="text-neutral-500 text-sm">
                          Descubra nossa linha completa de móveis rústicos, criados com qualidade e atenção aos detalhes.
                        </p>
                      </div>

                      {/* Container de links */}
                      <div className="flex gap-3 relative z-10">
                        {/* Container da esquerda */}
                        <div className="flex flex-col gap-3">
                          <NavigationMenuLink asChild>
                            <Link href={'/produto/mesa-de-centro'}>
                              <NavigationMenuCard
                                title="Mesa de Centro"
                                description="Elegância e funcionalidade para sua sala de estar, disponível em diferentes acabamentos."

                              />
                            </Link>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link href={'/produto/conjunto'}>
                              <NavigationMenuCard
                                title="Conjunto de Mesas"
                                description="Componha ambientes com harmonia e estilo com nossos conjuntos de mesas."

                              />
                            </Link>
                          </NavigationMenuLink>
                        </div>

                        {/* Container da direita */}
                        <div className="flex flex-col gap-3">
                          <NavigationMenuLink asChild>
                            <Link href={'/produto/mesa-de-canto'}>
                              <NavigationMenuCard
                                title="Mesa de Canto"
                                description="Peças versáteis que combinam com diversos ambientes, perfeitas para espaços aconchegantes."

                              />
                            </Link>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link href={'/produto/cruz-de-madeira'}>
                              <NavigationMenuCard
                                title="Cruz de Madeira"
                                description="Decore seu ambiente com uma peça artesanal, símbolo de fé e tradição."

                              />
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Botão para todos os produtos */}
                      <div className="text-center mt-4">
                        <Button className="bg-yellow-500 relative z-10 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
                          Ver todos os produtos
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contato */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-neutral-200 focus:text-neutral-200">
                    Contato
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Container principal */}
                    <div className="bg-white w-[562px] p-6 flex flex-col gap-5">
                      <div className="flex gap-3">
                        {/* Container da esquerda */}
                        <div className="flex flex-col gap-3">
                          <NavigationMenuLink asChild>
                            <Link href={'/contato'}>
                              <NavigationMenuCard title="Atendimento" description="Estamos aqui para ajudar! Entre em contato conosco para qualquer dúvida ou suporte." />
                            </Link>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link href={'/contato'}>
                              <NavigationMenuCard title="Localização" description="Encontre a nossa loja física e venha nos visitar pessoalmente." />
                            </Link>
                          </NavigationMenuLink>
                        </div>

                        {/* Container da direita */}
                        <div className="flex flex-col gap-3">
                          <NavigationMenuLink asChild>
                            <Link href={'/contato'}>
                              <NavigationMenuCard title="Parcerias" description="Interessado em colaborar com a Tábua Gaúcha? Fale conosco sobre parcerias e projetos." />
                            </Link>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link href={'/contato'}>
                              <NavigationMenuCard title="Feedback" description="Sua opinião é importante para nós! Compartilhe suas sugestões e experiências." />
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      <Button>Fale conosco</Button>
                    </div>
                  </NavigationMenuContent>
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