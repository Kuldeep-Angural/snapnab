export const createObject = async (queryString) => {
    try {
        const response = await fetch(queryString);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        console.log("response",response.json());
        return response.json(); // Assuming response is JSON data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
};
