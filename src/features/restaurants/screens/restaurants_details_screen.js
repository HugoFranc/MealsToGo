import React from "react";
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant_info_card.component';
import { RestaurantDetails } from "../components/restaurant_details.component";

export const RestaurantDetailScreen = ({ route }) => {

    const { restaurant } = route.params;
    return (
        < SafeArea >
            <RestaurantInfoCard restaurant={restaurant} />
            <RestaurantDetails />
        </SafeArea >
    )

}