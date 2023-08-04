import Author from "./Book/author";
import Publisher from "./Book/publisher";
import Reader from "./Book/reader";

export default function BookMain(){
    return (
        <div>
            <div style={{'margin-left':'200px'}}>
                <h2>Book Information</h2>
                <div>ISBN {book.isbn}</div>
                <div>Name {book.bname}</div>
            </div>
            <Author></Author>
            <Publisher></Publisher>
            <Reader></Reader>
        </div>
    )
}
var book={
    isbn:213443,
    bname:'two states'
}