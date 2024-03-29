import {Post as PostType} from "../builder/articlesPosts"
type Props ={post:PostType}
const Post = ({post}:Props)=> {
    return(
      
        <article key={post.url}>
          <h3>{post.title}</h3>
          <a href="post.url">{post.url}</a>
          <img src={post.ogImageUrl} alt="" />
        </article>
        
      )
}

export default Post;