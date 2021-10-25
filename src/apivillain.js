const baseAPI = '/api';

const villainService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/villains`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(villain) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/villain`, {
        method: 'PUT',
        body: JSON.stringify(villain),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(villain) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/villain`, {
        method: 'POST',
        body: JSON.stringify(villain),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(villain) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/villain/${villain.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default villainService;
