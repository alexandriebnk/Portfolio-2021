import React from "react";
import Helmet from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      <html lang="fr" />
      <title>Alexandrie Benkiki - Développeur Front-End</title>
      <meta name="author" content="Alexandrie Benkiki" />
      <meta
        name="description"
        content="Portfolio - Alexandrie Benkiki, développeur Front-End. Technologies : HTML/CSS, SASS, Javascript, ReactJS, GSAP, Webpack, Figma."
      />

      <meta property="og:url" content={"https://www.alexandrie.dev"} />
      <meta
        property="og:title"
        content="Alexandrie Benkiki - Développeur Front-End"
      />
      <meta
        name="og:description"
        content="Portfolio - Alexandrie Benkiki, développeur Front-End. Technologies : HTML/CSS, SASS, Javascript, ReactJS, GSAP, Webpack, Figma."
      />
      <meta property="og:image" content={"https://www.alexandrie.dev/og.png"} />

      <meta
        name="twitter:description"
        content="Portfolio - Alexandrie Benkiki, développeur Front-End. Technologies : HTML/CSS, SASS, Javascript, ReactJS, GSAP, Webpack, Figma."
      />
      <meta
        name="twitter:title"
        content="Alexandrie Benkiki - Développeur Front-End"
      />
      <meta name="twitter:creator" content="Alexandrie Benkiki" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content={"https://www.alexandrie.dev/og.png"}
      />
    </Helmet>
  );
};

export default Seo;
