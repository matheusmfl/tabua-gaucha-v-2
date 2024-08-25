import { useState } from 'react'
import { Heart, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetFavorites() {
  const [open, setOpen] = useState(false)
  const [favorites, setFavorites] = useState([
    { id: 1, name: "Cruz de madeira", price: 29.99, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Tábua para churrasco", price: 59.99, image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Mesa de canto", price: 189.99, image: "/placeholder.svg?height=80&width=80" },
  ])

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id))
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative bg-transparent border-none">
          <Heart className="h-[1.2rem] w-[1.2rem]" />
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              {favorites.length}
            </span>
          )}
          <span className="sr-only">Abrir favoritos</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Seus Favoritos</SheetTitle>
          <SheetDescription>
            Itens que você marcou como favoritos
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 flex flex-col space-y-4">
          {favorites.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 border-b border-border pb-4 last:border-0">
              <div className='h-20 w-20 bg-stone-400 rounded-md flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-white' />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">R$ {item.price.toFixed(2)}</p>
              </div>
              <Button variant="ghost" className="relative bg-transparent border-none text-slate-900 shadow-none" size="icon" onClick={() => removeFavorite(item.id)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Remover dos favoritos</span>
              </Button>
            </div>
          ))}
        </div>
        {favorites.length === 0 && (
          <p className="text-center text-muted-foreground mt-6">Você não tem itens favoritos.</p>
        )}
        {favorites.length > 0 && (
          <Button className="w-full mt-6">
            Adicionar todos ao carrinho
          </Button>
        )}
      </SheetContent>
    </Sheet>
  )
}