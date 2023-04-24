import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = searchKeyword => {
    setIsloading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setIsloading(false);
        setLocation(result);
        console.log(result);
      })
      .catch(err => {
        setIsloading(false);
        setError(err);
        console.log(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  );
};
