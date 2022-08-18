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
                                <img src={port.cover} 
                                     className='portfolio-image' 
                                     alt="portfolio" />

                                <div className="content">
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button
                                        className='btn'
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="container about-page">
            <div className="page-title">
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