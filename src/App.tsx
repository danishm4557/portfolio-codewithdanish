import { SpeedInsights } from "@vercel/speed-insights/react";
import Main from "./sections/main";

function App() {
  return (
    <>
      <Main />
      <SpeedInsights />
    </>
  );
}

export default App;
