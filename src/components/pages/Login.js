import React,{useState} from 'react'
import Input from '../layout/Input'
import {useFirebase} from 'react-redux-firebase'
import {useHistory} from 'react-router-dom'
const Login = () => {
    const firebase=useFirebase();
    let history=useHistory()
    const [user, setuser] = useState({
        email:"",
        password:"",
    });
    const InputChange=(e)=>{
        setuser({ ...user,[e.target.name]:e.target.value});
    };
    const submitForm=async(e)=>{
        e.preventDefault();
        await firebase.login(user)
        history.replace("/");
    };
    return (
        <div className="container">
      <h1>Welcome to Student Base of Jss Academy of Technical Education</h1>
      <hr style={{color:"white"}}></hr>
      <div className="image">
      </div>
      <h2>IT Department 2018-2022 Batch</h2>
  <div className="py-5">
    <div className="row mt-5">
      <div className="col-md-4 offset-md-4">
        <div className="card shadow">
          <div className="card-body">
           <div style={{fontSize:"40px",fontWeight:"bolder",color:"yellow",textAlign:"center"}}>Student Base <hr/></div> 
            <form onSubmit={submitForm}>
              <div className="form-group">
                <Input 
                name="email" 
                placeholder="Enter Your E-mail" 
                value={user.email} 
                onChange={InputChange}/>
              </div>
              <div className="form-group">
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={user.password}
                  onChange={InputChange}/>
              </div>
              <button className="btn btn-primary btn-block">
                Login to dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Login
