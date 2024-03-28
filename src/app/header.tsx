'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import Brain from '@/public/favicon/android-chrome-512x512.png'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigationItems = [
  { title: 'About us', path: 'https://github.com/hallucinationguys' },
]

const Header = () => {
  return (
    <div className="w-full mobile:flex justify-center items-center">
      <div className="tablet:w-[40rem] desktop:w-[50rem] mobile:flex justify-between items-center mt-8 ">
        <div className="flex flex-wrap tablet:inline-block tablet:mr-12 justify-center">
          <Link className="flex flex-row items-center" href="/">
            <Image
              alt="Picture of the Hallucination Guys "
              className="w-[60px] h-[60px] mr-2 rounded-full object-cover object-center bg-transparent"
              src={Brain}
            />
            <p className="text-xl font-bold whitespace-nowrap">
              Hallucination Guys
            </p>
          </Link>
        </div>

        <div className="flex-wrap tablet:inline-block tablet:ml-12 hidden mobile:flex">
          <nav className="flex flex-row justify-center items-center">
            <ThemeMenu />
            <div className="items-center px-4">
              <ul className="flex flex-row whitespace-nowrap">
                {navigationItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-700  hover:underline mx-2 "
                  >
                    <Link
                      className="text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-700"
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ThemeMenu() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-white text-black" asChild>
        <Button className="bg-transparent" size="icon" variant="outline">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white text-black">
        <DropdownMenuItem
          className="hover:bg-gray-200 font-semibold"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-gray-200 font-semibold"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-gray-200 font-semibold"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Header
