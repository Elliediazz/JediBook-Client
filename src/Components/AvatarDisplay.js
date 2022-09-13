import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DisplayAvatar() {
    const { id } = useParams()  // how we can get the id off of the URL 
    const navigate = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        async function getAvatar() {
            const response = await fetch(`http://localhost:8080/myavatars/${id}`)
            const data = await response.json()
            setData(data)
        }
        getAvatar()
    }, []) //eslint-disable-line

    const deleteUser = async () => {
        await fetch(`http://localhost:8080/myavatars/${id}`, {
            method: 'DELETE'
        })
        navigate('/myavatars', {replace: true })
    }

    const display = data && (
        <div>
            <h1>Name: {data.name}</h1>
            {data.height && <h3>Height: {data.height}</h3>}
            {data.mass && <h3>Mass: {data.mass}</h3>}
            <h3>Hair Color: {data.hairColor}</h3>
            <h3>Eye Color: {data.eyeColor}</h3>
            <h3>Birth Year: {data.birthYear}</h3>
            {data.gender && <h3>Gender: {data.gender}</h3>}
            <h3>Home World: {data.homeworld}</h3>
            <h3>Species: {data.species}</h3>
            <button onClick= {deleteUser}>DELETE</button>
        </div>
    )


    return(
        <div>
           {display}
        </div>
    )
}

export default DisplayAvatar