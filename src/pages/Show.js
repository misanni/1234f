import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  // it allows you to pass data from one route to another during navigation.
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
     border: "none",
    width: "50%",
    margin: "30px auto",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    

  };

  return (
    <div className='input'style={div}>
        <h1 className='edit-book'>Edit Book</h1>
      <h2>Book Title:{post.subject}</h2>
      <h3> Grade:{post.details}</h3>
     
      <div style={{ textAlign: "center" }}>
        <Form className='edit-input'action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="write subject here"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="write details here"
            defaultValue={post.details}
          />
          
          <button>Update Book</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          
            <button>Delete Book</button>
        </Form>
      </div>
      <Link to="/Home">
        
      
            <button>Go Back</button>
      </Link>
      
    </div>
  );
};


export default Show;