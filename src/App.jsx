import { Console } from "./components/Console"
import { Create } from "./components/Create"
import { Flash } from "./components/Flash"
import { Navbar } from "./components/Navbar"
import { Texts } from "./components/Texts"
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Texts />
      <Console />
      <Create />
      <Flash />
    </>
  )
}

export default App
