import "./style/index.css";
import { Navbar } from "./components/navbar";
import { Layout } from "./layouts/layout";
import { Home } from "./sections/home";
import { About } from "./sections/about";
import { Habilities } from "./sections/habilities";
import { Projects } from "./sections/projects";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Home />
        <About />
        <Habilities />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
