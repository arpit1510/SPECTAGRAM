import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigation";
import Profile from "../screens/Profile";

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <DrawerNavigator.Navigator>
            <Drawer.Screen name = "Home" component = { TabNavigator} />
            <Drawer.Screen name = "Profile" component = { Profile } />
        </DrawerNavigator.Navigator>
    )
}