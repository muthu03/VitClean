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

function User() {
  const {currentUser} = useAuthValue()
  const [Vit,setVit] = useState([]);
  const usersCollectionRef = collection(db, "vitdatabase");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setVit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    
    getUsers();
  });

  const user = Vit?.map((user)=>{ 
    if(user.Email === currentUser?.email){
      return(
      <div className='center' key={user.Email}>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Name: </strong>{user.Name}</p>
          <p><strong>Block No: </strong>{user.Block}</p>

          <p><strong>Room No: </strong>{user.Room}</p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
      );
    }});
  return (
      <div>
          {user}
      </div>
  )
}

export default User;