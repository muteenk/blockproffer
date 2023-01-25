import React from 'react'
import { useState } from 'react'
import './fileUpload.css'

function FileUpload(props) {


  return (
    <>
        <div className='file-card'>
            <p className="file-err">
                {props.fileError}
            </p>
            <p className="selected-file-name">
                {props.file.name}
            </p>
            <div className='file-inputs'>
                <input type='file' id='file' name='csv-file' onChange={props.handleFileParse} required/>
                <button>
                    <i className='fas fa-upload'></i>
                    Upload
                </button>
            </div>

            <p className='main'>Support Files</p>
            <p className='info'>CSV</p>
        </div>
    </>
  )
}

export default FileUpload