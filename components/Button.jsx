import React from 'react'

const Button = ({ name, btnStyles }) => {
    return (
        <button className={`${btnStyles} text-sm font-medium rounded-md px-3 py-2 font-dmSans`}>
            { name }
        </button>
    )
}


export default Button

