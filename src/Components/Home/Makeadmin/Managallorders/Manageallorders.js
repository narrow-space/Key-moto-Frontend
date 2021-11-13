import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Footer from '../../../Footer/Footer';
import Header from '../../Header/Header';
import swal from 'sweetalert';

import './Manageallorders.css'

const Manageallorders = () => {
const [allorders, setAllorders] = useState([])
const [deleteCount, setDeleteCount] = useState(false)
const [isapproved, setIsapproved] = useState(false)



useEffect(() => {
fetch('https://powerful-ravine-38865.herokuapp.com/allorders')
.then(res => res.json())
.then(data => {
console.log(data)
setAllorders(data)
})
}, [deleteCount,isapproved])

//////delete orders//////

const handledelete = (id) => {





(swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete)=> {
  

  if (willDelete) {
   
   
    fetch(`https://powerful-ravine-38865.herokuapp.com/deleteorders/${id}`, {
      method: 'DELETE',
      headers: {
      'content-type': 'application/json'
      },
      
      })
      .then(res => res.json())
      .then(data=>{
        setDeleteCount(data)
      })
      
      
    
    
  } 
  
  else {
    
    swal("Your imaginary file is safe!");
  }
  
}))

 
    
 










}


const handleupdate = (id) => {
console.log(id);
fetch(`https://powerful-ravine-38865.herokuapp.com/update/${id}`, {
method: "put",
headers: {
"content-type": "application/json",
},
body: JSON.stringify({ status: "pending" })




})
.then(res => res.json())
.then(result => {
setIsapproved(result)

console.log(result)
if(result.modifiedCount){
    swal({
        title: "Shipped",
        text: "Order Shipped Successfully!",
        icon: "success",
        button: "Ok",
      });
}



})
}












return (
<div>
<Header></Header>
<div className=" ">
{allorders?.length ? <h2 className="text-center text-danger">All Orders List</h2> :
<h2 className="text-center" >No booking <span style={{ "color": "red" }} >Yet Now!!!</span></h2>

}






<body>


<div className="table-container">
<table class="table">
<thead>
<tr>
<th>Id</th>
<th>Product Name</th>
<th>Customer Name</th>
<th>Adress</th>
<th>Phone No.</th>

<th>email</th>
<th>Status</th>
<th>Action</th>
<th>Action</th>


</tr>
</thead>
<tbody>

{
allorders.map((mo, index) => <tr>
<td data-lable="Id">{index}</td>
<td data-lable="Product Name">{mo.name}</td>
<td data-lable="Customer Name">{mo.displayName}</td>
<td data-lable="Adress">{mo.adress}</td>
<td data-lable="Phone No.">{mo.number}</td>
<td style={{ "textAlign": "right" }} data-lable="email"><small >{mo.email}</small></td>
<td data-lable="Status">{mo.status}</td>
    <td className="" data-lable="Action"><button onClick={() => handledelete(mo._id)} id="btn">Delete</button></td>

<td className="" data-lable="Action"><button onClick={() => handleupdate(mo._id)} id="btn">shipped</button></td> 
</tr>)
}
</tbody>

</table>

</div>
</body>



</div >
<Footer></Footer>
</div>
);
};

export default Manageallorders;