export const createObject = async (queryString) => {
    try {
        const response = await fetch(queryString);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const res = await response.json(); 
        console.log("response",res);
        return res 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
};
