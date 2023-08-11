// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {title, description, publishedDate} = props
  return (
    <li className="blog-item">
      <div className="top-section">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
