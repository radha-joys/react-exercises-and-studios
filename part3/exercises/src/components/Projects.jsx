import data from '../data.json';
import { useState } from 'react';

export default function MyProjects(){
    const [index, setIndex] = useState(0);
    let item = data.projects[index];
    const handleClick = (event) => {
        if(index < data.projects.length - 1){
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <p><b>Project Name:</b> {item.canvas}</p>
            <p><b>Designer:</b> {item.designer}</p>
            <img src={item.photoUrl} alt={item.alt} />
        </div>
    )
}