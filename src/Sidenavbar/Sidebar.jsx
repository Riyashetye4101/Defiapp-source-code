import './style.css';
import {useState} from 'react';
const Navbar = ({checkfunc}) => {
    
    
    const [isExpended,setExpended] = useState(true);
    const menuItems = [
        {
            text:"Home",
            icon: "icons/Category.png"
        },
        {
            text:"Section 1",
            icon: "icons/section1.png"
        },
        {
            text:"Section 2",
            icon: "icons/section2.png"
        },
        {
            text:"Section 8",
            icon: "icons/section31.png"
        }
    ]
    
    return ( 
        <div className={isExpended? "side-nav-container":"side-nav-container side-nav-container-NX"}>
           <div className="nav-upper">
            <div className="nav-heading">
                {isExpended &&
                <div className="nav-brand">
                    
                    <span><center>N</center></span>
                    <h2>Name</h2>
                </div>}
                <button className={isExpended? "hamburger hamburger-in": "hamburger hamburger-out"}
                 onClick =  {() => setExpended(!isExpended)}
                >
                    
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="nav-menu">
                    {
                        menuItems.map(
                            (item)=>{
                                return(
                                <a href="#" className={isExpended? "menu-item": "menu-item menu-item-NX"}>
                                     <img src={item.icon} alt="" />
                                     {isExpended &&<p> {item.text}</p>}
                                </a>
                                );
                            }
                        )
                    }
            </div>
           </div>
           {isExpended && <div className="nav-footer">
               <div className="w-profile">
                      
                            <div className="box1">
                                <div className="pic">
                                        <p>N</p>
                                    </div>
                                    <div className="cash-update">
                                       <span>$0.90</span> 
                                    </div>
                             </div>
                                
                            
                            <div className="ad">
                            <span>Buy $XYZ</span>
                             </div>
                      
                       
               </div>
               <div className="footer-content">
                         <div className="glb">
                            <img src="icons/global.png" alt="global" />
                         </div>
                         <div className="box2">
                            <img src="icons/sym.png" alt="" />
                            <div className="circle">

                            </div>
                         </div>
               </div>
           </div>}
        </div>
     );
}
 
export default Navbar;