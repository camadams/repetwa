"use client";
import Image from "next/image";
import NavBar from "./navbar";
import { PT_Mono } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import localFont from "next/dist/compiled/@next/font/dist/local";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// const myFont = localFont({
//   src: [{ path: "../../public/shinAkibapunx.ttf", weight: "700" }],
// });

// const myFont = localFont({
//   src: [{ path: "../../public/shinAkibapunx.ttf", weight: "700" }],
// });

const accessoriesArr = [
  {
    title: "Cellphone Pouch",
    description:
      "Objects of desire, fashioned with ingenuity and a touch of flamboyance",
    src: "/10.png",
  },
  {
    title: "Mini Bag",
    description:
      "Opulence at its finest, stunning leather pieces that are a class apart.",
    src: "/11.png",
  },
  {
    title: "Chain",
    description:
      "Drawing from the wisdom of nature, every item harmonizes beauty and graceDrawing from the wisdom of nature, every item har",
    src: "/12.png",
  },
];

const clothingArr = [
  {
    title: "Pants",
    description:
      "Objects of desire, fashioned with ingenuity and a touch of flamboyance",
    src: "/13.png",
  },
  // {
  //   title: "T-Shirt",
  //   description:
  //     "Opulence at its finest, stunning leather pieces that are a class apart.",
  //   src: "/13.png",
  // },
  // {
  //   title: "Chain",
  //   description:
  //     "Drawing from the wisdom of nature, every item harmonizes beauty and graceDrawing from the wisdom of nature, every item har",
  //   src: "https://picsum.photos/200",
  // },
];

