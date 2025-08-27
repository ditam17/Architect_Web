import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header_Nav from "./Components/Header_Nav";
import Project_Section from "./Components/Project_Section";

export default function App() {
  return (
    <>
      <Header_Nav />
      <main className=" my-10 mx-8">
        <Project_Section />
        <About />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
