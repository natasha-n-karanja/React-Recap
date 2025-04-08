import { useEffect, useState } from "react";
import ProfileComponent from "./ProfileComponent";

const UserComponent = () => {
  const [data] = useState({
    first_name: "Natasha",
    last_name: "Karanja",
    y_o_b: 2006
  })

  const [usersData,setUserData] = useState([])

  const url = "https://jsonplaceholder.typicode.com/users"

  const fetchUsers = () => {
    fetch(url)
    .then(res => res.json())
    .then(d => setUserData(d))
    .catch(e => console.log(e))
  }

  useEffect(() => {
    fetchUsers( )
  }, [])

  return(
    <div>
      <h1>User Component</h1>
      <p>First Name: {data.first_name}</p>
      <p>last Name: {data.last_name}</p>
      <p>Year of birth {data.y_o_b}</p>
      <ProfileComponent users={usersData}/>
    </div>
  )
}

export default  UserComponent;