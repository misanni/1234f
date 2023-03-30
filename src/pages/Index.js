import { useLoaderData, Form} from "react-router-dom";
import Post from "../components/Post";
import Arrow from "../image/arrow.png";
import Link from '@mui/material/Link';



const Index = (props) => {
  //to load data amount a component from a previous route to a new route
  const todos = useLoaderData();

  return <>
  <div className='form'style={{textAlign: "center"}}>
      
      <Form className='input index'action="/create" method="post">
          <input type="text" name="subject" placeholder="Enter book name"/>
          <input type="text" name="details" placeholder="Grade"/>
          {/* <input type="text" name="author" placeholder="Author"/> */}
          <button className='new-book'>Create New Book</button>
      </Form>
  </div>
<div className='card'>
  
  {todos.map((post) => <Post key={post.id} post={post} />)}

</div>
  <Link href="/" className='btn'to="/"><img src={Arrow} alt="arrow" /> </Link>
  </>;
};

export default Index;