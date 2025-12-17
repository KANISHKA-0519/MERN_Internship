import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const UseEffectAPI = () => {
    const [postsParameter, setPostsParameter] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPostsParameter(response.data);
            console.log(response.data);
        })
        .catch(() => {
            console.log("Can't fetch data from API");
        });
    }, [postsParameter]);
    return (
    <div>
    <h2>UseEffectAPI Component</h2>
    <p>It is going to fetch data from JSON typicode placeholder</p>
    <ol>
        <p>The API values which fetched  was</p>
        {postsParameter.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}
    </ol>
    </div>
    )
}
export default UseEffectAPI;