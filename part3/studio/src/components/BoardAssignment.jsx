import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState("No boards yet!");
   const boards = [
      {
         label: "Public",
         value: "public"
      },
      {
         label: "Private",
         value: "private"
      },
      {
         label: "Archived",
         value: "archived"
      }];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>{boards.map((board, index) => <option value={board.value} key={index}>{board.label}</option>)}</select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}
