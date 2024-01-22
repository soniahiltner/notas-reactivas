import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'

const LoginForm = ({ handleSubmit, type }) => {
  const navigate = useNavigate()
  return (
    <div
      className={styles.modal}
      onClick={() => navigate('/')}
    >
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <section className={styles.formInput}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            type='text'
            required
            autoFocus
            autoComplete='username'
          />
        </section>
        <section className={styles.formInput}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            required
            autoComplete='current-password'
          />
        </section>
        <button
          className={styles.signButton}
          type='submit'
        >
          {type === 'login' ? 'Sign in' : 'Sign up'}
        </button>
        <hr />
        <section className={styles.signUpLink}>
          <p>
            {type === 'login'
              ? "Don't have an account?"
              : 'Do you already have an account?'}
          </p>
          <Link
            to={type === 'login' ? '/register' : '/login'}
            className={styles.signButton}
          >
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </Link>
        </section>
      </form>
    </div>
  )
}

export default LoginForm
