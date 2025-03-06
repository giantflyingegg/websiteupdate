export default function Footer() {
  return (
    <footer id="footer" className="flex justify-center items-center my-8 sm:my-12 px-4">
      <div className="text-center">
        <h3 className="font-pacifico text-center text-2xl sm:text-3xl md:text-4xl mt-0 pb-2">Get in touch:</h3>
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-2 sm:mt-4">
          <a href="mailto:abwaham@gmail.com" className="fas fa-envelope text-xl sm:text-2xl text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.github.com/giantflyingegg" className="fab fa-github text-xl sm:text-2xl text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://twitter.com/thepowerof23" className="fab fa-twitter text-xl sm:text-2xl text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://t.me/@thepowerof23" className="fab fa-telegram-plane text-xl sm:text-2xl text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </footer>
  )
}