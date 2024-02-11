import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';
import Spinner from './components/Spinner/Spinner';

let App = () => {
  return (
    <React.Fragment>
    
    <Navbar/>
    <Routes>
     <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
     <Route path={'/contacts/list'} element={<ContactList/>} />
     <Route path={'/contacts/add'} element={<AddContact/>} />
     <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
     <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
    </Routes>
    </React.Fragment>
  );
}

export default App;
