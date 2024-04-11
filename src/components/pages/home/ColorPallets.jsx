import React from 'react'
import { useGetColorQuery } from '../../../features/api/colors';

const ColorPallets = ({handleFunction, backgroundColor}) => {
    const { data, loading, error } = useGetColorQuery();
    return (
        <div className="background-colors">
            {data && data.colors.map((color) => (
                <div
                    style={{ backgroundColor: color }}
                    key={color}
                    className={`color-box ${backgroundColor === color ? 'selected' : ''}`}
                    onClick={handleFunction}
                >
                </div>
            ))}
        </div>
    )
}

export default ColorPallets