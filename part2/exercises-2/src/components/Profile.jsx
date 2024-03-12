import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile()
{
   const listItems = oceans.map((ocean) => {
      return (
         <div key={ocean.id} className={ocean.fishCheck === "true" ? "isAFish" : "profile"}>
            <img src={ocean.image} alt={ocean.name} className="img"/>
            <h1>{ocean.name}</h1>
            <h4>Fun Facts:</h4>
            <ol>
               <li>{ocean.fact1}</li>
               <li>{ocean.fact2}</li>
               <li>{ocean.fact3}</li>
            </ol>
            <Button />
         </div>
      )
   });

   return(
      <ul>
         {listItems}
      </ul>
   );
}

export default Profile;