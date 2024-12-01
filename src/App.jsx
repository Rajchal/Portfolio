import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <main className="max-w-screen mx-0">
      <Helmet>
        <title>Anjal Rajchal - Portfolio</title>
        <meta
          name="description"
          content="Welcome to Anjal Rajchal's portfolio. Explore my projects, experience, and get in touch to learn more about my work and skills."
        />
        <meta
          name="keywords"
          content="Anjal Rajchal, portfolio, projects, experience, contact,Rajchal ,rajchal, anjal, rajchalanjal, anjalrajchal, anjal rajchal"
        />
        <link rel="canonical" href="https://www.rajchal.me" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
