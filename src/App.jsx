import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
const App = () => {
  return (
    <>
      <main className="max-w-screen mx-0 bg-zinc-600">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
