import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile()
{
   const listItems = oceans.map((ocean) => {
      return (
         <div key={ocean.id}>
            <img src={ocean.image} alt={ocean.name} className="img"/>
         </div>
      )
   });

   return(
      <>
         <ul>
            {listItems}
         </ul>
         <Button />
      </>  
   );
}

export default Profile;