import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='journal__entries'>
      {entries.map((entry) => {
        return <JournalEntry key={entry} />;
      })}
    </div>
  );
};
export default JournalEntries;
