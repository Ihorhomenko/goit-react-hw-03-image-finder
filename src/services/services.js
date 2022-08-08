function fetchImages (searchValue, page) {
    const KEY = '25076604-b2f6a049f29fb1061528c9102';
    return fetch(`https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))})
}

const ApiImage = {
    fetchImages
}

export default ApiImage