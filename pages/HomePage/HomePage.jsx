import './HomePage.scss';

export default function HomePage () {
  return (
    <>
      <div className='home'>
        <div>

        </div>

        <form className='form'>
          <label htmlFor='searchInput' className='form__label'></label>
          <input type='text' name='search' className='form__search' id='searchInput' placeholder='Enter a movie genre'/>
        </form>
      </div>
    </>
  )
}