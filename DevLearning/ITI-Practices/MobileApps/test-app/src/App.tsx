import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { LiteralObjects } from "./typescript/LiteralObjects";

const App = () => {
  return (
    <div className="mt-2">
      <h1>React App - TestApp</h1>
      <hr />
      <BasicTypes />
      <Functions />
      <LiteralObjects />
    </div>
  )
}

export default App;