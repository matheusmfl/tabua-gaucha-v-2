import Image from 'next/image'
import img from '../../../public/CardCarrosel.jpeg'
import { discountCalculator } from '@/utils/discountCalculator'

interface InStockCardProps {
  title: string
  description: string
  price: number
  discountAmount?: number
  imageUrl?: string
}

const DiscountTag = ({ value }: { value: number }) => {
  return (

    <div className='py-1 px-[14px] bg-yellow-800 text-xs font-medium text-neutral-50 relative z-10 rounded-full w-fit shadow-lg'>
      <span>{value}% Desconto</span>
    </div>
  )

}

export function InStockCard({ description, price, title, discountAmount }: InStockCardProps) {
  return (
    <div className="w-[293px] h-fit flex flex-col">
      {/* Div com imagem */}
      <div className='h-[320px] w-[293px] relative rounded-md overflow-hidden px-4 py-4'>
        {discountAmount && (DiscountTag({ value: discountAmount }))}
        <Image src={img} fill className='object-cover' alt='teste' />
      </div>
      {/* div com infos */}
      <div className='px-4 flex gap-5 py-3 w-full'>
        <div className='flex flex-col gap-[2px]'>
          <h3 className='text-base font-medium leading-6 text-neutral-100'>{title}</h3>
          <h4 className='text-sm font-normal text-neutral-400 leading-5'>{description}</h4>
        </div>

        {/* Div Prices */}
        <div className='flex flex-col gap-[2px]'>
          <span className='text-base text-neutral-100 font-semibold'>
            {discountAmount ?
              (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(discountCalculator({ totalPrice: price, discount: discountAmount }) / 100))
              : (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price / 100))}
          </span>

          {discountAmount && (<span className='text-sm font-normal text-neutral-400 line-through'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price / 100)}</span>)}

        </div>
      </div>
    </div>
  )
}