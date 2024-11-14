import Link from "next/link"

export function Footer() {
  return (
    <footer className="container max-w-5xl mx-auto p-4 flex items-center justify-between fixed bottom-0 left-0 right-0">
      <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">
        Built by{" "}
        <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">
          Rafi
        </Link>
        .
      </p>
      <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Lumen.
      </p>
    </footer>
  )
}