import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
    console.log("Child Rendered");
    return <button onClick={onClick}>Child Button</button>;
});

function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked!");
    }, []); // Empty dependency → function reference stays the same

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment Parent
            </button>
            <Child onClick={handleClick} />
        </>
    );
}

export default Parent;
