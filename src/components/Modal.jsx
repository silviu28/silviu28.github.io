const Modal = ({ title, message, onClose }) => {
  const style = {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    padding: '20px',
  }

  return (
    <div style={style}>
      <p style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => onClose()}>x</p>
      <h1>{ title }</h1>
      <p>{ message }</p>
    </div>
  )
}

export default Modal