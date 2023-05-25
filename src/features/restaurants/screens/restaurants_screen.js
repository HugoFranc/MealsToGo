import React, { useContext } from 'react';
import { RestaurantInfoCard } from '../components/restaurant_info_card.component';
import styled from 'styled-components/native';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -20px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} size={'large'} color="#0000ff" />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
                <Spacer position={'bottom'} size={'large'}>
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea >
  );
};
