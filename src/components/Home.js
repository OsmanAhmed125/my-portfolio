import miniPhoto from '../imgs/mini-photo.jpg'
import myimg from '../imgs/personal-pic.jpg'
import img1 from '../imgs/myabout.jpeg'
import img2 from '../imgs/staff.jpg'
import pic1 from '../imgs/my-work1.png'
import pic2 from '../imgs/peter.png'
import pic3 from '../imgs/dasborad.png'

export default function Home(){
    return(
        <div>
            <div className="container-fluid land">
                <div className="row land-row">
                    <div className="col-sm p-5 info-side" >
                        <div className='f-holder p-5'>
                            <img className='mini-photo' src={miniPhoto} />
                        </div>
                        <h1 className="py-5 text-center hello">Hello <span className="everyone">Everyone</span></h1>
                        <h2 className="py-5 text-center my-name">I am <span>OSMAN AHMED</span></h2>
                       
                       <h1 className='text-center mt-5 pt-3 job '>FRONT-END Developer <i class="bi bi-code-slash"></i></h1>
                        <div className='f-holder social-bar'>
                            <a href='#'><i className="bi bi-instagram  instagram "></i></a>
                            <a href='#'><i className="bi bi-twitter twitter "></i></a>
                            <a href='#'><i className="bi bi-linkedin linkedin"></i></a>
                            <a href='#'><i className="bi bi-github github"></i></a>
                        
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
                            <img className='img-thumbnail' src={img1} />
                            <img className='img-thumbnail' src={img2} />
                        </div>
                        <div className='col-sm p-3 p-about'>
                            <p className='text-center p-3'>I'm a junior frontend developer with experience in HTML, CSS, JavaScript and React frameworks. I develop engaging user experiences that are optimized for performance and support responsive design principles. With my attention to detail, I strive to create intuitive interfaces ensuring users have a great experience. My passion lies in bringing creative ideas to life through thoughtful and pixel perfect code, making sure every element works together to provide a meaningful experience to the end user.</p>
                        </div>
                    </div>
            </div>
<br/>
<br/>
<hr/>




   
    <div class="container card-img">
      
      <div class="row img-card ">
       
        <div class="image">
          <img src={pic1} alt=""/>
          <div class="details">
            <h2>SHIRT <span>-X</span></h2>
            <p> Welcome to Shirt X! For the latest in fashion trends, look no further. Whether it's a trip to the office or a night out on the town, Shirt X has the perfect shirt for you. Our selection of mens and womens shirts are stylish and comfortable, so you'll always make a great impression. We also carry stylish accessories, such as belts and hats, that will tie your outfit together. Looking for something special? We can customize any shirt just for you. So what are you waiting for? Stop by Shirt X today and check out our latest styles!.</p>
          
          </div>
        </div>
       
        <div class="image">
          <img src={pic2} alt=""/>
          <div class="details">
            <h2> Peter</h2>
            <p>Hi, I'm Peter! Welcome to my virtual personal website. Here I share my ideas, experiences, and passions. I love talking about everything from outdoor activities to the latest technology. Feel free to explore and let me know what you think. Thanks for stopping by!</p>
          </div>
        </div>
        {/* <!--image card end-->
        <!--image card start--> */}
        <div class="image">
          <img src={pic3} alt=""/>
          <div class="details">
            <h2>dasborad </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
          </div>
        </div>
        {/* <!--image card end--> */}
         </div>
      
   
      </div>
    
  
      

                </div>
            
    )
}