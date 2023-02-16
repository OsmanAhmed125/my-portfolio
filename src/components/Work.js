import { works } from "../data/works";

export default function Work(){
return(
    <div>
<h1 className='title-work text-center'>My Work</h1>
<div className="container fluid card-img">
    <div className="row">


        {works.map((work, index)=>(
                            
                  <div key={index} className="col-sm f-holder p-3">
                  <div class="cardw" >
                        <div class="content">
                            <div class="front" >
                                <h3 class="title">{work.name}</h3>
                                <p class="subtitle">visit me :)</p>
                            </div>

                            <div class="back" style={{backgroundImage: `url(${work.image})`, backgroundSize:'cover'}}>
                                <a class="link-w" href={work.url}>
                                   visit site
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>
        ))}
</div>

</div>
</div>
)
}