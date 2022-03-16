import React from "react";
import Img1 from '../images/img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';
import Img4 from '../images/img4.png';
import './Home.css';
function Home () {

    return(

        <div>

<div id = 'leftbox'>
       
       <img src={Img1} width="500 px "  />
       <div class = "info">

           <div id="title">
           <b><h1 ><p class="title">Help Us In Tracking</p>
           <p class="title"> Illegal Drugs</p></h1></b>

           </div>

       
       <p>DAAS (Drug Analysis and Alerting System) is a nationalized
            framework to track the procurement of the drugs described 
            as prescription required drugs in the NDPS act 1985. 
            The data collected is stored in secured government channels
             and monitored for abnormal sales</p>
             {/* <button class="learnMore">Learn more</button> */}
             
             <button class="but"> <span>Learn more</span>
             </button>

       </div>
       
</div>
       

       
<div id = 'middlebox'>
      
       <img id = "img2" src={ Img2 } width="300 px " />
       
</div>



<div id = 'rightbox'>
      
<img id = "img3"src={Img3} width="300 px " />
<img id = "img4" src={Img4} width="200 px" height="200 px" />

</div>
     


        </div>
        
      
    );

}

export default Home