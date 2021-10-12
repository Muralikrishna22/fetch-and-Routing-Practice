import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItem: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getDetailedBlogItem()
  }

  getDetailedBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)

    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }

    this.setState({blogItem: updatedData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="detailed-blog-item">
        <h1 className="detailed-blog-title">{blogItem.title}</h1>

        <div className="avatar-container">
          <img src={blogItem.avatarUrl} alt="avatar" className="avatar" />
          <p className="name"> {blogItem.author}</p>
        </div>

        <img
          src={blogItem.imageUrl}
          alt={blogItem.title}
          className="detailed-blog-img"
        />
        <p className="blog-content"> {blogItem.content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
