 import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
//pass value from a child component to a parent component
const Post = (props) => {
  const post = props.post;

  // style
  const div = {
    textAlign: "center",
    border: "none",
    margin: "10px auto",
    width: "80%",
    display: "flexbox",
    backgroundColor: "white",
    borderRadius: "10px"
  
  };
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    
    <div style={div}>
      <Container xs={{ py: 8 }} maxWidth="sm">
      <Grid container spacing={4} 
          sx={{
            '& .MuiGrid-item': {
              // Set the number of columns for different screen sizes
              xs: 12, // Extra small screens (up to 600px)
              sm: 6,  // Small screens (from 600px to 960px)
              md: 4,  // Medium screens (from 960px to 1280px)
              lg: 3,  // Large screens (from 1280px to 1920px)
              xl: 2   // Extra large screens (above 1920px)
            }
          }}
        >
          <Grid item>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h5">
                  <Link to={`/post/${post.id}`}>
                    Title: {post.subject}
                  </Link>
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                Grade: {post.details}
              </Typography>

            </CardContent>
            </Grid>
        </Grid>

        </Container>
        
    
    </div>
  );
};

export default Post;