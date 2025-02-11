"use client"

import { useEffect } from "react"
import Header from "./components/Header"
import Face from "./components/Face"
import LatestWork from "./components/LatestWork"
import Footer from "./components/Footer"
import Script from "next/script"

export default function Home() {
  useEffect(() => {
    // Simulate the jPreLoader effect
    const timer = setTimeout(() => {
      document.body.classList.add("loaded")
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="clearfix bg-[#c5c7dc]">
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MJFDYEXZZN');
          `,
        }}
      />
      <Script
        id="facebook-sdk"
        strategy="afterInteractive"
        src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=227683463924663"
      />
      <div id="content" className="content clearfix home">
        <section id="section" className="light nopad-t nopad-b">
          <div className="row">
            <div className="col-12">
              <Face />
            </div>
          </div>
        </section>
        
      </div>
      {/* <Footer /> */}
    </div>
  )
}

