import { Button, StyleSheet, Text, View } from 'react-native';
import TodoList from '../../components/TodoList';

export default function HomeScreen({ avigation, route, posts, onStatusChange, onPostDelete, onAddPost }) {
    return (
        <TodoList
        posts={posts}
        onStatusChange={onStatusChange}
        onPostDelete={onPostDelete}
       />
    // <Text>HomeScreen text</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});