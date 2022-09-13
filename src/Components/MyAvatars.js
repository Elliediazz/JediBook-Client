import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function MyAvatars() { 
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData(){
      //this is where we call the backend 
      const response = await fetch('http://localhost:8080/myavatars/all')
      const data = await response.json()
      //console.log(data)
      setData(data)
    }
    fetchData()
  }, []) // this is the dependancy array >> how you tell the effect to watch specific things for chnages (placed inside the array). An empty array means when the page loads, run the effect (" run once and done")

  const display = data && data.map(avatar => {
    return(
      <h1 key={avatar._id}>
        <Link to={`/myavatars/${avatar._id}`}>{avatar.name}</Link>
      </h1>
    )
  })

    return(
     <div>
       {display}
     </div>
    )
} 
export default MyAvatars