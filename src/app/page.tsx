import Explore from "./components/ui/Explore";
import FAQSection from "./components/ui/Faq";
import Feedback from "./components/ui/Feedback";
import Hero from "./components/ui/Hero";
import Security from "./components/ui/Security";  
export default function Home() {
  return (
    <>
      <Hero />
      {/* space  */}
      <div className=" h-[10vh] sm:h-[70vh]"></div>
      <Security />
      <Feedback/>
      <Explore/>
      <FAQSection/>
    </>
  );
}
