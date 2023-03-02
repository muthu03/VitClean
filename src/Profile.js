import './profile.css'
import User from './User';
import Form from './Form';
import Table from './Table';
function Profile() {
  

  return (
   <div className='FrontControl'>
    <div>
      <User />
    </div>
    
    <div>
      <Table />
      <Form />
    </div>
   </div>


    
    
  )
 

}

export default Profile
