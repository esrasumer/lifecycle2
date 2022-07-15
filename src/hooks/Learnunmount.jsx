import {useState, useEffect} from 'react';

export default function App(){
const[number,setNumber] = useState(0);

// useEffect(()=>{
//   console.log('component mount edildi');
// setInterval(() => {
//   setNumber((n)=> n + 1);
// }, 1000); 
// },[]);

  return (
    <div>

<h1>{number}</h1>
<button onClick={()=>setNumber(number+1)}>click</button>

 </div>
  ); 
}

