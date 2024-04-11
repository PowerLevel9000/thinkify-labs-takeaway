import { useEffect, useState, useCallback } from "react";

// Custom hook for fetching data from an API
// Usage:
//   fetch data from an API
//   handle loading state
//   handle error state
//   handle success state
//   handle error message with reference to the component
const useFetch = (url, component = 'this Component') => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API and set the data, error, and loading state accordingly
    // callback function to fetch data from the API to prevent re-rendering and caching
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                // throw an error if the response is not ok
                // sometime 404 don't show the error message so I added a custom message for 404
                throw new Error(`
                    An error occurred while fetching the data of ${component}.
                    Status: ${response.status}
                    Status Text: ${response.status === 404 ? "Data Not Found" : response.statusText}
                `);
            }
            const data = await response.json();
            setData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url, component]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, error, loading };
}

export default useFetch;
