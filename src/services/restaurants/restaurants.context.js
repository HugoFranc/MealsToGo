import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import {LocationContext} from '../location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = loc => {
    setIsloading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setIsloading(false);
          setRestaurants(results);
        })
        .catch(err => {
          setIsloading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider value={{restaurants, isLoading, error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
