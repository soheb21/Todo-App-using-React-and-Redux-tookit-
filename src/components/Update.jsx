import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from '../feature/userDetailsSlice';


const Update = () => {
    const [updateData, setUpdateData] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.app.users)

    useEffect(() => {
        if (id) {
            const singleUser = data && data.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0])
        }
    }, [])
    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }


    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData))
    }
    return (
        <> <h2 className="my-2">Edit the data</h2>
            <form onSubmit={handleUpdate}>
                <div className='container my-5 '>
                    <div className="mb-3 ">
                        <label className="form-label">Name</label>
                        <input type="text" value={updateData && updateData.name || ""} name='name' className="form-control" onChange={newData} />

                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Age</label>
                        <input type="text" value={updateData && updateData.age || ""} name='age' className="form-control" onChange={newData} />

                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Email address</label>
                        <input type="email" value={ updateData && updateData.email || ""} name='email' className="form-control" onChange={newData} />

                    </div>
                    <div className='container'>
                        <div className="mb-3 form-check">
                            <input name='gender' value="Male" checked={ updateData && updateData.gender === "Male" || ""} type="radio" onChange={newData} />
                            <label className="form-check-label" >Male</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input name='gender' value="Female" checked={ updateData && updateData.gender === "Female" || ""} type="radio" onChange={newData} />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </>
    )
}

export default Update