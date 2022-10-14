
import React, {useEffect,useState} from 'react'
const axios = require('axios').default

export default function Nice(){
  
    const [backend,setbackend] = useState([{}])

    async function postData(url = '', data) {

        axios.get('http://localhost:5000/api').then((response) => {
          setbackend(response.data);
          console.log(response.data);
        });
    }

    postData('http://localhost:5000/api' , "salman")

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