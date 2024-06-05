import { useId, useState, useTransition } from "react";
function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition()

  const handleUpdate=()=>{
    startTransition(async ()=>{
      const error=await updateName(name)
      if (error) {
        setError(error);
        return;
      } 
    })
  }

  const updateName=(name)=>{
    setName(name)
  }
  const userId=useId()
  console.log(userId);
  return (
    <div>
      <input type="text" name="name" id="name"  onChange={(e)=>setName(e.target.value)}/>
      <button type="button" onClick={handleUpdate} disabled={isPending}>
        update
      </button>
      {error && <p>{error}</p>}
    </div>
  )
}

export default App