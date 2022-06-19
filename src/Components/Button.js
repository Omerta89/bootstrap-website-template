import React, { useState } from 'react'


const Button = () => {
    const [mycolor, setmycolor] = useState('green')

    return (
        <button style={{ color: `${mycolor}` }} onClick={() => setmycolor(mycolor === 'green' ? 'blue' : 'green')} >{mycolor} </button>


        )
}

export default Button