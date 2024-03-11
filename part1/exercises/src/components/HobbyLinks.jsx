export default function HobbyLinks(){
    let pageTitle = 'My Hobbies';
    let hobbyLinks = [
        {
            "name": "Internet Surfing",
            "url": "https://www.google.com/"
        },
        {
            "name": "Watching Netflix",
            "url": "https://www.netflix.com/"
        },
        {
            "name": "Complete LaunchCode Daily assignments",
            "url": "https://launchcode.instructure.com/"
        },
    ]
    return (
        <div style={{border: "5px solid black", padding: "1.5rem"}}>
            <h3>{pageTitle}</h3>
            {hobbyLinks.map((hobby, index) =>  <a key = {index} style={{display: 'block'}} href = {hobby.url} target="blank">{hobby.name} </a>)}
        </div>
    );
}