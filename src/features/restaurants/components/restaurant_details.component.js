import React, { useState } from "react";
import { List } from 'react-native-paper';
import { ScrollView, StyleSheet } from "react-native";


ListItem = props => {
    return (
        <List.Item title={props.title} titleStyle={{ fontSize: 14 }} style={{ paddingLeft: 30 }} />
    )
}

export const RestaurantDetails = () => {
    const [Breakfastexpanded, setBreakfastExpanded] = useState(true);
    const [Lunchexpanded, setLunchExpanded] = useState(true);
    const [Dinnerexpanded, setDinnerExpanded] = useState(true);
    const [Drinksexpanded, setDrinkExpanded] = useState(true);

    return (
        <ScrollView>
            <List.Section>
                <List.Accordion
                    theme={{ colors: { background: 'transparent' } }}
                    title="Breakfast"
                    left={props => <List.Icon{...props} icon="bread-slice" />}
                    expanded={Breakfastexpanded}
                    onPress={() => setBreakfastExpanded(!Breakfastexpanded)}>
                    {ListItem({ title: 'Eggs W Bacon' })}
                    {ListItem({ title: 'Classic Breakfast' })}
                </List.Accordion>

                <List.Accordion
                    theme={{ colors: { background: 'transparent' } }}
                    title="Lunch"
                    left={props => <List.Icon{...props} icon="hamburger" />}
                    expanded={Lunchexpanded}
                    onPress={() => setLunchExpanded(!Lunchexpanded)}>
                    {ListItem({ title: 'Sandwich' })}
                    {ListItem({ title: 'Tamales' })}
                </List.Accordion>

                <List.Accordion
                    theme={{ colors: { background: 'transparent' } }}
                    title="Dinner"
                    left={props => <List.Icon{...props} icon="food-variant" />}
                    expanded={Dinnerexpanded}
                    onPress={() => setDinnerExpanded(!Dinnerexpanded)}>
                    {ListItem({ title: 'Burger w/ Fries' })}
                    {ListItem({ title: 'Fajitas' })}
                    {ListItem({ title: 'Scrambled Egg' })}
                </List.Accordion>

                <List.Accordion
                    theme={{ colors: { background: 'transparent' } }}
                    title="Drinks"
                    left={props => <List.Icon{...props} icon="cup" />}
                    expanded={Drinksexpanded}
                    onPress={() => setDrinkExpanded(!Drinksexpanded)}>
                    {ListItem({ title: 'Coke' })}
                    {ListItem({ title: 'Diet Coke' })}
                    {ListItem({ title: 'Fanta' })}
                    {ListItem({ title: 'Sprite' })}
                    {ListItem({ title: 'Orange Juice' })}
                    {ListItem({ title: 'Coffee' })}
                </List.Accordion>

            </List.Section>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    setFontSizeOne: {
        fontSize: 15 // Define font size here in Pixels
    },
})