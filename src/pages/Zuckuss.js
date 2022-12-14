import TextZuckuss from '../assets/data/TextZuckuss'
import zuck1 from '../assets/images/Zuckuss/zuck_1.webp'
import zuck3 from '../assets/images/Zuckuss/zuck_3.webp'
import zuck8 from '../assets/images/Zuckuss/zuck_8.webp'
import mistHunter from '../assets/images/Starships/MistHunter.webp'

function Zuckuss() {
  const HUNTER = [zuck1, zuck3, zuck8]

  return (
    <>
      {/* Landscape */}
      <div className="portrait:hidden container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800">
          Zuckuss
        </h2>
        <div className="flex space-x-8 mb-4">
          {HUNTER.map((pic) => (
            <div key={`${pic}`}>
              <img
                src={pic}
                alt="..."
                className="shadow-lg rounded max-w-full h-auto border-none object-cover"
              />
            </div>
          ))}
        </div>
        <TextZuckuss />
      </div>
      {/* Portrait */}
      <div className="landscape:hidden m-2 container mx-auto flex flex-col px-4">
        <div className="flex container mx-auto">
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800 mx-auto">
            Zuckuss
          </h2>
        </div>
        <div className="py-4">
          <img
            src={zuck3}
            alt="..."
            className="shadow-lg rounded h-full border-none mx-auto"
          />
        </div>
        <TextZuckuss />
      </div>
      {/* Portrait End */}
      {/* Starship */}
      <div className="container mx-auto flex flex-wrap justify-center mb-12">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          Mist Hunter
        </h2>
        <img
          src={mistHunter}
          alt="..."
          className="shadow-lg rounded h-auto border-none mb-8"
        />
      </div>
    </>
  )
}
export default Zuckuss
