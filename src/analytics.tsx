// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("GTM-WK4TGF97"); // Substitua pelo seu ID de rastreamento do GA
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category:string, action:string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
