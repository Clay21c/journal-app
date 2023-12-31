// import NothingSelected from './NothingSelected';
import NotePage from '../note/NotePage';
import Sidebar from './Sidebar';

const JournalPage = () => {
  return (
    <div className='journal__main-content'>
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <NotePage />
      </main>
    </div>
  );
};
export default JournalPage;
