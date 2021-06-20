const API_URL = `https://fakestoreapi.com/products`;



export const fetchProductById = async (id) => await fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);



export const fetchProducts = async () => await fetch(`${API_URL}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);





