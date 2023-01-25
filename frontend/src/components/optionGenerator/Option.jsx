import React from 'react'

const Option = (props) => {
  return (
    <>
        <span className='option'>
          <span className='option-name'>
            {props.data}
          </span>
          <button type="button" onClick={() => {props.deleteOption(props.data)}}>
              <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </span>
    </>
  )
}

export default Option