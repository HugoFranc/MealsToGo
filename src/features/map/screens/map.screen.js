import React, { useContext, useEffect, useState } from 'react';
import MapView, { Marker, Callout, MapCallout } from 'react-native-maps'
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';
import { MapCallouts } from '../components/map-callout.component';

const Map = styled(MapView)`
    height: 100%;
    width: 100%
`

export const MapScreen = ({ navigation }) => {

    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantContext)
    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport])

    return (
        <>
            <Search />
            <Map
                region={{ latitude: lat, longitude: lng, latitudeDelta: latDelta, longitudeDelta: 0.02, }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <Marker
                            title={restaurant.name}
                            key={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng
                            }}
                        >
                            <Callout onPress={() => navigation.navigate("RestaurantDetail", { restaurant: restaurant })}>
                                <MapCallouts restaurant={restaurant} />
                            </Callout>

                        </Marker>
                    );

                })}
            </Map>
        </>
    )
};
