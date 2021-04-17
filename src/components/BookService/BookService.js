import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookForm from '../BookForm/BookForm';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './BookService.css'

const BookService = () => {
    const {id }=useParams();
    const [service,setService] = useState({});
    console.log(id);

    useEffect(()=>{
          fetch(`http://localhost:3002/serviceBook/${id}`)
          .then(res=>res.json())
          .then(data=>{
            setService(data);
          })  
    },[])
    return (
        <div >
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <BookForm service={service} />
                </div>
            </div>
        </div>
    );
};

export default BookService;