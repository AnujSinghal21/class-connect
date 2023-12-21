/* eslint-disable react/prop-types */

function Comment(props) {
  return (
    <div className='bg-light m-2 p-3 border border-secondary rounded'>
        {props.msg}
    </div>
  )
}

export default Comment