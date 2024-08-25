import Image from "next/image";
import { Container } from "./Container";
import logo from '../../public/logo.svg'
import Link from "next/link";

interface LinksProps {
  href: string
  label: string
}

export function Footer() {

  const LinksArray: LinksProps[] = [
    {
      label: 'Política de Privacidade',
      href: '/'
    },
    {
      label: 'Termos de Serviço',
      href: '/'
    },
    {
      label: 'Configurações de Cookies',
      href: '/'
    }
  ]

  return (
    <footer className="bg-neutral-900 py-8 px-[120px] h-[160px] flex justify-center">
      <Container className="mt-auto pt-20">
        <div className="flex items-end justify-between mt-auto">

          <Link href={'/'}>

            <Image src={logo} alt="Logo" />
          </Link>
          <div className="flex gap-10 mt-auto h-full ">


            <span className="text-neutral-400 text-sm font-normal leading-5">2024 Tábua Gaúcha. Todos os direitos reservados.</span>

            <nav className="flex gap-6 ">
              {LinksArray.map((link, i) => (
                <Link href={link.href} className="text-neutral-400 transition-all delay-300 hover:underline text-sm">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}