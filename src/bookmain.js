import Author from "./Book/author";
import Publisher from "./Book/publisher";
import Reader from "./Book/reader";

export default function BookMain(){
    return (

        <div>
            
            <h1>Book Information</h1>
           <table>
  
            <tr>
        
            <table>
            
                <tr>
                    <td> ISBN {book.isbn}</td>
                </tr>
                <tr>
                    <td>Name {book.bname}</td>
                </tr>
            </table>
            </tr>
            <tr>
            <Author></Author>
            </tr>
            <tr>
            <Publisher></Publisher>
            </tr>
            <tr>
            <Reader></Reader>
            </tr>
            
      
        </table>
        </div>
    )
}
var book={
    isbn:213443,
    bname:'two states'
}