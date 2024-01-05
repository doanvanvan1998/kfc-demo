import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../slides/counterSlide.jsx';
import {productServices} from "../services/ProductServices.js";

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const [posts, setPosts] = React.useState([]);


    const getPosts = async () => {
        try {
            const res = await productServices.getPost();
            console.log(res.data);
        } catch (e) {
            console.log(e)
        }
    }


     useEffect( () => {
          getPosts();
        console.log('cjdbcjd',import.meta.env.REACT_APP_API_URL)
    }, []);

    return (
        <div>
            <h1>counter</h1>
            <p>{count}</p>
            <div>
            </div>
            <div>
                <button onClick={() => dispatch(increment({step: 10}))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <div>
                <button onClick={getPosts}>get post</button>
            </div>
        </div>
    );
}

export default Counter;