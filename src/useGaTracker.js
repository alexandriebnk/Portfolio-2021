import { useEffect } from "react";
import ReactGA from "react-ga";

const useGaTracker = () => {
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);
};

export default useGaTracker;
