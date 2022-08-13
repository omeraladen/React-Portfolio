
import AnimatedLetters from '../AnimatedLetter/animate';
import './about.scss';

const About = () => {
    
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    strArray={['A','b','o','u','t',' ','m','e']}
                                    
                    idx={15}
                    />
                </h1>
                <p>I'm ambitious font-end developer looking for a role in 
                    established IT Company With the opportunity to
                     work with the latest technology's </p>
                <p></p>
            </div>

            
        </div>
    )
}

export default About;