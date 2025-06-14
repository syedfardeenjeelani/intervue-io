import Hero from "./components/ui/Hero";
import Security from "./components/ui/Security";

export default function Home() {
  return (
    <> 
    <Hero/>
    {/* space  */}
    <div className=" h-[10vh] sm:h-[70vh]"></div>
    <Security/>
    </>
  );
}
