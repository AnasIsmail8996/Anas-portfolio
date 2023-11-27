import './Achievements.css'

const Achievements = () => {
  return (
    <>
    <div className='Achie-parent'>
      <div className='Achie-text'>
        <h1>Achievements</h1>
        <p>Putting quantified achievements on a resume is great, 
          but I just don’t work with hard numbers. 
          I have no data to support the quality of my work.
           If you have lots of relevant experience,
           the heading statement of your resume will be a summary.</p>
      </div>
      {/* Card Starting from here */}
      <div className='Achie-Cards'>
        <div className='Achie-Cards-One'>
        <h4>Apprenticeship in Blockchain Development</h4>
        <p>Skills:HTML, CSS, Bootstrap,  JavaScript, ES6, Firebase, React.js, Next.JS, Vite.JS, Node.js, MongoDB,
          React_Native
        </p>
        </div>

         <div className='Achie-Cards-Two'>
<a href="https://anas-ismail.netlify.app/" target="_blank" rel="noopener noreferrer">
          <h2>My_PortFolio</h2>
       </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Achievements;