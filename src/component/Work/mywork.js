
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetter/animate';
import './mywork.scss';

const Work = () => {
    
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    strArray={['M','y',' ','w','o','r','k']}
                                    
                    idx={15}
                    />
                </h1>
              
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">

                   
                </div>
            </div>
        </div>
    )
}

export default Work;