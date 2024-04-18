import { useState } from "react";

const holadios = () => {
    const [counter, setCounter] = useState(0)
    return (

        <div>
            <button onClick={() => setCounter(counter + 1)}>Pulsar</button>

            {
                counter % 2 === 0 ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque soluta odit, eligendi esse harum quis natus, dolores tempora magni eius nisi. Cupiditate modi voluptate ea.</p> : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laudantium, odio molestiae reprehenderit, excepturi ab nesciunt enim veniam officia iure aliquid blanditiis! Quod unde incidunt pariatur ipsam repellendus tenetur voluptates quae laboriosam veritatis! Omnis nulla, debitis ipsa, dignissimos sed natus culpa nesciunt officiis voluptatum autem possimus nihil exercitationem ipsam consequatur?</p>

            }

        </div>

    )

};

export default holadios;