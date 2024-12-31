import { SpeedInsights } from "@vercel/speed-insights/react";
import Main from "./sections/main";
import Navigation from "./sections/navigation";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <SpeedInsights />
    </>
  );
}

export default App;
