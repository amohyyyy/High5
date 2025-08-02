import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { UserNav } from "./user-nav"

export default function Header() {
  const navLinks = [
    { href: "/", label: "الدورات" },
    { href: "/dashboard", label: "لوحة التحكم" },
    { href: "/recommendations", label: "توصيات الذكاء الاصطناعي" },
    { href: "/admin", label: "الإدارة" },
  ]
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="ml-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              High5
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map(link => (
                 <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                 >
                    {link.label}
                 </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">تبديل القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
          <SheetHeader className="text-right">
            <SheetTitle>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Icons.logo className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">
                    High5
                    </span>
                </Link>
            </SheetTitle>
            <SheetDescription>
                تنقل في التطبيق من هنا.
            </SheetDescription>
          </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6 pr-2">
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-sm">{link.label}</Link>
                ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
