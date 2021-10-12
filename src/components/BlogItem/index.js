import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/:${id}`} className="link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`title${id}`} className="blog-img" />
        <div className="details-container">
          <h1 className="title">{title}</h1>
          <p className="topic">{topic}</p>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="name"> {author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
