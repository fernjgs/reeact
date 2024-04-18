// import React from 'react'

import { useState } from "react"

// const inputs = () => {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

// export default inputs;


export const inputs = () => {
    const [selector, refSelector] = useState(0);

    return (
        <div>
            <input type="text" onChange={e => setElements(Number(e.target.value)) } 
            />
            {[...Array(elements)].map(() => (<input type="text" />
            ))}
        </div>
    )
    
}