const navBarItems = [
  { name: "Accessories", id: "accessories" },
  { name: "Clothing", id: "clothing" },
  { name: "About", id: "about" },
  { name: "Gallery", id: "about" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

const monoFont = PT_Mono({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSideBar = () => setIsOpen((prev) => (prev = !prev));

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div
        className={`fixed pt-3 inset-y-0 left-0 w-64 transform transition-transform duration-300 z-50 bg-primary ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSideBar}
          className="text-5xl text-slate-300 p-4 focus:outline-none "
        >
          &times;
        </button>
        <ul className="flex flex-col space-y-4 p-4">
          {
            <>
              <div className="flex flex-col gap-3">
                {navBarItems?.map((item, i) => (
                  // <div key={i}> {item.name}</div>
                  <li className="hover:underline rounded-lg p-1" key={i}>
                    <a
                      href={`#${item.id}`}
                      className="text-blue-500"
                      onClick={toggleSideBar}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>
            </>
          }
        </ul>
      </div>
      {/* overlay for clicking out of nav side panel */}
      <div
        className={`fixed inset-0 bg-gray-800/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSideBar}
      ></div>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav
        className={`z-10 fixed w-full transition-transform duration-300  ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* <div className="p-4 flex items-center bg-primary/70 justify-center">
          <button
            onClick={toggleSideBar}
            className="text-3xl absolute left-4 text-slate-300"
          >
            &#9776;
          </button>
          <p className={`text-6xl font-shinAkibapunx   text-slate-300`}>
            REPETWA
          </p>
        </div> */}
      </nav>
      <section className="h-[100vh] relative">
        <Image className="object-cover" src="/upscale.png" alt="hero" fill />
        <div className="hidden sm:block">
          <Image
            className=" absolute bottom-0 z-100"
            src="/ta.png"
            alt="flame"
            width={400}
            height={100}
          />
          <Image
            className=" absolute right-0 bottom-0 z-100"
            src="/ta.png"
            alt="flame"
            width={400}
            height={100}
          />
        </div>
        <div className="flex font-serif justify-end absolute flex-col items-center w-full h-1/3">
          <p className={`text-2xl text-primary animate-in`}>
            A Bunch of Cool Sh*t
          </p>
          <div className="p-4" />
          <button
            onClick={() => scrollToSection("accessories")}
            className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-red-500  to-yellow-500 bg-[length:400%_400%] p-1"
          >
            <span className="block rounded-full px-4 py-1 bg-primary text-slate-200 text-lg ">
              Take a Look
            </span>
          </button>
        </div>

        <div className="absolute bottom-0 h-4 w-full bg-gradient-to-b from-transparent to-primary" />
      </section>

      <section
        id="accessories"
        className={`bg-primary relative p-8 font-serif`}
      >
        <h1
          className={`text-[min(70px,10vw)] text-center mx-auto text-slate-200 pt-2`}
        >
          Accessories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-6 ">
          {
            <>
              {accessoriesArr?.map((accessory, i) => (
                <GridElement
                  key={i}
                  src={accessory.src}
                  description={accessory.description}
                  title={accessory.title}
                />
              ))}
            </>
          }
          {/* <GridEle />
          <GridEle />
          <GridEle /> */}
        </div>
      </section>
      <section id="clothing" className={`bg-primary relative p-8 font-serif`}>
        <h1
          className={`text-[min(70px,10vw)] text-center mx-auto text-slate-200 pt-4`}
        >
          Clothing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-12 ">
          {
            <>
              {clothingArr?.map((clothing, i) => (
                <GridElement
                  key={i}
                  src={clothing.src}
                  description={clothing.description}
                  title={clothing.title}
                />
              ))}
            </>
          }
        </div>
      </section>

      <section
        id="about"
        className={`bg-primary/90 h-[66vh] flex items-center justify-center relative p-8 font-serif`}
      >
        <div>
          <div className="flex items-center justify-center">
            <h1 className={`text-6xl tracking-tighter text-blue-500 pt-12`}>
              The Reputation
            </h1>
          </div>
          <p className="text-slate-200 text-lg lg:px-32 py-6">
            Liesl creates leather and metal adornments. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iste quasi ipsa, ex molestias
            reiciendis recusandae corrupti. Labore iste vel ullam.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href={"/gallery"}
              className="bg-blue-500 px-4 py-2 rounded-lg font-bold hover:bg-accent/80  "
            >
              See Gallery
            </Link>
          </div>
        </div>
      </section>
      <section
        className={`bg-primary  relative sm:px-40 sm:py-28 p-8 font-serif`}
      >
        <h1
          id="faq"
          className={`text-[min(70px,10vw)] mx-auto text-slate-200 pt-12`}
        >
          FAQ
        </h1>
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How long will delivery take after ordering?
            </AccordionTrigger>
            <AccordionContent>5-7 business days</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How to care for the leather adornments?
            </AccordionTrigger>
            <AccordionContent>
              Handle with love. Use a clean, dry cloth for an occasional gentle
              wipe. Keep away from direct sunlight and moist environments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can we request customizations on pre-designed items?
            </AccordionTrigger>
            <AccordionContent>
              Of course! Make it truly yours. We welcome individual artistic
              expressions. Let’s create together.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section
        id="contact"
        className={`bg-primary/90 relative sm:px-40 sm:py-28 p-8 font-serif`}
      >
        <h1 className={`text-[min(40px,10vw)] mx-auto text-slate-200 pt-4`}>
          Send me an Email
        </h1>
        <textarea
          className="w-full bg-slate-200 rounded-xl p-2"
          placeholder="Type a message..."
        ></textarea>
        <button className="bg-blue-500 rounded-lg px-4 p1-2 text-slate-200">
          Send Email
        </button>
      </section>
      <section className="p-8 bg-slate-900 text-slate-500">
        <p>Made with love by camthehuman.com</p>
      </section>
    </main>
  );
}

const GridEle = ({
  title,
  src,
  description,
}: {
  title: string;
  src: string;
  description?: string;
}) => {
  return (
    <div className="relative h-full">
      <div className="relative pb-[100%] h-1/2">
        <Image
          alt="hi"
          src={src}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
          placeholder="empty"
        />
      </div>
      <h1 className="text-4xl text-secondary mt-6">{title}</h1>
      <p className="text-xl text-slate-200">{description}</p>
    </div>
  );
};

interface GridItemProps {
  src: string;
  title: string;
  description: string;
}

const GridItem: React.FC<GridItemProps> = ({ src, title, description }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="relative w-full pb-[100%]">
        <Image
          src={src}
          alt="hi"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

const GridElement: React.FC<GridItemProps> = ({ src, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl shadow-blue-800">
      <Image
        alt="Grid Item 1"
        className="w-full h-96 object-cover"
        height={400}
        src={src}
        style={{}}
        width={400}
      />
      <div className="p-4">
        <h3 className="text-4xl text-blue-500 mt-6">{title}</h3>
        <p className="text-xl text-slate-200">{description}</p>
      </div>
    </div>
  );
};
