import router from "@/router";
import { RouterProvider } from 'react-router-dom';
import { useREM } from "./hooks/flexible"
function App() {
  useREM()
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
