import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CardElement from './CardElement';

const projects = [
  {
    name: 'CLient500',
    technologies: [
      'react ⚛️',
      'node',
      'javascript',
      'graphQl',
      'mongoDb',
      'puppeteer.js',
      'tesseract',
      'html',
      'css',
      'react-bootstrap',
    ],
    description:
      'This is a full stack SPA project including modern technologies like react, graphQl, react-router. This app scrapes data from people who sell their property and serves them with a friendly interface to real state agents.',
    url: 'https://github.com/Mackewinsson/client500scraper',
  },
  {
    name: 'Client500 Api-GraphQl',
    technologies: ['graphQl', 'node', 'javascript', 'mongoDb'],
    description:
      'This is an api to serve all the data needed by client500 frontend',
    url: 'https://github.com/Mackewinsson/apiclient500',
  },
  {
    name: 'React Gallery App',
    technologies: [
      'react ⚛️',
      'react-router',
      'javascript',
      'css',
      'html',
      'axios',
    ],
    description:
      'This project is a Gallary app developed in react that consumes the flirk api and shows pictures depending on the search you make',
    url: 'https://github.com/Mackewinsson/React-Gallery-App',
  },
  {
    name: 'Whatsapp link builder',
    technologies: ['react ⚛️', 'javascript', 'html', 'css', 'react-hooks'],
    description:
      "This project is a whatsapp link builder that builds a custom link that when clicked on any device will trigger the whatsapp app with the person's chat already opened",
    url: 'https://mackewinsson.github.io/whatsapplinkbuilder/',
  },

  {
    name: 'Bellascejas.com',
    technologies: [
      'node',
      'express',
      'javascript',
      'css',
      'html',
      'ejs',
      'bootstrap',
    ],
    description:
      'This project is an static website developed using node and express as main technologies. The client needed something simple and fast',
    url: 'https://bellascejas.com/',
  },
  {
    name: 'Harmonyspa.com',
    technologies: ['wordpress', 'javascript', 'html', 'css'],
    description:
      'This project was developed using wordpress and vanilla javascript for a client who needed those requirements',
    url: 'https://harmonyspa.cl/',
  },
  {
    name: 'Opengarage.cl',
    technologies: ['wordpress', 'javascript', 'html', 'css'],
    description:
      'This project was developed using wordpress and vanilla javascript for a client who needed those requirements, in the future they want to migrate to a more modern approach',
    url: 'https://www.opengarage.cl/',
  },
  {
    name: 'Udemy.com Scraper',
    technologies: ['node', 'request-promise', 'cheerio'],
    description:
      'This is scraper that scrapes courses data and coverts it to plain text or csv so you can use it however you want',
    url: 'https://github.com/Mackewinsson/udemyscraper',
  },
  {
    name: 'Chileservicios.cl Scraper',
    technologies: ['node', 'javascript', 'request-promise', 'cheerio'],
    description:
      "This is a scraper that scrapes contact data from company's directory and converts it to csv so anyone can use it however they want",
    url: 'https://www.opengarage.cl/',
  },
];

const CardsContainer = () => {
  const cardProjects = projects.map((el, i) => (
    <CardElement
      key={i + 1}
      name={el.name}
      technologies={el.technologies}
      description={el.description}
      url={el.url}
    />
  ));

  // Render two columns card columns
  if (cardProjects.length > 3) {
    const a = cardProjects.slice(0, 3);
    const b = cardProjects.slice(3, 6);
    const c = cardProjects.slice(6, 9);
    return (
      <>
        <CardDeck>{a}</CardDeck>
        <br />
        <br />
        <CardDeck>{b}</CardDeck>
        <br />
        <br />
        <CardDeck>{c}</CardDeck>
      </>
    );
  } else {
    return <CardDeck>{cardProjects}</CardDeck>;
  }
};

export default CardsContainer;
