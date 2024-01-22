import styles from './Form.module.css'

const Form = ({ setModal, nameAttr, handleSubmit, defaultValue }) => {
  return (
    <div
      className={styles.modal}
      onClick={() => setModal(false)}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.input}>
          <textarea
            autoFocus
            name={nameAttr}
            defaultValue={defaultValue}
            required
          ></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button
            className={`${styles.button} ${styles.cancelBtn}`}
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            className={`${styles.button} ${styles.submitBtn}`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form