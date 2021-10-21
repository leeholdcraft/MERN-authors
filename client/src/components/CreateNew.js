import React, { useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Form = (props) => {
    const [form, setForm] = useState({
        name: ""
    });

    const [errors, setErrors] = useState({
        name: ""
    });

    const onChangeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", form)
        .then(res=> { 
            setForm(res.data);
            if(res.data.Authors){
                navigate("/");
            }
            else{
                setErrors(res.data.error.errors);
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label for="authors">Add a new author: </label>
                    <input type="text" className="form-control" id="authors" name="name" onChange={onChangeHandler} placeholder="Enter authors name" />
                    {errors.name.message ? <span className="alert alert-danger">{errors.name.message}</span> : "" }
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <Link to="/"><button className="btn btn-danger">Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Form;