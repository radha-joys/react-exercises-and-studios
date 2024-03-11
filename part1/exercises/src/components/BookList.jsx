export default function BookList() {
   let pageTitle = "Books List";
   let book1 = "google.com";
   let book2 = "";
   let book3 = "";
   let books = [
      {
         "url": "https://m.media-amazon.com/images/I/51ZJ9RjiC0L._SY445_SX342_.jpg",
         "alt": "Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones"
      },
      {
         "url": "https://m.media-amazon.com/images/I/41yzzcHjHCL._SY445_SX342_.jpg",
         "alt": "The Psychology of Money: Timeless lessons on wealth, greed, and happiness"
      },
      {
         "url": "https://m.media-amazon.com/images/I/41EvfUrKsJL._SY445_SX342_.jpg",
         "alt": "Fake Work: Why People Are Working Harder than Ever but Accomplishing Less, and How to Fix the Problem"
      }
   ]
   return (
      <div style={{border: "5px solid black", padding: "1.5rem"}}>
         <h3>{pageTitle}</h3>
         {books.map((book, index) => <img key={index} src={book.url} alt={book.alt} />)}
      </div>      
   );
}