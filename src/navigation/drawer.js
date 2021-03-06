import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import Drawer from 'react-native-drawer';

const Burger = () => {
  const [toggle, setToggle] = useState(false);

  const ContentView = () => {
    return (
      <View style={styles.content}>
        <Pressable onPress={() => setToggle(true)}>
          <Text>toggle</Text>
        </Pressable>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit index.js</Text>
        <Text>Press Cmd+R to reload Cmd+Control+Z for dev menu</Text>
      </View>
    );
  };

  const Menu = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Text style={styles.listItem}>Home</Text>
          <Text style={styles.listItem}>Dashboard</Text>
          <Text style={styles.listItem}>Orders</Text>
          <Text style={styles.listItem}>Notifications</Text>
          <Text style={styles.listItem}>Activity</Text>
          <Text style={styles.listItem}>Logout</Text>
        </View>
        {/* <HomeOutlined /> */}
        {/* <PoweroffOutlined /> */}
        {/* <BellOutlined /> */}
      </View>
    );
  };

  return (
    <>
      <Drawer
        open={toggle}
        onClose={() => setToggle(false)}
        type={'overlay'}
        tapToClose={true}
        openDrawerOffset={0.25}
        content={<Menu />}>
        <ContentView />
      </Drawer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    justifyContent: 'center',
    // marginLeft: 50,
    // alignItems: 'center',
  },
  list: {
    marginLeft: 50,
  },
  listItem: {
    marginVertical: 10,
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Burger;

///////////////////////////////////////////////////////////////////////////////

// import 'react-native-gesture-handler';
// import React from 'react';
// import {View, Text} from 'react-native';
// // import Drawer from 'react-native-drawer';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {createDrawerNavigator} from '@react-navigation/drawer';
// // import Dashboard from '../screens/dashboard';
// // import Orders from '../screens/orders';
// // import Notifications from '../screens/notifications';
// // import ActivityFeed from '../screens/activityFeed';

// // const Drawer = createDrawerNavigator();

// const Burger = () => {
//   return (
//     <>
//       <View>
//         <Text>Hello</Text>
//       </View>
//       {/* <Drawer
//         type="static"
//         content={<Orders />}
//         tapToClose={true}
//         openDrawerOffset={0.2}
//         panCloseMask={0.2}>
//         <Dashboard />
//       </Drawer> */}
//       {/* <NavigationContainer>
//         <Drawer.Navigator initialRouteName="dashboard">
//           <Drawer.Screen name="dashboard" component={Dashboard} />
//           <Drawer.Screen name="orders" component={Orders} />
//           <Drawer.Screen name="notifications" component={Notifications} />
//           <Drawer.Screen name="activityFeed" component={ActivityFeed} />
//         </Drawer.Navigator>
//       </NavigationContainer> */}
//     </>
//   );
// };

// export default Burger;
