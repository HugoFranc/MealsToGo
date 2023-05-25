import React from "react"
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info'

export const MapCallouts = ({ restaurant }) => {
    return (
        <>
            <CompactRestaurantInfo restaurant={restaurant} />
        </>
    )
}