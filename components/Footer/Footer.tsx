import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
        Built with ❤️ by{" "}
        <Link 
          href="https://x.com/rafiwiranaa" 
          className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors duration-200 font-semibold" 
          aria-label="Visit Rafi's Twitter"
        >
          Rafi
        </Link>
      </p>
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
        &copy; {new Date().getFullYear()} Lumen.
      </p>
    </footer>
  )
}