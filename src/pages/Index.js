import { useLoaderData, Form} from "react-router-dom";
import Post from "../components/Post";
import Arrow from "../image/arrow.png";
import Link from '@mui/material/Link';



const Index = (props) => {
  const todos = useLoaderData();

  return <>
  <div className='form'style={{textAlign: "center"}}>
      
      <Form className='input'action="/create" method="post">
          <input type="text" name="subject" placeholder="Enter book name"/>
          <input type="text" name="details" placeholder="Grade"/>
          {/* <input type="text" name="author" placeholder="Author"/> */}
          <button>Create New Book</button>
      </Form>
  </div>
<div className='card'>
  
  {todos.map((post) => <Post key={post.id} post={post} />)}

</div>
  <Link href="/" className='btn'to="/"><img src={Arrow} alt="arrow" /> </Link>
  </>;
};

export default Index;