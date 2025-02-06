import { title } from "@/components/primitives";
import Link from "next/link";

export default function AboutPage() {
  return (
 <div className="bg-white">
 <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#4CAF50] to-[#388E3C] px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl magic-text-gradient">
        Empowering Farmers with Smart Livestock Management
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-100">
        Our mission is to provide Nigerian farmers with a user-friendly, technology-driven solution that simplifies livestock management, enhances productivity, and delivers actionable insights.
      </p>
    </div>
  </div>

  <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl magic-text-gradient">
        Our Mission
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        We are dedicated to revolutionizing livestock management by integrating advanced technology with local farming practices. Our goal is to help farmers achieve higher productivity, better herd health, and improved financial outcomes.
      </p>
    </div>
  </div>

  <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl magic-text-gradient">
        What We Offer
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Our livestock management app is packed with features designed to meet the unique needs of Nigerian farmers.
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            <div className="flex flex-col items-center text-center">
          <img
            src="https://placehold.co/400x300.png?text=Herd+Management"
            alt="Herd Management"
            className="rounded-lg shadow-lg"
          />
          <h3 className="mt-6 text-xl font-semibold text-gray-900">Herd Management</h3>
          <p className="mt-2 text-gray-600">
            Track and manage your livestock with unique identification and comprehensive profiles.
          </p>
        </div>

            <div className="flex flex-col items-center text-center">
          <img
            src="https://placehold.co/400x300.png?text=Health+Monitoring"
            alt="Health Monitoring"
            className="rounded-lg shadow-lg"
          />
          <h3 className="mt-6 text-xl font-semibold text-gray-900">Health Monitoring</h3>
          <p className="mt-2 text-gray-600">
            Real-time health tracking and automated alerts for vaccinations and emergencies.
          </p>
        </div>
 
        <div className="flex flex-col items-center text-center">
          <img
            src="https://placehold.co/400x300.png?text=Financial+Insights"
            alt="Financial Insights"
            className="rounded-lg shadow-lg"
          />
          <h3 className="mt-6 text-xl font-semibold text-gray-900">Financial Insights</h3>
          <p className="mt-2 text-gray-600">
            Track income, expenses, and profitability with integrated payment systems.
          </p>
        </div>
      </div>
    </div>
  </div>


  <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl magic-text-gradient">
        Meet Our Team
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Our team of agricultural and tech experts is dedicated to helping you succeed. We combine local farming knowledge with global technology standards to deliver the best solutions.
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
 
        <div className="flex flex-col items-center text-center">
          <img
            src="https://placehold.co/400x400.png?text=Team+Member+1"
            alt="Team Member 1"
            className="rounded-full h-48 w-48 object-cover shadow-lg"
          />
          <h3 className="mt-6 text-xl font-semibold text-gray-900">John Doe</h3>
          <p className="mt-2 text-gray-600">Agricultural Specialist</p>
        </div>
   
        <div className="flex flex-col items-center text-center">
          <img
            src="https://placehold.co/400x400.png?text=Team+Member+2"
            alt="Team Member 2"
            className="rounded-full h-48 w-48 object-cover shadow-lg"
          />
          <h3 className="mt-6 text-xl font-semibold text-gray-900">Jane Smith</h3>
          <p className="mt-2 text-gray-600">Tech Lead</p>
        </div>
  
        <div className="flex flex-col items-center text-center">
          <img
            src="https://placehold.co/400x400.png?text=Team+Member+3"
            alt="Team Member 3"
            className="rounded-full h-48 w-48 object-cover shadow-lg"
          />
          <h3 className="mt-6 text-xl font-semibold text-gray-900">Mike Johnson</h3>
          <p className="mt-2 text-gray-600">Data Analyst</p>
        </div>
      </div>
    </div>
  </div>

  <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#4CAF50] to-[#388E3C] px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl magic-text-gradient">
        Ready to Transform Your Farm?
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-100">
        Join the waitlist today and be the first to experience the future of livestock management.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="#"
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#4CAF50] shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Join the Waitlist
        </Link>
        <Link href="#" className="text-sm/6 font-semibold text-white">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </div>
</div>
  );
}
