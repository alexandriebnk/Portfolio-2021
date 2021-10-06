import React, { useState, useEffect } from "react";
import Prismic from "@prismicio/client";
import "./sass/app.scss";
import Seo from "./components/Seo";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Context from "./store/Context";

function App() {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const apiEndpoint = process.env.REACT_APP_PRISMIC_ENDPOINT;
  const accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN;

  const Client = Prismic.client(apiEndpoint, { accessToken });

  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.any("document.type", [
        "hero",
        "about",
        "project",
        "contact",
        "seo",
      ])
    );
    if (response) {
      const seoResponse = response.results.filter(
        (result) => result.type === "seo"
      );
      const seoData = seoResponse[0].data;

      const heroResponse = response.results.filter(
        (result) => result.type === "hero"
      );
      const heroData = heroResponse[0].data;

      const aboutResponse = response.results.filter(
        (result) => result.type === "about"
      );
      const aboutData = aboutResponse[0].data;

      const projectsResponse = response.results.filter(
        (result) => result.type === "project"
      );

      const projectsData = projectsResponse.map((project) => {
        return {
          number: project.data.project_number,
          name: project.data.project_title,
          description: project.data.project_content,
          link: project.data.project_link.url,
        };
      });

      const contactResponse = response.results.filter(
        (result) => result.type === "contact"
      );
      const contactData = contactResponse[0].data;

      const data = {
        seo: {
          title: seoData.seo_title,
          author: seoData.seo_author,
          description: seoData.seo_description,
        },
        hero: {
          about: heroData.hero_about,
          project: heroData.hero_projects,
          contact: heroData.hero_contact,
          copyright: heroData.hero_copyright,
          logo: heroData.hero_logo,
        },
        about: {
          image: {
            src: aboutData.about_image.url,
            alt: aboutData.about_image.alt,
          },
          presentation: {
            heading: aboutData.about_title,
            content: aboutData.about_content,
          },
        },
        projectsList: projectsData.sort((a, b) => a.number - b.number),
        contact: {
          number: contactData.contact_number,
          informations: {
            title: {
              heading: contactData.contact_title_heading,
              year: contactData.contact_title_year,
            },
            form: {
              name: contactData.contact_form_name,
              email: contactData.contact_form_email,
              message: contactData.contact_form_message,
              button: contactData.contact_form_button,
            },
            network: {
              note: contactData.contact_network_note,
              email: contactData.contact_network_email,
              instagram: contactData.contact_network_instagram,
              linkedIn: contactData.contact_network_linkedin,
            },
          },
        },
      };
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    data && setIsLoaded(true);
  }, [data]);

  return (
    <Context.Provider value={data}>
      <Seo />
      <Loader loaded={isLoaded} />
      <Hero />
      <About />
      <Banner />
      <ProjectsList />
      <Contact />
    </Context.Provider>
  );
}

export default App;
