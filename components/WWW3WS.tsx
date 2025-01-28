export default function WWW3WS() {
    return (
      <section id="www3ws" className="bg-white mx-10 border border-black rounded-[2%]">
        <div className="www3ws-title">
          <h2 className="font-pacifico pt-20 text-center text-4xl mt-0">Weekly Web3 Workshop</h2>
          <p className="fade-in">WW3WS is a weekly meetup dedicated to the Web3 space. Founded in 2022 by James Zaki, a developer with the Ethereum Foundation, our weekly meetups serve as a platform for talented individuals to share innovation, discussion, and exploration.</p>
          <p className="fade-in">While our roots lie in the Ethereum ecosystem, we also explore the broader crypto universe, tackling topics that range from the latest technological advancements to the economic, sociological, and philosophical underpinnings of this digital revolution.</p>
          <p className="fade-in">Below are two examples of presentations I have given at the workshops:</p>
        </div>
        <div className="presentation-container">
          <div className="slides-container">
            <div className="iframe-wrapper">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vSDLQfKs0tWd6gaWeCq79T68o_ZpgjW1AcjqmfBRpkpojyRNp687v0SIYokEKDhFHyQvuEQDjaaYv2d/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                allowFullScreen
                title="Google Slide Presentation 1"
              />
            </div>
          </div>
          <div className="slides-container">
            <div className="iframe-wrapper">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQdSG0Z_7Ql2wGSNU7vOAwxUupGq8oj0ugV90vNnZB-Ho7a9yFOCd7mYtddlcryRj2lwJdFrzdNpcCO/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                allowFullScreen
                title="Google Slide Presentation 2"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
