import Image from 'next/image'
import bg from '../../public/FormBg.png'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export function FormSection() {
  return (
    <section className="grid grid-cols-2 bg-neutral-100">
      {/* Left div */}
      <div className="relative py-20 h-[598px]">
        <Image src={bg} alt='Bg form image' fill className='object-cover' />
        <div className="flex flex-col gap-2 relative z-10 px-[120px]">
          <h2 className="text-[40px] text-neutral-400 font-semibold leading-[48px]">Podemos <strong className="text-stone-100 font-semibold">te ajudar?</strong></h2>
          <div className="bg-yellow-400 h-2 w-[120px]" />
          <span className="mt-1 text-neutral-200 text-base font-medium max-w-[323px]">Sinta-se a vontade para nos enviar uma mensagem</span>
        </div>
      </div>

      {/* Right div */}
      <div className='py-20 pl-12 pr-[120px] flex'>
        <div className='flex flex-col gap-3 w-full'>
          <span className='text-xl text-stone-500 font-semibold leading-6 mb-1'>Dados</span>

          <Input placeholder='Nome' />
          <Input placeholder='Telefone' />
          <Input placeholder='E-mail' />
          <Textarea placeholder='Conteúdo da mensagem' />
          <Button className="group w-fit px-11 flex gap-1">
            Enviar uma mensagem <span className="ml-2 transition-transform duration-300 group-hover:animate-pulse">&gt;</span>
          </Button>

        </div>

      </div>
    </section>
  )
}