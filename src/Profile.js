import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  
} from "firebase/firestore";


import { auth } from './firebase'

function Profile() {
  const {currentUser} = useAuthValue()
  const [Vit,setVit] = useState([]);
  const usersCollectionRef = collection(db, "vitdatasbase");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setVit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    
    getUsers();
  });

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
        <div>
        <div>
        {Vit.map((user)=>{ if(user.Email === currentUser?.email){
          return (
            <div>
                <h1>Name : {user.Name}</h1>
                  <h1>Block : {user.Block}</h1>
                  <h1>Room No : {user.Room}</h1>
                </div>
          );
        }})}
    </div>
        </div>
      </div>
  )
 

}

export default Profile
