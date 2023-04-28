import React from "react";
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant_info_card.component';


export const RestaurantDetailScreen = ({ route }) => {

    const { restaurantInfo } = route.params;
    return (
        < SafeArea >
            <RestaurantInfoCard restaurant={restaurantInfo} />
        </SafeArea >
    )

}