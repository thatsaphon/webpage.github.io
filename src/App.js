import logo from "./logo.svg"
import "./App.css"
// import banner from "./img/Slide1.JPG"

function App() {
  return (
    <div>
      <header>
        <div className="md:container md:mx-auto px-5">
          <div className="flex flex-col">
            <div className="bg-yellow-400 h-24 font-sans text-xl px-48">
              JSP1988
            </div>
            <div className="bg-yellow-300 h-12 font-sans text-xl px-48">
              หน้าแรก
            </div>
            <div className="flex mt-2">
              {/* <div className="bg-blue-400 w-48 mr-2 border-2 border-solid border-black">
                <ul className="flex flex-col">
                  <li className="m-3 flex">
                    <button className="border-2 border-solid border-black rounded flex-1">
                      Home
                    </button>
                  </li>
                </ul>
              </div> */}
              {/* <div className="bg-red-400">sss</div> */}
              <div className="flex flex-col flex-1 ">
                <h1 className="bg-blue-500 text-red-900 text-center">
                  ประวัติร้าน ตัวแทนจำหน่ายอะไรบ้าง สโลแกน รีวิว
                </h1>
                <div className="flex justify-center">
                  <img src="img/Slide1.JPG" alt="" />
                </div>
                <div className="flex justify-center">
                  <img src="img/Slide2.JPG" alt="" />
                </div>
                {/* <div className="bg-banner-1 flex-1 "></div> */}
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 justify-center text-center m-2">
                Footer
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
