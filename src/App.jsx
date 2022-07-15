import {useState} from "react";
import Learnuseefect from './hooks/Learnuseefect'
import Learnunmount from './hooks/Learnunmount'

function App() {
const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <Learnuseefect />
     <Learnunmount />
     {isVisible && <Learnunmount />}
 <br />
 <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>

</div>
  );
} 



export default App;

// hook'ları kullanırken if kullanılmaz
// did mount
