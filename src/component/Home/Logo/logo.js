import './logo.scss';
import Logos from '../../../assets/images/logo-s.png'



const Logo = () => {
    return (
        <div className='logo-container'>
            <img src={Logos} alt="logo"  className='solid-logo'/>
            


        </div>
    )
};


export default Logo;