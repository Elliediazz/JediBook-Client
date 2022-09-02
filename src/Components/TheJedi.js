import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function TheJedi(){ 
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchPeople(){
      const response = await fetch('https://swapi.dev/api/people/')
      const data =  await response.json()
      setData(data.results)
      console.log(data)
    }
    fetchPeople()
  },[])

  const display = data && data.map(people => {
    return (
      <h1 key= {people.name}>
          <Link to={`/people/${people.name}`}>{people.name}</Link>
      </h1>
    )
  })
    return(
     <div className='jediBackground'>
      {display}
     </div>
    )
 }
 
 export default TheJedi