import Image from "next/image"
import Link from "next/link"

const works = [
  {
    href: "/portfolio/ui-design-book",
    imgSrc: "/images/feature-ui-design-book.jpg",
    imgAlt: "UI design book",
    title: "My UI design book",
    category: "Book",
  },
  {
    href: "/portfolio/creating-a-lean-design-system",
    imgSrc: "/images/feature-william-hill-design-system.jpg",
    imgAlt: "William Hill design system",
    title: "Creating a lean design system",
    category: "Design system",
  },
  {
    href: "/portfolio/interior-design-news-feed",
    imgSrc: "/images/feature-interior-design-news-feed-2.jpg",
    imgAlt: "Interior design news feed",
    title: "Interior design news feed",
    category: "Side project",
  },
]

export default function LatestWork() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">Some of my latest work</h3>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <li key={index} className="group">
            <Link href={work.href} className="block">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={work.imgSrc || "/placeholder.svg"}
                  alt={work.imgAlt}
                  width={628}
                  height={369}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/60 to-transparent text-white">
                  <h4 className="text-xl font-bold mb-2">{work.title}</h4>
                  <p>{work.category}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

