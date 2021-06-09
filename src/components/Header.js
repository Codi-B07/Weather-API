import React from 'react'

const Header = (props) => {
    return (
        <div className="app__header">
            <input type="text" defaultValue={props.data}/>
            <button className="btn">FIND WEATHER</button>
        </div>
    )
}

export default Header