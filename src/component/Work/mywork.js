import React from 'react';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetter/animate';
import './mywork.scss';
import portfolioData from '../../data/portfolio.json'


const Work = () => {
  

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img src={port.cover} alt="portfolio" />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters className='animate-text'
                    strArray={['M','y',' ','w','o','r','k']}
                                    
                    idx={15}
                    />
                </h1>
              <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">

                   
                </div>
            </div>
        </div>
    )
}

export default Work;