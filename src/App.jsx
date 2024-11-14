import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";

const App = () => {
  return (
    <>
      <main className="max-w-screen mx-0">
        <Navbar />
        <Hero />
        <About />
      </main>
    </>
  );
};

export default App;
