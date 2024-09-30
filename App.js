import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import uuid from 'react-uuid';

//Create the Tab controller
const Tab = createBottomTabNavigator();

export default function App() {

  const [posts, setPosts] = useState([
    {
      id: uuid(),
      title: 'Todo 1',
      // description: 'Description of the first post',
      published: true
    }
  ]);

  const handleStatusChange = (value, id) => {
    console.log('New status:', value, id);
    const updatePosts = posts.map((post) => {
      if (post.id === id) {
        post.published = value;
      }
      return post;
    });

    setPosts(updatePosts);
  }

  const handlePostDelete = (id) => {
    const filterPosts = posts.filter((post) => post.id != id);
    setPosts(filterPosts);
  }

  const handleAddPost = (title, description, published) => {
    const newPost = {
      id: uuid(),
      //then in Json you can use shortcut
      title,  //same with title: title, 
      description: description,
      published: published
    }

    const updatedPosts = [...posts, newPost];

    //setPosts() will check updatedPosts and posts 是否有区别，有区别才会触发页面刷新
    //因此不能直接posts.push(newPost)后，再将其posts传给setPosts(posts)，这样setPosts比较的是同个Object
    setPosts(updatedPosts);

  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarActiveBackgroundColor: 'dodgerblue',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'list' : 'list-ul'
            } else if (route.name === 'Add') {
              iconName = focused ? 'plus' : 'plus-circle'
            }
            return <Icon name={iconName} size={24} color={color} />
          }
        })}
      >
        <Tab.Screen name='Home' >
          {(props) => (
            <HomeScreen
              {...props}
              posts={posts}
              onStatusChange={handleStatusChange}
              onPostDelete={handlePostDelete}
              onAddPost={handleAddPost}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name='Add' >
          {(props) => (
            <AddTodoScreen {...props} onAddPost={handleAddPost} />
          )}

        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
