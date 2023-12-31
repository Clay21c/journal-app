import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form>
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
        <button className='btn btn-primary btn-block' type='submit'>
          Login
        </button>
        <hr />
        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div className='google-btn'>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://freesvg.org/img/1534129544.png'
                alt='google'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
          <Link to='/auth/register' className='link'>
            Create new account
          </Link>
        </div>
      </form>
    </>
  );
};
export default LoginPage;
