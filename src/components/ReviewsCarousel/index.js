import {Component} from 'react'

import './index.css'

class ReviewCarousel extends Component {
  state = {state: 0}

  onIncrement = () => {
    const {state} = this.state
    if (state >= 1) {
      this.setState(prevState => ({state: prevState.state - 1}))
    }
  }

  onDecrement = () => {
    const {state} = this.state
    if (state < 3) {
      this.setState(prevState => ({state: prevState.state + 1}))
    }
  }

  render() {
    const {state} = this.state
    console.log(state)
    const {reviewsList} = this.props
    const resuultLIst = reviewsList[state]

    return (
      <div className="mainConatiner">
        <div className="reviewContainer">
          <h1 className="heading">Reviews</h1>
          <img src={resuultLIst.imgUrl} alt={resuultLIst.username} />
          <div className="buttonContainer">
            <button
              d="leftArrow"
              className="button"
              type="button"
              onClick={this.onIncrement}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>
            <p className="Name">{resuultLIst.username}</p>
            <button
              id="rightArrow"
              className="button"
              type="button"
              onClick={this.onDecrement}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="companynaem">{resuultLIst.companyName}</p>
          <p>{resuultLIst.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
