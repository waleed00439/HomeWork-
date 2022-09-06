import React from 'react'
import './index.css'

export default props => {
    const click = props.click
    return (
        
        <button className={
            props.operator == '=' ? `triple` : `button`
        }
            onClick={() => click && click(props.label)}
        >{props.label}</button>
    )
}