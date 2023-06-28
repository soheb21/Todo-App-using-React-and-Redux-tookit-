import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser, readUser } from '../feature/userDetailsSlice';
import CustomModel from './CustomModel';

const ShowUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.app.users)
    const [radioData, setRadioData] = useState("All")
    const { loading, searchUser } = useSelector(state => state.app)
    const [id, setId] = useState();
    const [showPop, SetShowPop] = useState(false)
    useEffect(() => {
        dispatch(readUser())
    }, [])
    if (loading) {
        return <h2>Loading</h2>;
    }
    return (
        <div className='container w-100 mx-auto'>
            <div className='container'>
                <div className="mb-3 form-check">
                    <input name='gender' value="All" checked={radioData === "All"} onChange={(e) => setRadioData(e.target.value)} type="radio" />
                    <label className="form-check-label" >All</label>
                    <input name='gender' value="Male" checked={radioData === "Male"} onChange={(e) => setRadioData(e.target.value)} type="radio" />
                    <label className="form-check-label" >Male</label>
                    <input name='gender' value="Female" checked={radioData === "Female"} onChange={(e) => setRadioData(e.target.value)} type="radio" />
                    <label className="form-check-label">Female</label>
                </div>
            </div>
            {showPop && <CustomModel id={id} showPop={showPop} SetShowPop={SetShowPop} />}
            <h2>All Datas</h2>
            {
                data &&
                data.filter((ele) => {
                    if (searchUser.length === 0) {
                        return ele;
                    } else {
                        return ele.name.toLowerCase().includes(searchUser.toLowerCase())
                    }
                })
                    .filter((ele) => {
                        if (radioData === "All") {
                            return ele;
                        } else {
                            return radioData === ele.gender
                        }
                    })
                    .map((ele) => (
                        <div key={ele.id} className="card d-flex" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                <p className="card-text">{ele.gender}</p>
                                <div className="">
                                    <button className='ms-2' onClick={() => [setId(ele.id), SetShowPop(true)]} >view</button>
                                    <Link to={`/update/${ele.id}`} className='ms-2'>+Edit</Link>
                                    <button className='ms-2' onClick={() => dispatch(deleteUser(ele.id))} >Delete</button>
                                </div>

                            </div>
                        </div>
                    ))
            }

        </div>
    )
}

export default ShowUsers