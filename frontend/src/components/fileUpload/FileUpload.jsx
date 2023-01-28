import React from 'react'

function FileUpload(props) {


  return (
    <>
        <div className='file-card'>
            <p className="file-err">
                {props.fileError}
            </p>
            <div className='file-inputs'>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload a CSV file to get the name of the eligible voters</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type='file' id='file' name='csv-file' accept='.csv' onChange={props.handleFileParse} required />
            </div>
        </div>
        <div className="progress-area">
                <li className='row'>
                    <i className="fas fa-file-alt"></i>
                    <div className="details">
                        <span className="file-name">{(props.file !== null) ? props.file.name : ""}</span>
                    </div>
                    {/* <div className='delete-btn'>
                        <button>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div> */}
                </li>
        </div>
    </>
  )
}

export default FileUpload