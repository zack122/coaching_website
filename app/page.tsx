import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
 return (
<main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width flex items-center justify-center flex-col" id="discover">
        <div className="home__text-container flex flex-col items-center text-center">
          <Image src="/quotation.svg" alt="quotation" width={50} height={50} />
          <h1 className="text-4xl font-extrabold mt-4">Discover the best climbing experience</h1>
          <p className="mt-4 max-w-prose">
            As a climbing coach, my primary focus is to empower and guide athletes on their journey to mastering the art of climbing. I work with individuals of varying skill levels, from beginners eager to conquer their first wall to seasoned climbers aiming to refine their technique and push their limits. Here are some of the world class climbers I’ve coached:
          </p>
          <div className="home__image-container mt-4">
            {/* Add any additional content here */}
          </div>
        </div>
      </div>
    </main>
  );
}