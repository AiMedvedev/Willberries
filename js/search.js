const search = function() {
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');
    

    /* input.addEventListener('input', (event) => {
        console.log(event.target.value);
    }); */

    searchBtn.addEventListener('click', () => {
        console.log(input.value);
    });
}

search();