const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://img.freepik.com/premium-photo/anime-girl-watching-sunset-3d-illustration_717906-1415.jpg)'
        }}></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Vamos a ver si funciona</p>
        <p className='journal__entry-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nulla voluptas explicabo a exercitationem! Maxime
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
export default JournalEntry;
