
import React, {useEffect,useState} from 'react'

export default function Nice(){
  
    const [backend,setbackend] = useState([{}])

    useEffect(()=>{
        fetch('/api').then(response=>response.json()).then(data => {setbackend(data)})
    },[])

    return(
        <div>
            {(typeof backend.users === 'undefined')? 
            (<p>Loading...</p>):
            (backend.users.map((user,i)=>(
                <p key={i}>{user}</p>
            )))
            }
        </div>
    )

}