import config from '../config';

export default {
  event(eventId) {
    return fetch(`${config.api}/event/${eventId}`)
      .then(res => res.json())
      .catch(error => {
        console.warn(error);
      });
  }
}
