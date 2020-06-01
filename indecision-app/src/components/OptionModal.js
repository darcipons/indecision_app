import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel='Selected Option'
      >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
      </Modal>
    </div>
  )
}

export default OptionModal
