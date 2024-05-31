import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <div className="container flex h-16 items-center max-w-[88rem] mx-auto">
        <div className="mr-4 hidden md:flex">
          <a
            className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
            href="/"
          >
            <div className="relative h-8 w-8 md:h-6 md:w-6 bg-black border border-slate-800  text-white   flex items-center justify-center rounded-md text-sm antialiased">
              <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
              <div className="text-sm  text-emerald-500 relative z-20">
                {/* <Image alt="Logo" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" srcset="/_next/image?url=%2Flogo.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Flogo.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Flogo.png&amp;w=128&amp;q=75"> */}
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-black dark:text-white"> Aceternity UI</h1>
            </div>
          </a>
        </div>
        <a
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:rn:"
          data-state="closed"
          href="/"
        >
          <div className="relative h-8 w-8 md:h-6 md:w-6 bg-black border border-slate-800  text-white   flex items-center justify-center rounded-md text-sm antialiased">
            <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
            <div className="text-sm  text-emerald-500 relative z-20">
              {/* <Image alt="Logo" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" srcset="/_next/image?url=%2Flogo.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Flogo.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Flogo.png&amp;w=128&amp;q=75"> */}
            </div>
          </div>
        </a>
        <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block"
            href="/components"
          >
            Components
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/pricing"
          >
            Pricing
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
          <a
            target="__blank"
            className="transition-colors hover:text-foreground/80 text-foreground/60 mr-3 text-sm font-medium"
            href="https://discord.gg/ftZbQvCdN7"
          >
            <span className="hidden sm:block">Community</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 dark:text-neutral-500 text-neutral-500 block sm:hidden"
            >
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
              <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
            </svg>
          </a>
          <a target="__blank" href="https://twitter.com/mannupaaji">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 dark:text-neutral-500 text-neutral-500"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
          <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 px-3 flex items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-moon h-4 w-4   dark:text-neutral-500 text-neutral-500"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            <span className="sr-only">Toggle theme</span>
          </button>
          <button className="sm:flex relative hidden justify-start items-center text-sm text-muted-foreground dark:border-white/[0.2] py-2 w-fit border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 rounded-xl bg-white dark:bg-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 text-neutral-500"
            >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
            <span className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium pl-2 pr-4">
              Search Components
            </span>
            <kbd className="pointer-events-none  hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
