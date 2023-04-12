import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <h3> <strong>Q-1 </strong> When should we use context api?</h3>
            <p>The Context API in React is a tool that allows data to be passed down the component tree without having to pass props explicitly at every level. It can be useful in the following scenarios:
                <br />
                1. When a piece of data needs to be accessed by multiple components at different levels of the component. <br />
                2. When a piece of data needs to be accessed by deeply nested child components, but not by the parent component. <br />
                3. When a component needs to update data that affects multiple other components.</p>
            <h3> <strong>Q-2 </strong>What is useRef and useMemo?</h3>
            <p>"useRef" is a hook that returns a mutable object that can persist across re-renders of a component. It can be used to store a value that needs to be accessed from within a component's methods or to store a reference to a DOM element. <br />
                "useMemo" is a hook that allows you to memoize the result of a function and cache it so that it's not re-computed unnecessarily. It takes a function as its first argument and an array of dependencies as its second argument. The function will only be re-computed when one of the dependencies changes.</p>
            <h3><strong>Q-3 </strong>What is custom hook?</h3>
            <p>A custom hook is a reusable function that contains one or more React hooks and is used to abstract and share stateful logic between different components. Custom hooks allow you to extract stateful logic from a component and reuse it in other components. <br />

                To create a custom hook, you simply define a function that uses one or more React hooks and returns the stateful logic that you want to reuse. The name of a custom hook should start with the prefix "use" to make it clear that it's a hook.</p>

        </div>
    );
};

export default Blog;