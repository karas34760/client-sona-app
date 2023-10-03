import Router from 'next/router';
import ReactGA from 'react-ga4';

export const logPageView = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname,
    title: document.title,
  });
};
export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};

export function logPageViews() {
  logPageView();
  Router.events.on('routeChangeComplete', () => {
    logPageView();
  });
}

export const initGA = (UA: string) => {
  if (UA && typeof window) {
    ReactGA.initialize(UA);
    logPageViews();
  }
};
