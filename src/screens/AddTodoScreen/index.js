import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import Form from '../../components/Form';

export default function AddTodoScreen({navigation, onAddPost }) {
    return (
        <Form navigation={navigation} onAddPost={onAddPost} />
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