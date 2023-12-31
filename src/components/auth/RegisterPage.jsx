import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form>
        <input
          className='auth__input'
          type='text'
          placeholder='name'
          name='name'
        />
        <input
          className='auth__input'
          type='text'
          placeholder='email'
          name='email'
        />
        <input
          className='auth__input'
          type='password'
          placeholder='password'
          name='password'
        />
        <input
          className='auth__input'
          type='password'
          placeholder='Confirm password'
          name='password2'
        />
        <button className='btn btn-primary btn-block mb-5' type='submit'>
          Login
        </button>
        <Link to='/auth/login' className='link'>
          Already registered?
        </Link>
      </form>
    </>
  );
};
export default RegisterPage;
