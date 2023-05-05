

// const BASE_URL = `https://6454e366f803f34576340089.mockapi.io/user?page=1&limit=3`;

// export default function getUsers() {
//     return fetch(`${BASE_URL}`)
//         .then(resp => resp.json())
//         // .catch(error => console.log(error.message));
// }




export default function getUsers(page) {
    const url = new URL('https://6454e366f803f34576340089.mockapi.io/user');
    url.searchParams.append('page', page);
    url.searchParams.append('limit', 3);
    
    return fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    .then(res => res.json())
    .catch(error => error);
}

