import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              © 2025 Adham Dannaway
            </Link>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  about
                </Link>
              </li>
              <li>
                <Link href="/learn-ui-design" className="text-gray-600 hover:text-gray-900">
                  learn
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                  portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                  blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href="#top" className="text-gray-600 hover:text-gray-900">
          Back to top
        </a>
      </div>
    </footer>
  )
}

