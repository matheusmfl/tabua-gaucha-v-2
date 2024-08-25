import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetNotification() {
  const [open, setOpen] = useState(false)

  // Simulated notifications
  const notifications = [
    { id: 1, title: "Nova mensagem", description: "Você recebeu uma nova mensagem de Tábua Gaúcha.", time: "5 min atrás" },
    { id: 2, title: "Imperdível", description: "Promoção de dia dos pais, confira!", time: "1 hora atrás" },
    { id: 3, title: "Reposição de estoque", description: "Novas tábuas para churrasco feitas para você!", time: "3 horas atrás" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative bg-transparent border-none">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          <span className="sr-only">Abrir notificações</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Notificações</SheetTitle>
          <SheetDescription>
            Suas notificações recentes
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 flex flex-col space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex flex-col space-y-1 cursor-pointer hover:bg-slate-200 pt-1 pl-1 border-b border-border pb-4 last:border-0">
              <h3 className="text-sm font-medium">{notification.title}</h3>
              <p className="text-sm text-muted-foreground">{notification.description}</p>
              <span className="text-xs text-muted-foreground">{notification.time}</span>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}