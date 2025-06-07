import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="flex items-center space-x-1 group" href="/">
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100 bg-clip-text text-transparent tracking-tighter group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-blue-600 dark:group-hover:from-blue-400 dark:group-hover:via-purple-400 dark:group-hover:to-blue-400 transition-all duration-200">
          Lumen
        </h1>
        <div className="relative">
          <Image 
            alt="lumen icon" 
            src="/images/prism.png" 
            height={30} 
            width={30}
            className="group-hover:scale-110 transition-transform duration-200"
          />
        </div>
      </Link>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <Link 
          href="https://github.com/ahmadrafidev/lumen"
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 group"
          aria-label="View on GitHub"
        >
          <Image 
            alt="GitHub repository" 
            src="/images/github.png" 
            height={24} 
            width={24}
            className="group-hover:scale-110 transition-transform duration-200 dark:invert"
          />
        </Link>
      </div>
    </header>
  )
}