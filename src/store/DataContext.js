import React from "react";

const DataContext = React.createContext({
  hero: {
    about: "A propos",
    project: "Projets",
    contact: "Contact",
    copyright: "© 2021",
    logo: "Alexandrie Benkiki Developpeur Front-End",
  },
  about: {
    image: {
      src: "/image/img.jpg",
      alt: "Photo de profil",
    },
    presentation: {
      heading: "A propos",
      content:
        "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum.",
    },
  },
  contact: {
    design: { number: "21" },
    informations: {
      title: {
        heading: "Contact",
        year: "2021",
      },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        bouton: "Envoyer",
      },
      network: {
        note: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.",
        email: "mailto:alexandrie.be@gmail.com",
        instagram: "https://www.instagram.com/alexandriebnk/?hl=fr",
        linkedIn: "https://www.linkedin.com/in/alexandrie-benkiki/",
      },
    },
  },
});

export default DataContext;
