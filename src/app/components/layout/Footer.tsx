"use client";
import { 
  ArrowUpRight, 
} from "lucide-react";

const footerLinks = [
  {
    heading: "Company",
    links: ["So gehts", "Erfahrung", "Aligner", "Preise", "Standorte"],
  },
  {
    heading: "Resources",
    links: ["Blog", "FAQ", "Lift Media", "Offene Stellen", "Presse kit"],
  },
  {
    heading: "Productct",
    links: ["Gratis Termin", "Freunde einladen", "Patienteninforma"],
  },
  {
    heading: "Product",
    links: ["Blog", "FAQ", "Lift Media", "Offene Stellen", "Presse kit"],
  },
];

const bottomLinks = ["Datenschutz", "Impressum", "Cookie Policy", "AGBs"];

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white py-12 px-4 md:px-[8rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 flex flex-col gap-[48px] space-y-8">
          <div>
            <div className="text-3xl font-bold mb-3">
              <img
                src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/648175fc7332de3fb931061a_intervue.svg"
                alt=""
              />
            </div>
            <div className="flex gap-4 text-sm text-neutral-400">
              {["Facebook", "Instagram", "Linkedin", "Pinterest"].map(
                (item) => (
                  <a key={item} href="#" className="hover:text-white">
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-[#FEC84B] font-semibold mb-2">
              Hire better & faster
            </h3>
            <div className="flex items-center border-b border-neutral-500 pb-2">
              <input
                placeholder="Enter your email address"
                className="bg-transparent text-sm w-full focus:outline-none placeholder:text-neutral-400"
              />
              <ArrowUpRight className="w-8 h-8 text-[#FEC84B]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[20px]  ml-0 lg:ml-[50px] lg:gap-[100px] mt-[43px] ">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold mb-3 text-sm text-white">
                {col.heading}
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-neutral-800 pt-6 md:flex md:justify-between md:items-center text-sm text-neutral-400">
        <p>© 2023 Intervue. Crafted by great minds.</p>
        <div className="flex gap-6 mt-4 md:mt-0 flex-wrap">
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="hover:text-white">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
