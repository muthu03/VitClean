import React, { useState } from "react";
//import { Firestore } from "firebase/firestore";
import {collection,addDoc,} from "firebase/firestore";
import { db } from "./firebase";
const Form = () => {
    const [newName, setName] = useState("");
    const [newEmail, setEmail] = useState("");
    const [newBlock, setBlock] = useState("");
    const [newroom,setroom] = useState(0);
    const [newStatus,setStatus] = useState(true);
    const Ref = collection(db,"form");

    const onSubmitform = async () => {
        try {
          await addDoc(Ref, {
            block: newBlock,
            email: newEmail,
            name: newName,
            room: newroom,
            status: newStatus,
          });
        } catch (err) {
          console.error(err);
        }
      };
    return(
        <div>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Block"
          type="text"
          onChange={(e) => setBlock(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Room"
          type="number"
          onChange={(e) => setroom(Number(e.target.value))}
        />
        <br></br>
        <input
          type="checkbox"
          checked={newStatus}
          onChange={(e) => setStatus(e.target.checked)}
        />
        <label> want room to be cleaned</label>
        <br></br>
        <button onClick={onSubmitform}> Submit</button>
      </div>
    )
 }

export default Form;