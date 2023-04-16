const paginate = (followers) => {
    const itemsPerPage = 9; // how many profiles we're gonna have for page
    const numberOfPages = Math.ceil(followers.length / itemsPerPage); // to calculate how many pages
    // math.ceil rounds the number down. Redondea al numero entero menor

    //create array of arrays
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
    });
    return newFollowers;
};

export default paginate;
