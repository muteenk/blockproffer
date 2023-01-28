import React from 'react'

const Option = (props) => {
  return (
    <div class='flex items-center justify-center flex-wrap'>
      <div class="">
          <span class="text-white m-2 p-3.5 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75" >
            <span className='option-name'>
              {props.data.option}
            </span>
            <button class='ml-2' type="button" onClick={() => {props.deleteOption(props.i)}}>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
          </span>
      </div>
    </div>
  )
}

export default Option