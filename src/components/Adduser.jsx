import React, { useState } from 'react'

function Adduser(props) {
    console.log('je suis dans addUser');
    const [user, setUser] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
      props.setPersonnes([...props.personnes,user])
    }
    const handleChange = (e) => {
       setUser(e.target.value)
    }


    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={user}
               onChange={handleChange}
            />
            <button type="submit">Envoyé</button>
        </form>
    )
}

export default Adduser