import React, { useContext } from "react";
import Helmet from "react-helmet";
import Context from "../store/Context";

const Seo = () => {
  const data = useContext(Context);

  return (
    <Helmet>
      <html lang="fr" />
      <title>
        {"Alexandrie Benkiki - Développeur Front-End" || data?.seo.title}
      </title>
      <meta name="author" content={data?.seo.author} />
      <meta name="description" content={data?.seo.description} />

      <meta property="og:url" content={"http://www.alexandrie.dev"} />
      <meta property="og:title" content={data?.seo.title} />
      <meta name="og:description" content={data?.seo.description} />
      <meta property="og:image" content={"http://www.alexandrie.dev/og.png"} />

      <meta name="twitter:description" content={data?.seo.description} />
      <meta name="twitter:title" content={data?.seo.title} />
      <meta name="twitter:creator" content={data?.seo.author} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={"http://www.alexandrie.dev/og.png"} />
    </Helmet>
  );
};

export default Seo;
