/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button } from 'reactstrap';
import { useState } from 'react'
function RateComment(props) {
  const {onSubmit, title} = props
  const [rating, setRating] = useState(0)
  const [comment, setComment ] = useState("")
  const [submitted, setSubmitted] = useState(false);

  if (submitted){
    return (
      <div>
        <div className="text-center p-auto border border-success rounded my-2" style={{height: 120}}>
          <h3 className='my-4'>Thankyou, We've got your response</h3>    
        </div>
      </div>
    )
  }
  return (
    <div className='mt-2 mb-4'>
      <h2 className='text-center'>{title}</h2><hr/>
      <div className='text-center fs-2 align-items-center'>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ color: rating < star? "lightgrey": "gold", cursor: "pointer"}}
            onClick={() => setRating(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <div className="px-3">
        <textarea 
        className="form-control" 
        placeholder="Leave a comment here..." 
        id="comments" 
        onChange={e => setComment(e.target.value)}></textarea>
      </div>
      <div className='d-flex my-2'>
        <Button color='primary m-auto' 
        onClick={() => {
          onSubmit({rating: rating, comment: comment.slice(0, 200)})
          setSubmitted(true)
        }}>Submit</Button>
      </div>
    </div>
  //   <div className={`rate-section ${submitted ? 'submitted' : ''}`}>
      
  //   {!submitted && <h2>Rate Our Platform</h2>}
  //   {!submitted && (
  //     <div className="rating-input">
  //       {[1, 2, 3, 4, 5].map((star) => (
  //         <span
  //           key={star}
  //           className={`star ${rating >= star ? 'gold' : ''}`}
  //           onClick={() => handleStarClick(star)}
  //         >
  //           &#9733;
  //         </span>
  //       ))}
  //     </div>
  //   )}
  //   {!submitted && (
  //     <button className="submit-rating" onClick={handleSubmit}>
  //       Submit
  //     </button>
  //   )}
  //   {submitted && (
  //     <div className="thank-you-box">
  //       <p>Thank you for rating our platform</p>
  //     </div>
  //   )}
  // </div>
  )
}

export default RateComment