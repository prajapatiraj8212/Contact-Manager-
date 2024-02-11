import React, { useEffect, useState } from 'react'
import { Link , useParams } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';

let ViewContact = () => {

   let { contactId } = useParams();

   let [state, setState] = useState({
     loading: false,
     contact: {},
     errorMessage: '',
     group : {}
   });
 
   useEffect(() => {
     let fetchData = async () => {
       try {
         setState({ ...state, loading: true });
         let response = await ContactService.getContact(contactId);  // Pass contactId to getContact()
         let groupResponse = await ContactService.getGroup(response.data);
         setState({
           ...state,
           loading: false,
           contact: response.data,
           group : groupResponse.data 
         });
       } catch (error) {
         setState({
           ...state,
           loading: false,
           errorMessage: error.message
         });
       }
     };
 
     fetchData();
 
   }, [contactId]); 

  let {loading , contact , errorMessage, group} = state;

  return (
    <React.Fragment>
     <section className='view-contact-intro p-3'>
      <div className='container'>
       <div className='row'>
        <div className='col'>
        <p className='h3 text-warning fw-bold'>View Contact</p>
     <p className='fst-italic'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    
         </div>
       </div>
      </div>
     </section>

       {

             loading ? <Spinner/> : <React.Fragment>
             {
               Object.keys(contact).length > 0 &&  

               Object.keys(group).length > 0 && 

               <section className='view-contact mt-3'>
               <div className='container'>
                <div className='row align-items-center'>
                 <div className='col-md-4'>
                 <img
                 className='contact-img'
                 src={contact.photo}
                 alt=''/>
                 </div>
                 <div className='col-md-8'>
                 <ul className='list-group fw-bold'>
                 <li className='list-group-item list-group-item-action my-1'>
                    Name : <span className='fw-bold'>{contact.name}</span>
                 </li>
                 <li className='list-group-item list-group-item-action my-1'>
                    Mobile : <span className='fw-bold'>{contact.mobile}</span>
                 </li>
                 <li className='list-group-item list-group-item-action my-1'>
                    Email : <span className='fw-bold'>{contact.email}</span>
                 </li>
                 <li className='list-group-item list-group-item-action my-1'>
                    Company : <span className='fw-bold'>{contact.company}</span>
                 </li>
                 <li className='list-group-item list-group-item-action my-1'>
                    Title : <span className='fw-bold'>{contact.title}</span>
                 </li>
                 <li className='list-group-item list-group-item-action my-1'>
                    Group : <span className='fw-bold'>{group.name}</span>
                 </li>
                </ul>
                 </div>
                </div>
                <div className='row'>
                 <div className='col'>
                 <Link to={'/contacts/list'}className='btn btn-warning' >Back</Link>
                 </div>
                </div>
               </div>
               </section>
                       
             }
              </React.Fragment>

       }


    </React.Fragment>
  )
};

export default ViewContact;
