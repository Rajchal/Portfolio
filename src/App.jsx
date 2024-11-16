import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";

const App = () => {
  return (
    <>
      <main className="max-w-screen mx-0">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
      </main>
    </>
  );
};

export default App;
