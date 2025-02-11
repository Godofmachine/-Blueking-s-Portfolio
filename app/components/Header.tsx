"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full">
          <Link href="/" className="text-2xl font-bold text-gray-900 no-underline">
            Adham Dannaway
          </Link>
          <div className="md:hidden cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? "Close" : "Menu"}
          </div>
          <nav className={`${isNavOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-gray-900">
                  about
                </Link>
              </li>
              <li>
                <Link href="/learn-ui-design" className="text-gray-700 hover:text-gray-900">
                  learn
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-700 hover:text-gray-900">
                  portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                  blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                  contact
                </Link>
              </li>
              <li>
                <ul className="flex space-x-4 mt-4 md:mt-0">
                  <li>
                    <a
                      href="https://twitter.com/AdhamDannaway"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/adhamdannaway"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/adham.dannaway"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

