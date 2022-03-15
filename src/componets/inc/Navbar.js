// import React from "react";
// import './Navbar.css';
// function Navbar () {

//     return(
//         <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
//   <div class="container-fluid justify-content-end">
    
//     <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
//         <li class="nav-item justify-content-end">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item justify-content-end">
//           <a class="nav-link active" aria-current="page" href="#">About NCB</a>
//         </li>
//         <li class="nav-item justify-content-end">
//           <a class="nav-link active" aria-current="page" href="#">Admin - NCB</a>
//         </li>
        
//             <li class="nav-item">
//           <a class="nav-link active btn me-2  " aria-current="page" href="#" >Login</a>
//         </li>
        
           
    
       
//         <li class="nav-item dropdown">
//           <a class="nav-link active  me-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Sign Up 🔽
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Manufacturer</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Warehouse</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Medical Store</a></li>
//           </ul>
//         </li>
//       </ul>
     
//     </div>
//   </div>
// </nav>
//     );

// }

// export default Navbar
















import React from "react";
import './Navbar.css';
function Navbar () {

    return(





<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">About - NCB</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Admin - NCB</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li> */}
            </ul>
            <ul class="navbar-nav">
            <li class="nav-item bg-light poo">
                    <a class="nav-link active  " aria-current="page" href="#">Login</a>
                </li>
                <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle poo " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">  Sign Up  </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Manufacturer</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Warehouse</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Medical Store</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
 );

}

export default Navbar
