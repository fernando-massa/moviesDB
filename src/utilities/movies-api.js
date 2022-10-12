import sendRequest from './send-request';
const BASE_URL = '/api/movies';

export function search(query) {
  return sendRequest(BASE_URL, 'POST', {query});
}

export function addMovies(movie) {
  return sendRequest(`${BASE_URL}/add`, 'POST', movie);
}

export function getCollection(collection) {
  return sendRequest(BASE_URL)
}

export function deleteMovies(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export function addComment(comment, id) {
  return sendRequest(`${BASE_URL}/${id}/comments`, 'POST', {comment})
}