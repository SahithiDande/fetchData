import axios from 'axios';
import React ,{useState,useEffect} from 'react'

function Card() {
    const [user,setUser] = useState([]);
    const url='http://localhost:8080/';

    const fetchData =()=>{
        fetch("http://localhost:8080/data")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let gagan = data
            console.log(gagan);
            setUser(gagan)
            console.log("...............");
            console.log(user)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix">
        <div className="row">
          {user.
          map(data => (
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name}
                  </h5>
                  <h6 style={{color: "blue"}}>Email: {data.email}</h6>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state+
                      ", " +
                      data.location.country}
                    <br />
                    
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}

export default Card