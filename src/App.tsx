import { Home } from "@/pages"
import RoutesApp from "./routes/RoutesApp"
function App() {
  return (
    <div className="max-w-4xl flex flex-col gap-4 m-[0_auto] bg-[#fafafa]">
      <Home />
      <RoutesApp />
    </div>
  )
}

export default App
