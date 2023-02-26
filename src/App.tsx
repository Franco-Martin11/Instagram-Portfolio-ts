import { Home } from "@/pages"
import RoutesApp from "./routes/RoutesApp"
function App() {
  return (
    <div className="max-w-4xl flex flex-col gap-4 m-[0_auto] bg-[#fafafa] md:px-8">
      <Home />
      <RoutesApp />
    </div>
  )
}

export default App
