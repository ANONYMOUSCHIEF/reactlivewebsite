import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"50px"}}>
        {props.data && <div className={`alert alert-${props.data.type} alert-dismissible fade show`} role="alert">
            <strong>{props.data.type}</strong> {props.data.mess}</div>}
        </div>  
    )
}
