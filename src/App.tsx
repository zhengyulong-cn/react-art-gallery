import Navigation from "@/components/navigation"
import { useREM } from "./hooks/flexible"
function App() {
  useREM()
  return (
    <div className="App">
      <Navigation />
    </div>
  )
}

export default App
