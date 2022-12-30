import miniPhoto from '../imgs/mini-photo.jpg'
import myimg from '../imgs/personal-pic.jpg'
import img1 from '../imgs/myabout.jpeg'
import img2 from '../imgs/staff.jpg'
export default function Home(){
    return(
        <div>
            <div className="container-fluid land pb-5 ">
                <div className="row land-row">
                    <div className="col-sm p-5 info-side" >
                        <div className='f-holder p-5'>
                            <img className='mini-photo' src={miniPhoto} />
                        </div>
                        <h1 className="py-5 text-center hello">Hello <span className="everyone">Everyone</span></h1>
                        <h2 className="py-5 text-center my-name">I am <span>OSMAN AHMED</span></h2>
                       <div className='row'>
                       <h1 className='text-center mt-5 pt-3 job'>FRONT-END Developer <i class="bi bi-code-slash"></i></h1>
                        <div className='f-holder social-bar'>
                            <a href='#'><i className="bi bi-instagram"></i></a>
                            <a href='#'><i className="bi bi-twitter"></i></a>
                            <a href='#'><i className="bi bi-linkedin"></i></a>
                            <a href='#'><i className="bi bi-github"></i></a>
                        </div>
                       </div>
                    </div>
                    <div className="col-sm img-side">
                        <img className="my-img" src={myimg} />

                    </div>
                </div>
            </div>
            <br />
            <div className='container-fluid about ' id='about'>
                    <div className='row mt-5'>
                        <h1 className='heading text-center '>About Me</h1>
                    </div>

                    <div className='row p-3'>
                        <div className='col-sm p-3'>
                            <img className='img-thumbnail' src={img1} />
                            <img className='img-thumbnail' src={img2} />
                        </div>
                        <div className='col-sm p-3 p-about'>
                            <p className='text-center p-3'>I'm a junior frontend developer with experience in HTML, CSS, JavaScript and React frameworks. I develop engaging user experiences that are optimized for performance and support responsive design principles. With my attention to detail, I strive to create intuitive interfaces ensuring users have a great experience. My passion lies in bringing creative ideas to life through thoughtful and pixel perfect code, making sure every element works together to provide a meaningful experience to the end user.</p>
                        </div>
                    </div>
            </div>

        </div>
    )
}