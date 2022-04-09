import classNames from 'classnames'
import styles from './styles.module.scss'

const Input = ({
  type,
  label,
  value = '',
  onChange,
  error,
  errorMessage,
  required = false
}) => {
  return (
    <span
      className={classNames(
        styles.input,
        value !== '' && styles.filled,
        error && styles.invalid
      )}
    >
      <input
        type={type}
        name={label}
        placeholder={label}
        className={styles.input}
        onChange={onChange}
        value={value}
        required={required}
      />
      {error && errorMessage && (
        <div className={styles.error}>{errorMessage}</div>
      )}
    </span>
  )
}

export default Input
