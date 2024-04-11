import React from 'react'
import { useGetColorQuery } from '../../../features/api/colors';

const FilterBy = () => {
    const { data, loading, error } = useGetColorQuery();

    // as we don't have error and loading page so we are just showing error message and loading status
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    return (
        <div>FilterBy</div>
    )
}

export default FilterBy