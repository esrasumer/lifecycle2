import {useState, useEffect} from"react";

export default function App() {
    const[number,setNumber] = useState(0);
    const [name,setName] = useState("Esra");

    // if(true){
    // console.log("hi!")
    // }
    
    useEffect(()=> {
      console.log("number State güncellendi!")
    },[number])  // sadece number state'i güncellenir

    useEffect(()=>{
        console.log('name state güncellendi')
    },[name]) // number ve name state güncellenir

    // [] 'dependency array' boş olduğunda herhangi bir state güncellendiği zaman çalışır
    //[number] 'dependency array' içinde yazan state güncellendiği zman çalışır(number,name...)
   
    useEffect(()=>{
        console.log("component mount edildi");
    }, []);

      return (
        <div>
          
          <h1>{number}</h1>
    <button onClick={()=>setNumber(number+1)}>click</button>
<br />
<hr/>
 <br />
 <h1>{name}</h1>
    <button onClick={()=> setName('Sümer')}>Click</button>
    <hr />
    <br />
    </div>
      );
    }

   //[] 'dependency array' içini boş bırakırsak component mount edildiği anı yakalar
