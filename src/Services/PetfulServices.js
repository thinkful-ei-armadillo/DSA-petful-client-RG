import config from '../config';

const PetfulServices = {
    getDogs() {
      return fetch(`${config.API_ENDPOINT}/dog`)
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getCats(){
        return fetch(`${config.API_ENDPOINT}/cat`)
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}
export default PetfulServices;