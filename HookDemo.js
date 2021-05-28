import React, { useState } from 'react'

const HookDemo = (props) => {
    const [count,setCount] = useState(props.count)
    const [text,setText] = useState('')

    return (
        <div>
            <p>The current { text || 'count' } is {count}</p>
            <button className="btn btn-primary" onClick={() =>setCount(count+1)}>increment</button><br/><br/>
            <button className="btn btn-primary" onClick={() =>setCount(count-1)}>Decrement</button><br/><br/>
            <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)}/>
        </div>
    )
}

export default HookDemo

HookDemo.defaultProps = {
    count : 0
}