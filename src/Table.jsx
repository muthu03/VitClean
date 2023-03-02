
import { collection, query, where,getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect,useState } from 'react';
//import { useFirestoreQuery } from "@react-query-firebase/firestore";
//import { useFirestoreDocument } from "@react-query-firebase/firestore";


const Table = () =>    {
  const [record,setrecord] = useState([]);
  //const ref= collection(firestore,"records");
  //const q= query(ref,where("email", "==", "rohith.2019a@vitstudent.ac.in"));
  const ref = query(
    collection(db, "form"),
    where("email", "==", "jone@gmail.com")
  )
  useEffect(() => {
    const getUsers = async() =>{
       const data = await getDocs(ref);
       setrecord(data.docs.map((doc) => ({ ...doc.data(),id:doc.id})));
    };
  getUsers();

  },[]);
  return(

    <div>
      <div>
      <table>
                        <thead >
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Block</th>
                                <th>Room No</th>
                                <th>Requested</th>  
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((user)=>{ 
                                    return(
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.block}</td>
                                            <td>{user.room}</td>
                                            <td>{user.status}</td>
                                            <td></td>
                                        </tr>
                                    )
                                })
                            }                              
                        </tbody>
                    </table>
                    </div>


    </div>
    
  );
  
};

export default Table;