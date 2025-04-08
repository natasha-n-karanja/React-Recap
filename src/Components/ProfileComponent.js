const ProfileComponent = (props) => {
  console.log(props.users)
  return(
    <div>
      <h1>users</h1>
      {props.users.map((val,index)=>{
        return(
          <div key={index}>
            <p>Name: {val.name}</p>
            <p>UserName: {val.username}</p>
            <p>PhoneNumber: {val.phone}</p>
            <p>Website: {val.website}</p>
            <p>email: {val.email}</p>
            <h5>Company</h5>
            <p>Company: {val.company.name}</p>
            <p>Company: {val.company.bs}</p>
            <p>Company: {val.company.catchPhrase}</p>
            <h5>Address</h5>
            <p>Address: {val.address.city}</p>
            <p>Address: {val.address.street}</p>
            <p>Address: {val.address.suite}</p>
            <p>Address: {val.address.zipcode}</p>
            <p>Geo: {val.address.geo.lat}</p>
            <p>Geo: {val.address.geo.ing}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProfileComponent