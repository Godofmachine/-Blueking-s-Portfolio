"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, Twitter } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className=" w-full px-16 py-2 md:block">
        <div className="mx-auto flex max-w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm text-gray-600">info@domain.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm text-gray-600">+1 234 4567 8910</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={` left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-amber-50 fixed top-0 shadow-md border-b" : "bg-transparent md:bg-blue border-b"
        }`}
      >
        <div className="mx-auto flex max-w-full items-center justify-between px-16 py-4">
          <Link href="/" className="text-xl font-bold flex flex-nowrap items-center h-10 w-10">
            <img src="./favicon.ico" className=""/>
            <p className="text-blue-900 ms-5">Blueking</p>
          </Link>

          {/* Desktop navigation */}
          <NavigationMenu className="hidden md:flex ml-auto px-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="flex bg-blue-900 text-white">Download Resume</Button>


          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <>
                <nav className="flex flex-col gap-4">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    About
                  </Link>

                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </nav>
              </>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="h-[72px]" />
    </header>
  )
}

