import './App.css'
import { Input } from './input'
import { Playground } from './playground'

function App() {

  return (
    <div style={{width:"100%", minHeight: "100dvh", position: "relative", textAlign:'left'}}>
      <Input/>
      <Playground/>
    </div>
  )
}

export default App
