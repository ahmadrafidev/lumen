import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="flex items-center space-x-1" href="/">
          <h1 className="text-5xl font-semibold justify-start tracking-tighter">
            Lumen
          </h1>
          <Image alt="lumen icon" src="/images/prism.png" height={40} width={40}/>
      </Link>
      <div>
        <Link  href="https://github.com/ahmadrafidev/lumen">
          <Image alt="lumen github" src="/images/github.png" height={25} width={25}/>
        </Link>
      </div>
    </header>
  )
}