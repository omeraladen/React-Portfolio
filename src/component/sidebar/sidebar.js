import './sidebar.scss'
import {Link , NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome  , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () =>  (
    <div className="nav-bar">

        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img src={LogoSubtitle} className="sub-logo" alt="logo-2" />
        </Link>

       <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4d'/>
            </NavLink>
            
            <NavLink exact='true' activeclassname='active' className='Work-link' to='/Work'>
                <FontAwesomeIcon icon={faBriefcase} color='#4d4d4d'/>
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d'/>
            </NavLink>
       </nav>

       <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href='https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href='https://github.com/omeraladen'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
         
        </ul>

    </div>
)

export default Sidebar;