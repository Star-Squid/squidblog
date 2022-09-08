import React from "react"
import CommentBox from "react-commentbox"

class BlogCommentBox extends React.Component {
  state = { authorName: "", authorNameIsSet: false }

  onChangeAuthorName = e =>
    this.setState({
      authorName: e.currentTarget.value,
    })

  onSubmitAuthorName = e => {
    e.preventDefault()
    this.setState({ authorNameIsSet: true })
  }
}
