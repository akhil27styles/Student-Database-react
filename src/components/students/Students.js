import React from 'react'
import { Link} from 'react-router-dom'
import Avatar from '../layout/Avatar'
import { useFirestoreConnect,useFirestore } from 'react-redux-firebase'
import {useSelector } from 'react-redux'
import Loading from '../layout/Loading'
const Students = () => {
  const firestore=useFirestore()
const students=useSelector((state)=>state.firestore.ordered.students);

  useFirestoreConnect([
    {
      collection:"students",
      orderBy:['createdAt',"desc"],
    }
  ]);
  if(!students){
    return <Loading/>
  }
  const deleteStudent=async(id)=>{
    try{
     await firestore.collection("students").doc(id).delete();
    }
    catch(error){
  console.log("not exist",error);
    }
  }
    return (
              
<div className="container">
  <div className="py-4">
    <div className="row">
     {
         students.map((student)=>(
            <div className="col-lg-3 col-md-6 mb-4" key={student.id}>
            <div className="card shadow text-center py-4">
        <Avatar url={`https://i.pravatar.cc/150?img=${student.id}`}/>
              <div className="card-body">
                <h5 className="card-title mb-0">{student.name}</h5>
                <p className="text-muted small">{student.email}</p>
                <Link to={`/student/${student.id}`} className="btn btn-primary btn-profile view">
                  View Profile
                </Link>
                <button className="btn btn-edit mt-3 " onClick={()=>deleteStudent(student.id)}>
                <span className="material-icons">delete</span>
                </button>
              </div>
            </div>
          </div>
         ))
     }
    </div>
  </div>
</div>
    )
}

export default Students
