import { SpeedInsights } from "@vercel/speed-insights/react";
import Main from "./sections/main";
import Navigation from "./sections/navigation";
import Experience from "./sections/experience";
import Skills from "./sections/skills/index";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Experience />
      <Skills />
      <SpeedInsights />
    </>
  );
}

export default App;
