import "./style/index.css";
import { Navbar } from "./components/navbar";
import { Layout } from "./layouts/layout";
import { Home } from "./sections/home";
import { About } from "./sections/about";
import { Habilities } from "./sections/habilities";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Home />
        <About />
        <Habilities />
      </Layout>
    </>
  );
}

export default App;
