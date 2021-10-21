import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Edit = (props) => {
    const [singleAuthors, setSingleAuthors] = useState({
        name:""
    });
    
    const [errors, setErrors] = useState({});

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props.id}`,singleAuthors)
        .then(res=> {
            console.log(res)
            //setSingleAuthors(res.data.Authors);
            if(res.data.Authors){
                navigate("/");
            }
            else{
                console.log("****************")
                setErrors(res.data.error.errors);
            }
        })
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res=> setSingleAuthors(res.data.Authors))
        .catch(err=>console.log(err))
    }, [props.id]);

    const onChangeHandler = event => {
        setSingleAuthors({
            ...singleAuthors,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label for="authors">Edit author: </label>
                    <input type="text" className="form-control" name="name" onChange={onChangeHandler} value={singleAuthors.name} />
                    {errors.name ? <span className="alert alert-danger">{errors.name.message}</span> : "" }
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/"><button className="btn btn-danger">Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Edit; 