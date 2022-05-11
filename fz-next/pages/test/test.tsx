import React from 'react';
import {number} from "prop-types";

export type TestProps = {}
interface T {
    id:number,
    val: number
}
const Test=(()=>{

    let row:T[] = [];
    for (let i = 0; i < 5000; i++) {
        row.push({id: i, val: i})
    }

    return (
            <div>
                {row.map(({id, val}) => (
                    <div key={id}>
                        <p>Row #{id}: {val}</p>
                        <span>Row #{id}: {val}</span>
                    </div>
                ))}
            </div>

    );
}
)

export default React.memo(Test);
