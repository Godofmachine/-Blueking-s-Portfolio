"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Face() {
  const faceRef = useRef<HTMLDivElement>(null)
  const designerRef = useRef<HTMLDivElement>(null)
  const coderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const designer = designerRef.current
    const coder = coderRef.current

    if (designer && coder) {
      designer.addEventListener("mouseenter", () => {
        designer.style.width = "100%"
        coder.style.width = "50%"
        designer.style.zIndex = "5"
        coder.style.opacity = "2%"
        designer.style.transition = "all 1s ease-in-out"
        coder.style.transition = "all 1s ease-in-out"
      })

      designer.addEventListener("mouseleave", () => {
        designer.style.width = "50%"
        coder.style.width = "50%"
        designer.style.zIndex = "1"
        coder.style.opacity = "100%"
        designer.style.transition = "all 1s ease-in-out"
        coder.style.transition = "all 1s ease-in-out"
      })

      coder.addEventListener("mouseenter", () => {
        coder.style.width = "100%"
        designer.style.width = "50%"
        coder.style.zIndex = "5"
        designer.style.opacity = "2%"
        designer.style.transition = "all 1s ease-in-out"
        coder.style.transition = "all 1s ease-in-out"
      })

      coder.addEventListener("mouseleave", () => {
        coder.style.width = "50%"
        designer.style.width = "50%"
        coder.style.zIndex = "1"
        designer.style.opacity = "100%"
        designer.style.transition = "all 1s ease-in-out"
        coder.style.transition = "all 1s ease-in-out"
      })
    }

    return () => {
      if (designer && coder) {
        designer.removeEventListener("mouseenter", () => {})
        designer.removeEventListener("mouseleave", () => {})
        coder.removeEventListener("mouseenter", () => {})
        coder.removeEventListener("mouseleave", () => {})
      }
    }
  }, [])

  return (
    <div ref={faceRef} className="relative flex flex-nowrap w-[100vw] h-[99vh] overflow-y-clip ">
      <Link href="/portfolio">
        <div
          ref={designerRef}
          className="absolute left-0 w-[50vw] h-full overflow-hidden bg-opacity-10 bg-transparent flex flex-col items-center justify-center"
        >
          <div className="p-8 left-10  absolute flex z-5">
          <div className="">
            <h1 className="text-6xl font-bold mb-4">designer</h1>
            <p className="text-md w-72">Graphic designer specialising in Flyers and Logo designs.</p>
          </div>
          <div className="px-40 overflow-y-clip h-full">
            <Image src="/images/designer.png" alt="Designer Portrait"  className="absolute w-full" width={600} height={600}  />
          </div>
          </div>
         
        </div>
      </Link>
      <Link href="/about">
        <div
          ref={coderRef}
          className="absolute right-0 w-[50vw] h-full overflow-hidden bg-opacity-5 bg-transparent flex flex-col items-center justify-center"
        >
          <div className="p-8 right-10 absolute flex flex-row z-5">
         
           <div className="text-right">
            <h1 className="text-6xl font-bold mb-4">
              <span className="mr-1">&lt;</span>coder/<span className="ml-1">&gt;</span>
            </h1>
            <p className="text-md  mr-5 w-72">Front end developer who writes clean, elegant and efficient code.</p>
            </div>
            <div className="px-40 w-full h-full">
            <Image src="/images/coder.png" alt="Coder Portrait"  className="absolute left-0 right-full w-full" width={600} height={600}/>
           </div>
          </div>
        
        </div>
      </Link>
    </div>
  )
}

