import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return <h3>Viewing Post ID: {id}</h3>;
};

export default Post;
