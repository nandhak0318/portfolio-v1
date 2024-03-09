import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import PulpFictionAnimation from "./ui/PulpFictionAnimation";

export default function ContentSection(){

  return (
    <>
    <main className="pt-24 lg:w-1/2 lg:py-24">
    <About/>
    <Experience/>
    <Projects/>
    <footer className="flex justify-between">
      <h5 className="aachen-bold text-7xl">NOW HIRE ME!</h5>
      <PulpFictionAnimation/>
    </footer>
    </main>
    </>
  );
}