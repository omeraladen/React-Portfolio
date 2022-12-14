import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetter/animate';
import'./Home.scss'
import Logo from './Logo/logo';

const Home = () => {
    const [letterClass , setLetterClass] = useState('text-animate');
    const nameArray = ['m' , 'e' , 'r',' ','A','l','a','d','e','n'];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animation-hover')
    //     }, 4000)
    // }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>P</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _12`}>a</span>
                    <span className={`${letterClass} _12`}>c</span>
                    <span className={`${letterClass} _12`}>e,</span>
                    
                    <br /> 
                    
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>m,</span> 


                    <img src={LogoTitle}  alt="developer" />
                    
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray} idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray} idx={22}
                    />
                </h1>
                <h2>Font-end developer / React - Next.js</h2>
                <Link to='/contact' className='flat-button'> CONTACT ME </Link>
            </div>
            <Logo/>
        </div>
    );
}

export default Home;