import React from 'react'
import './fileUpload.css'

function FileUpload(props) {


  return (
    <>
        {/* <div className='file-card'>
            <p className="file-err">
                {props.fileError}
            </p>
            <p className="selected-file-name">
                {props.file.name}
            </p>
            <div className='file-inputs'>
                <label>Upload a CSV file to get the name of the eligible voters</label>
                <input type='file' id='file' name='csv-file' onChange={props.handleFileParse} required/>
                <button>
                    <i className='fas fa-upload'></i>
                    Upload
                </button>
            </div>

            <p className='main'>Support Files</p>
            <p className='info'>CSV</p>
        </div>
         */}

        <div className='file-card'>
            <p className="file-err">
                {props.fileError}
            </p>
            <div className='file-inputs'>
                <label>Upload a CSV file to get the name of the eligible voters</label>
                <input type='file' id='file' name='csv-file' accept='.csv' onChange={props.handleFileParse} required></input>
                <i className='fas fa-upload'></i>
                <h1>
                    Upload
                </h1>
            </div>
        </div>
        <div className="progress-area">
                <li className='row'>
                    <i className="fas fa-file-alt"></i>
                    <div className="details">
                        <span className="file-name">{props.file.name}</span>
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