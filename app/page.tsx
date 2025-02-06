import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import hero from "@/assets/images/hero-1.jpg"
        import {
          ArrowPathIcon,
          CloudArrowUpIcon,
          FingerPrintIcon,
          LockClosedIcon,
        } from "@heroicons/react/24/outline";
import { AnimatedGradientText } from "@/components/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

        const features = [
          {
            name: "Herd Management",
            description:
              "Track and manage your livestock with unique identification and comprehensive profile.",
            icon: CloudArrowUpIcon,
          },
          {
            name: "Health Monitoring",
            description:
              "Real-time health tracking and automated alerts for vaccinations and emergencies.",
            icon: LockClosedIcon,
          },
          {
            name: "Breeding Management",
            description:
              "Optimize reproduction with mating schedules, pregnancy tracking, and automated reminders.",
            icon: ArrowPathIcon,
          },
          {
            name: "Financial Insights",
            description:
              "Track income, expenses, and profitability with integrated payment systems.",
            icon: FingerPrintIcon,
          },
          {
            name: "Environmental Monitoring",
            description:
              "Monitor barn conditions, pasture quality, and weather data for better decision-making.",
            icon: FingerPrintIcon,
          },
        ];

        



export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        <div className="inline-block max-w-xl flex-1">
          <span className={title()}>Revolutionize Your&nbsp; </span>
          <span className={title({ color: "green" })}>
            Livestock Management&nbsp;
          </span>
          <br />
          <span className={title()}>with Cutting-Edge Technology</span>
          <div className={subtitle({ class: "mt-4" })}>
            Streamline operations, boost productivity, and make data-driven
            decisions with our custom livestock management application designed
            for Nigerian farmers.
          </div>
          <div className="flex gap-3 mt-6">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}>
              Join waitlist
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}>
              <GithubIcon size={20} />
              Learn more
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image src={hero} alt="Hero" className="rounded-lg" />
        </div>
      </div>

      <div className="py-10 md:py-20 lg:py-30">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}>
                  Key Features
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                Enjoy these features when you use our product
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900">
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white w-full">
        <div className="mx-auto w-full">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Transform Your Livestock Management Today
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Streamline your farm operations, monitor herd health, and make
                data-driven decisions with our cutting-edge livestock management
                app.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Join the Waitlist
                </Link>
                <Link href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white w-full">
        <div className="mx-auto w-full py-24 sm:px-6">
          <div className="relative isolate overflow-hidden bg-[#4CAF50] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#4CAF50" />
                  <stop offset={1} stopColor="#388E3C" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Transform Your Livestock Management Today
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-100">
                Streamline your farm operations, monitor herd health, and make
                data-driven decisions with our cutting-edge livestock management
                app.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#4CAF50] shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Join the Waitlist
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}




  

