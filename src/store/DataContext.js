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
      src: "http://localhost:3000/image/img.jpg",
      alt: "Photo de profil",
    },
    presentation: {
      heading: "A propos",
      content:
        "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum.",
    },
  },
  contact: {
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
      email: { title1: "Email", email: "alexandrie.be@gmail.com" },
      instagram: { title2: "Instagram", instagram: "alexandriebnk" },
      linkedIn: { title3: "LinkedIn", linkedIn: "Alexandrie Benkiki" },
    },
  },
});

export default DataContext;
