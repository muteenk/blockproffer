import React from 'react'
import './fileUpload.css'

function FileUpload(files, setFiles) {
    const uploadHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFiles([...files, reader.result])
            }
        }
        reader.readAsDataURL(file)
    }

  return (
    <>
        <div className='file-card'>
            <div className='file-inputs'>
                <input type='file' id='file' name='csv-file' onChange={uploadHandler} />
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