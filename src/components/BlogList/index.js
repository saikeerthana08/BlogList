// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul className="blog-container">
      {blogDetails.map(eachItem => (
        <BlogItem
          key={eachItem.id}
          title={eachItem.title}
          description={eachItem.description}
          publishedDate={eachItem.publishedDate}
        />
      ))}
    </ul>
  )
}

export default BlogList
