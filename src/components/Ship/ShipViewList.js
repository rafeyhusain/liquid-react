import React from 'react'
import ShipViewItem from './ShipViewItem'

export default function ShipViewList({ urls }) {
    return (
        <>
            {urls.map(url => (
                <ShipViewItem key={url} url={url}></ShipViewItem>
            ))}
        </>
    )
}

