import React from 'react';
import Card from './Card';
import './Card.css';


const News = () => {
  const articles = [
    {
      image: './stock1.jpeg',
      title: 'Spreading Endometriosis awareness',
      description: "FOX 13's Allie Corey shares the story of a woman diagnosed with Endometriosis, affecting 1 in 10 women of reproductive age.",
      link: 'https://www.fox13news.com/video/1618076'
    },
    {
      image: './stock1.jpeg',
      title: 'Alabama ruling on abortion assistance',
      description: "Alabama’s attorney general cannot prosecute those helping women travel out of state for abortion services.",
      link: 'https://www.cnn.com/2025/04/01/us/alabama-abortion-groups-ruling/index.html'
    },
    {
      image: './stock1.jpeg',
      title: 'PCOS: Internal and External Factors',
      description: 'Editorial overview on PCOS, genetics, lifestyle, and fertility factors.',
      link: 'https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1594718/abstract'
    },
    {
      image: 'pics/stock1.jpeg',
      title: 'When “women” and “diversity” are banned',
      description: 'A student’s research fellowship was cut short due to restricted language in health research.',
      link: 'https://www.pbs.org/newshour/health/what-happens-to-health-research-when-women-and-diversity-are-banned-words'
    }
  ];

  return (
    <div className="news">
      <div className="headings">
        <h1>Latest News To Read</h1>
      </div>
      <br />
      <div className="card-group">
        {articles.map((article, index) => (
          <Card
            key={index}
            image={article.image}
            title={article.title}
            description={article.description}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
