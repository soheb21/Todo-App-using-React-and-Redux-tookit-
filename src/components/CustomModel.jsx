import React from 'react'
import { useSelector } from 'react-redux'
import "./CustomModel.css"
const CustomModel = ({ id, showPop, SetShowPop }) => {
    const  data  = useSelector(state => state.app.users)
    const singleUser = data.filter((ele) => ele.id === id);
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => SetShowPop(false)}>close</button>
                <h2>{singleUser[0].name}</h2>
                <h3>{singleUser[0].email}</h3>
                <h4>{singleUser[0].age}</h4>
                <p>{singleUser[0].gender}</p>
            </div>
        </div>
    )
}

export default CustomModel