import { Link } from '../routes'

export default () => (
  <div className='hello'>
    next.js real world
    <div>
      <Link route='/about'>About</Link>
    </div>
    <style jsx>{`
      .hello {
        font: 20px Helvetica, Arial, sans-serif;
        background: #f8f8f8;
        color: #b0b0b0;
        padding: 2em;
        height: 100vh;
        text-align: center;
      }
    `}</style>
  </div>
)
