"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Face() {
  const faceRef = useRef<HTMLDivElement>(null)
  const designerRef = useRef<HTMLDivElement>(null)
  const coderRef = useRef<HTMLDivElement>(null)
  const imageRef3 = useRef<HTMLDivElement>(null)
  const imageRef2 = useRef<HTMLDivElement>(null)
  const imageRef1 = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const designer = designerRef.current;
    const coder = coderRef.current;
    const imageThree = imageRef3.current;
    const imageTwo = imageRef2.current;
    const imageOne = imageRef1.current;

  
    if (designer && coder && imageOne && imageTwo && imageThree) {
      const handleDesignerEnter = () => {
        designer.style.width = "100%";
        coder.style.width = "50%";
        designer.style.zIndex = "5";
        coder.style.opacity = "2%";
        imageOne.style.opacity = "0%";
        imageTwo.style.opacity = "0%";
        designer.style.transition = "all 1s ease-in-out";
        coder.style.transition = "all 1s ease-in-out";
        imageOne.style.transition = "all 2s ease-in-out";
        imageTwo.style.transition = "all 2s ease-in-out";
      };
  
      const handleDesignerLeave = () => {
        designer.style.width = "50%";
        coder.style.width = "50%";
        designer.style.zIndex = "1";
        coder.style.opacity = "100%";
        imageOne.style.opacity = "100%";
        imageTwo.style.opacity = "100%";
        designer.style.transition = "all 1s ease-in-out";
        coder.style.transition = "all 1s ease-in-out";
        imageOne.style.transition = "all 2s ease-in-out";
        imageTwo.style.transition = "all 2s ease-in-out";
      };
  
      const handleCoderEnter = () => {
        coder.style.width = "100%";
        designer.style.width = "50%";
        coder.style.zIndex = "5";
        designer.style.opacity = "2%";
        imageOne.style.opacity = "0%"; // Fix here
        imageThree.style.opacity = "0%"; // Fix here
        designer.style.transition = "all 1s ease-in-out";
        coder.style.transition = "all 1s ease-in-out";
        imageOne.style.transition = "all 2s ease-in-out";
        imageThree.style.transition = "all 2s ease-in-out";
      };
  
      const handleCoderLeave = () => {
        coder.style.width = "50%";
        designer.style.width = "50%";
        coder.style.zIndex = "1";
        designer.style.opacity = "100%";
        imageOne.style.opacity = "100%";
        imageThree.style.opacity = "100%";
        designer.style.transition = "all 1s ease-in-out";
        coder.style.transition = "all 1s ease-in-out";
        imageOne.style.transition = "all 2s ease-in-out";
        imageThree.style.transition = "all 2s ease-in-out";
      };
  
      designer.addEventListener("mouseenter", handleDesignerEnter);
      designer.addEventListener("mouseleave", handleDesignerLeave);
      coder.addEventListener("mouseenter", handleCoderEnter);
      coder.addEventListener("mouseleave", handleCoderLeave);
  
      return () => {
        designer.removeEventListener("mouseenter", handleDesignerEnter);
        designer.removeEventListener("mouseleave", handleDesignerLeave);
        coder.removeEventListener("mouseenter", handleCoderEnter);
        coder.removeEventListener("mouseleave", handleCoderLeave);
      };
    }
  }, []);
  

  return (
    <div ref={faceRef} className="relative flex justify-center w-[100vw] h-[35vh] min-[450px]:h-[40vh] min-[500px]:h-[50vh] sm:h-[55vh] md:h-[70vh] lg:h-[99vh] overflow-y-clip">
      <Link href="/#">
        <div
          ref={designerRef}
          className="absolute left-0 w-[50vw] h-full overflow-hidden bg-opacity-10 bg-transparent pb-10 flex flex-col items-center justify-center"
        >
          <div className="min-[560px]:p-4 md:p-2 lg:p-8 left-6 sm:left-8 md:left-10 absolute flex z-5">
            <div className="">
              <h1 className="text-xl min-[340px]:text-2xl min-[450px]:text-3xl sm:text-4xl lg:text-4xl xl:text-7xl font-bold mb-2 sm:mb-4">designer</h1>
              <p className="font-medium text-xs md:text-xs lg:text-sm xl:text-md w-36 max-md:hidden sm:w-36 md:w-48 lg:w-72">Graphic designer specialising in Flyers and Logo designs.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/#">
        <div
          ref={coderRef}
          className="absolute right-0 w-[50vw] h-full overflow-hidden bg-opacity-5 bg-transparent flex items-center justify-center"
        >
          <div className="min-[560px]:p-4 md:p-2 lg:p-8 right-6 sm:right-8 md:right-10 absolute pb-10 flex z-5">
            <div className="text-right">
              <h1 className="text-xl min-[340px]:text-2xl min-[450px]:text-3xl sm:text-4xl lg:text-4xl xl:text-7xl font-bold mb-2 sm:mb-4">
                <span className="">&lt;</span>coder/<span className="">&gt;</span>
              </h1>
              <p className="font-medium text-xs md:text-xs lg:text-sm xl:text-md max-md:hidden sm:w-36 lg:w-72">Front end developer who writes clean, elegant and efficient code.</p>
            </div>
          </div>
        </div>
      </Link>
      <div className=" max-[360px]:mr-18 max-[560px]:mr-10 max-[600px]:pl-6 w-1/2 sm:pl-12 md:pl-5 lg:pl-0 lg:pr-10 ">
        <div ref={imageRef3} className="w-1/2 overflow-hidden">
          <img  src="/images/designer.png" alt="Designer Portrait" className="absolute bottom-0 w-[180px] min-[450px]:w-[230px] min-[500px]:w-[250px] md:w-[380px] lg:w-[500px] xl:w-[700px]"  />
        </div>
        <div ref={imageRef2} className="w-1/2 overflow-hidden">
          <img src="/images/coder.png" alt="Coder Portrait" className=" absolute bottom-0 w-[180px] min-[450px]:w-[230px] min-[500px]:w-[250px] md:w-[380px] lg:w-[500px] xl:w-[700px]"  />
        </div>
        <div ref={imageRef1} className="w-1/2 overflow-hidden">
          <img src="/images/designer-coder.png" alt="Designer-Coder Portrait" className="absolute bottom-0 w-[180px] min-[450px]:w-[230px] min-[500px]:w-[250px] md:w-[380px] lg:w-[500px] xl:w-[700px]"  />
        </div>
      </div>
    </div>
  )
}

