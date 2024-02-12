const Book = (props) => {
  return (
    <div>
      <p>The book title is: {props.title}</p>
      <p>The book author is: {props.author}</p>
      <p>The year of publication is: {props.year}</p>
    </div>
  );
};


export default Book;