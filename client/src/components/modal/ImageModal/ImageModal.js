import React from 'react'
import './ImageModal.css';

const ImageModal = ({show, img}) => {
    const modalClass = show ? 'modal display-modal' : 'modal hide-modal'
    return (
        <div className={modalClass}>
            <img src={img} alt="" className='modal-image'/>
        </div>
    )
}

export default ImageModal
