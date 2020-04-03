// import React, { Component } from 'react';

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0,
//             name: ''
//         }
//     }

//     handleAdd(){
//     this.setState({ count: count + 1})
// }

//     handleInput(value){
//      this.setState({name: e.target.value})
// }

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//                  <input onChange={(e) => this.handleInput(e.target.value)}/>
//             </div>
//         )
//     }
// }

// export default Hooks;

import React, {useState, useEffect} from 'react';
import NameDisplay from './NameDisplay';
// import axios from 'axios';

const Hooks = props => {
    //useState is the hook for creating and storing state values. You destructure two values from useState: the name of the state item you're creating, and the method to change that item. Under the hood, React will create set the default value(passed into useState). That default value can be any datatype.
    const [count, setCount] = useState(0),
          [name, setName] = useState(''),
          [user, setUser] = useState({});

    //useEffect is used to simulate lifecycle methods. It takes two arguments:
    //1. A callback function that defines what you would like useEffect to do(axios requests is a common use for this)
    //2. The dependency array. This array should contain what values you would like useEffect to 'watch'. If one of the watched values changes, useEffect will re-invoke(similar idea to componentDidUpdate). If nothing is included in the dependency array, it will only fire once after the component mounts(similar to a componentDidMount). You MUST include the dependency array, or useEffect will fire infinitely.
    //NOTE: if you change a state value in a useEffect that the useEffect is watching, you need to compare it similarly to how you would with a componentDidUpdate(using prevProps and comparing prevProps or prevState to the current props or state) to avoid infite looping the useEffect. 
    useEffect(() => {
        // axios.get('request-url-here')
        // .then(res => setUser(res.data))
        // .catch(err => console.log(err))

        console.log('useEffect simulating componentDidMount')
    }, []);

    useEffect(() => {
        console.log('useEffect simulating componentDidUpdate')
    }, [count, name]);

    // const handleAdd = () => {
    //     setCount(count + 1)
    // }

    //Hooks are very useful at making code concise. Changing state values can be done inline with the JSX elements events.
    return (
        <div>
            <NameDisplay name={name}/>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Hooks;