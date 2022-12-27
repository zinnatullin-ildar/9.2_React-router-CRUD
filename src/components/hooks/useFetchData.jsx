import { useEffect, useState } from "react";

function useFetchData(url, opts) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('Request');
            try {
                const response = await fetch(url, opts);
                if (response.ok) {
                    const data = await response.json();
                    setData(data)
                } else {
                    setData([]);
                }
            } catch (e) {
                console.log(e.message);
                setData([]);
            }
        }
        fetchData();
    }, [url, opts]);

    return [{ data }]
}

export default useFetchData;
