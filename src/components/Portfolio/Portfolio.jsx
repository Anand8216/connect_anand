import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
    const data=[
        {
            id:1,
            image: IMG1,
            title: 'Portfolio Design',
            github: 'https://github.com/Anand8216',
            demo: 'https://anandshubhamportfolio.netlify.app'
        
          },
          {
            id: 2,
            image: IMG2,
            title: 'E-Commerce',
            github: 'https://github.com/Anand8216',
            demo: 'https://resplendent-cajeta-c16b27.netlify.app'
        
          },
          {
            id: 3,
            image: IMG3,
            title: 'Art && Crafts',
            github: 'https://github.com/Anand8216',
            demo: 'https://bossss.netlify.app'
        
          },
          {
            id: 4,
            image: IMG4,
            title: 'Blur Portfolio',
            github: 'https://github.com/Anand8216',
            demo: 'https://portfolioana.netlify.app'
        
          },
          {
            id: 5,
            image: IMG5,
            title: 'Movie Website',
            github: 'https://github.com/Anand8216',
            demo: 'https://movieorwot.netlify.app'
        
          },
          {
            id: 6,
            image: IMG6,
            title: 'Stone Paper & Scissor',
            github: 'https://github.com/Anand8216',
            demo: 'https://shubhampro.netlify.app'
        
          },
    ]
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
