
import cover from './assets/album1.jpg'

function Card(){

  return(
    <div className='card'>
      <img src={cover} alt="Album Cover" className='albumCover'></img>
      <h2 className='title'>Doomsday</h2>
      <p className='description'>MF Doom</p>
      <p className='description'>1999</p>
    </div>
  )

}

export default Card;