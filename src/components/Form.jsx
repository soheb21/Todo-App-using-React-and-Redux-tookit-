import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../feature/userDetailsSlice';

const Form = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch()
    const getusers = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container my-5 '>
                    <div className="mb-3 ">
                        <label className="form-label">Name</label>
                        <input type="text" name='name' className="form-control" onChange={getusers} />

                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Age</label>
                        <input type="text" name='age' className="form-control" onChange={getusers} />

                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" onChange={getusers} />

                    </div>
                    <div className='container'>
                        <div className="mb-3 form-check">
                            <input name='gender' value="Male" type="radio" onChange={getusers} />
                            <label className="form-check-label" >Male</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input name='gender' value="Female" type="radio" onChange={getusers} />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </>
    )
}

export default Form