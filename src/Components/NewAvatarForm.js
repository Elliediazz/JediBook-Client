import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const INIT_STATE = {
  name:'',
  height:'',
  mass:'',
  hairColor:'',
  eyeColor:'',
  birthYear:'',
  gender:'',
  homeworld:'',
  species:''
}

function NewAvatarForm(){ 
  const [data, setData] = useState(INIT_STATE)
  const navigate = useNavigate()

  const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    data.birthYear = Number(data.birthYear)
    data.height = Number(data.height)
    data.mass = Number(data.mass)
    console.log(data) // =>> shows the height, mass and birth year come in as a string instead of number, this will cause the backend to crash

    const response = await fetch('http://localhost:8080/myavatars', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':  'application/json'
      },
      body: JSON.stringify(data)
      })
      if (response.status !== 201) {
        alert("Error 404")
      } else {
        navigate('/myavatars', {replace: true })
      }
  }
  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} required name="name" placeholder="Name" value={data.name}/>
      <input onChange={handleChange} name="height" type="number" placeholder="Height" value={data.height}/>
      <input onChange={handleChange} name="mass" type="number" placeholder="Mass" value={data.mass}/>
      <input onChange={handleChange} required name="hairColor" placeholder="Hair Color" value={data.hairColor}/>
      <input onChange={handleChange} required name="eyeColor" placeholder="Eye Color" value={data.eyeColor}/>
      <input onChange={handleChange} required name="birthYear" type="number" placeholder="Birth Year" value={data.birthYear}/>
      <input onChange={handleChange} name="gender" placeholder="gender" value={data.gender}/>
      <input onChange={handleChange} required name="homeworld" placeholder="Home World" value={data.homeworld}/>
      <input onChange={handleChange} required name="species" placeholder="species" value={data.species}/>
      
      <button type="Submit">Submit</button>
    </form>
    )
}
 export default NewAvatarForm