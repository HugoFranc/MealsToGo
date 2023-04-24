import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';
import { Searchbar } from 'react-native-paper';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[2]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const SearchBar = styled(Searchbar)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
