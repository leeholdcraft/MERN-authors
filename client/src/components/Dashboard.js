import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Dashboard = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res=>setAuthors(res.data.Authors))
        .catch(err=>console.log(err))
    })

    const onClickHandler = (id) => {
        navigate(`/api/authors/update/${id}`)
    }

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="Main">
            <Link to="/api/authors/new"><button className="btn btn-success">Add new author</button></Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author: </th>
                        <th scope="col">Actions: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((item, key) => {
                            return <tr key={key}>
                                    <td>{item.name}</td>
                                    <td><button className="btn btn-primary" onClick={() => onClickHandler(item._id)}>edit</button>
                                        <button className="btn btn-danger" onClick={() => onDeleteHandler(item._id)}>delete</button>
                                    </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;