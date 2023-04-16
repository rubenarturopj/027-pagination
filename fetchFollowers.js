const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error while fetching. Fetch not fulfilled");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchFollowers;
