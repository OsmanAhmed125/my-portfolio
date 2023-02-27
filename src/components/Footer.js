import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Footer(){
    return(
        <div>
            <footer className=" text-center text-white" id="contact">
            <h1 className="footer-title text-center p-3">Contact Me on</h1>
  
  <div className="container p-4 pb-0">
  
    
    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/osman_tech1" role="button">
        <i className="bi bi-twitter"></i>
      </a>

   <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100090421185685" role="button">
        <i className="bi bi-facebook"></i>
      </a>


     <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/o3x5_" role="button">
        <i className="bi bi-instagram"></i>
      </a>

    <a className="btn btn-outline-light btn-floating m-1" href="https://t.me/osman_123445" role="button">
        <i className="bi bi-telegram"></i>
      </a>

  <a className="btn btn-outline-light  m-1" href="https://github.com/OsmanAhmed125" role="button">
        <i className="bi bi-github"></i>
      </a>
    

  </div>

  <h4 className="text-center text-white mt-3">Copyright © 2023 osman.ahmed.com™. All rights reserved.
</h4>



  
</footer>
                 </div>
    )
}