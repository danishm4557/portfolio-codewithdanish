import { SpeedInsights } from "@vercel/speed-insights/react";
import Main from "./sections/main";
import Navigation from "./sections/navigation";
import Experience from "./sections/experience";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Experience />
      <SpeedInsights />
    </>
  );
}

export default App;
