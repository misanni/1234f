import { Link, useLoaderData, Form } from "react-router-dom";
import {motion} from 'framer-motion'
// destructuring the props needed to get our post, including router prop match
const Show = () => {
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
    <div style={div}>
        <h1 className='edit-book'>Edit Book</h1>
      <h2>Book Title:{post.subject}</h2>
      <h3> Grade:{post.details}</h3>
     
      <div style={{ textAlign: "center" }}>
        <Form action={`/update/${post.id}`} method="post">
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
          <motion.button
          animate={{rotateZ: 360, color: '#ff2994', x: 0, scale: 1,}}
          initial={{
            x: 300,
            scale: 0.5,
          }}
          transition={{ duration: 1 }}
          >
            Delete Book</motion.button>
        </Form>
      </div>
      <Link to="/Home">
        <motion.button
 initial={{
    x: -300,
    scale: 0.5,
  }}
  animate={{
    fontSize: 50,
    x: 0,
    scale: 1,
  }}
  transition={{ duration: 1 }}
        >
            Go Back</motion.button>
      </Link>
      
    </div>
  );
};


export default Show;