import NotesAppBar from './NotesAppBar';

const NotePage = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='awesome title '
          className='notes__title-input'
        />
        <textarea
          placeholder='what happend today'
          className='notes__textarea'></textarea>
      </div>
      <div className='notes__image'>
        <img
          src='https://pics.craiyon.com/2023-07-13/d617db6812624347adf3fe329013ee6a.webp'
          alt='anime girl'
        />
      </div>
    </div>
  );
};
export default NotePage;
