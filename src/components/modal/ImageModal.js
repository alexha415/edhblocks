import React from 'react'

const ImageModal = ({show, img}) => {
    const modalClass = show ? 'modal display-modal' : 'modal hide-modal'
    console.log(img);
    return (
        <div className={modalClass}>
            <img src={img} alt="" className='modal-image'/>
        </div>
    )
}

export default ImageModal
