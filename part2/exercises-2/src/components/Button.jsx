import './styles.css';

function Button() {
   const onLearnMore = () =>{
      alert('Slipsh Splash');
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;