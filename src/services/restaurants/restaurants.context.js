import React, {
  useState,
  createContext,
  useEffect,
  useContext,
} from 'react';
import { LocationContext } from '../location/location.context';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = loc => {
    setIsloading(true);
    setRestaurants([]);


    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then(results => {
        setError(null);
        setIsloading(false);
        setRestaurants(results);
      })
      .catch(err => {
        setRestaurants([]);
        setIsloading(false);
        setError(err);
      });

  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
