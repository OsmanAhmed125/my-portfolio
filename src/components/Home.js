import miniPhoto from '../imgs/profile-pic.png'
import myimg from '../imgs/personal-pic.jpg'
import img1 from '../imgs/myabout.jpeg'
import img2 from '../imgs/staff.jpg'


export default function Home(){
    return(
        <div>
            <div className="container-fluid land">
                <div className="row land-row">
                    <div className="col-sm p-5 info-side" >
                        <div className='f-holder p-5'>
                            <img className='mini-photo'  data-aos='zoom-out-down' data-aos-duration='1200' src={miniPhoto} />
                        </div>
                        <h1  data-aos='zoom-out-right' data-aos-duration='1200' className="py-5 text-center hello">Hello <span className="everyone">Everyone</span></h1>
                        <h2  data-aos='zoom-out-right' data-aos-duration='1200' className="py-5 text-center my-name">I am <span>OSMAN AHMED</span></h2>
                       
                       <h1 className='text-center mt-5 pt-3 job '>FRONT-END Developer <i class="bi bi-code-slash"></i></h1>
                        <div className='f-holder social-bar'>
                            <a href='https://instagram.com/o3x5_'><i className="bi bi-instagram  instagram "></i></a>
                            <a href='https://twitter.com/osman_tech1'><i className="bi bi-twitter twitter "></i></a>
                            <a href='www.linkedin.com/in/osman-ahmed-0778a0260'><i className="bi bi-linkedin linkedin"></i></a>
                            <a href='https://github.com/OsmanAhmed125'><i className="bi bi-github github"></i></a>
                        
                       </div>
                    </div>
                    <div className="col-sm img-side">
                        <img className="my-img " src={myimg} alt='my photo' />

                    </div>
                </div>
            </div>
             <div className='container-fluid about ' id='about'>
                    <div className='row mt-5'>
                        <h1 className='heading text-center '>About Me</h1>
                    </div>

                    <div className='row p-3'>
                        <div className='col-sm p-3'>
                            <img className='img-thumbnail' src={img1} data-aos='fade-up' />
                            <img className='img-thumbnail' src={img2} data-aos='fade-up' data-aos-delay='500' />
                        </div>
                        <div className='col-sm p-3 p-about'>
                            <p className='text-center p-3'>I'm a junior frontend developer with experience in HTML, CSS, JavaScript and React frameworks. I develop engaging user experiences that are optimized for performance and support responsive design principles. With my attention to detail, I strive to create intuitive interfaces ensuring users have a great experience. My passion lies in bringing creative ideas to life through thoughtful and pixel perfect code, making sure every element works together to provide a meaningful experience to the end user.</p>
                        </div>
                    </div>
            </div>
<br/>
<br/>
<hr/>




   
       
     
  
      

</div>
    )
}