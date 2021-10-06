import React, { useContext } from "react";
import Helmet from "react-helmet";
import Context from "../store/Context";

const Seo = () => {
  const data = useContext(Context);

  return (
    <Helmet>
      <html lang="fr" />
      <title>{data?.seo.title}</title>
      <meta name="author" content={data?.seo.author} />
      <meta name="description" content={data?.seo.description} />

      <meta property="og:url" content={"http://www.alexandriebenkiki.com"} />
      <meta property="og:title" content={data?.seo.title} />
      <meta name="og:description" content={data?.seo.description} />
      <meta property="og:image" content={"http://www.alexandriebenkiki.com"} />

      <meta name="twitter:description" content={data?.seo.description} />
      <meta name="twitter:title" content={data?.seo.title} />
      <meta name="twitter:creator" content={data?.seo.author} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={"http://www.alexandriebenkiki.com"} />
    </Helmet>
  );
};

export default Seo;
