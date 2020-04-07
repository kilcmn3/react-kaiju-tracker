// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:4000/kaijus/';
const sightingsURL = 'http://localhost:4000/sightings';
// parse incoming data
const parseData = (response) => response.json();
// error handler
const catchError = (error) => console.log(`%c${error}`, 'color: red;');

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () =>
  fetch(kaijusURL).then(parseData).catch(catchError);

// TODO: define a few more kaiju fetches
export const postKaijus = (data) => {
  fetch(kaijusURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const patchKaijus = (data, id) => {
  fetch(`${kaijusURL}/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const deleteKaijus = (data) => {
  fetch(`${kaijusURL}/${data.id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
};
//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () =>
  fetch(sightingsURL).then(parseData).catch(catchError);

// TODO: define a few more sighting fetches

export const fetchKaijuSightings = (id) =>
  fetch(`${sightingsURL}?kaijuId=${id}`).then(parseData).catch(catchError);

export const postSightings = (data) => {
  return fetch(sightingsURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(parseData)
    .catch(catchError);
};
