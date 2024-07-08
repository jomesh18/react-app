import { useState } from "react";

const Bugs = () => {
    const handleClick = () => {
        setBugs(bugs.map(bug => bug.name == 'bug1' ? {...bug, fixed: true}: bug));
    };

    const [bugs, setBugs] = useState([
        {name: 'bug1', fixed: false},
        {name: 'bug2', fixed: false}
    ]);
    return (
        <>
        {bugs.map(bug => <p key={bug.name}>{bug.name} {bug.fixed? 'Fixed': 'New'}</p>)}
        <button onClick={() => {
            handleClick();
        }}>Fix</button>
        </>
    );
}

export default Bugs;