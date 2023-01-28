import React from 'react'

const Option = (props) => {
  return (
    <div class=''>
      <div class="mb-7">
          <span class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >
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