import styles from './Select.module.css'

function Select({ type, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}></label>
      <select name={name} id={name}>
        <options>Seleciona uma opção</options>
      </select>
    </div>
  )
}

export default Select