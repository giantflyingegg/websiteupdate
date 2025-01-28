export default function Footer() {
    return (
      <footer id="footer" className="social-icons flex justify-evenly items-center m-12">
        <div>
          <h3 className="font-pacifico text-center text-4xl mt-0 pb-2">Get in touch:</h3>
          <a href="mailto:abwaham@gmail.com" className="fas fa-envelope inline-block mx-16 text-black text-2xl" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.github.com/giantflyingegg" className="fab fa-github inline-block mx-16 text-black text-2xl" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://twitter.com/thepowerof23" className="fab fa-twitter inline-block mx-16 text-black text-2xl" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://t.me/@thepowerof23" className="fab fa-telegram-plane inline-block mx-16 text-black text-2xl" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </footer>
    )
  }