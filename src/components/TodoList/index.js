import { Pressable, ScrollView, Text, View } from "react-native";
import TodoItem from "./TodoItem";
import styles from "./styles";

export default function TodoList({ posts, onStatusChange, onPostDelete }) { 
    //当Array作为一个props传递，用{}去destructure
    // const handleAddPostPress = () => {
    //     navigation.navigate('Add');
    // }

    // const handleGoBackPress = () => {
    //     navigation.goBack();
    // }

    const handlePostPress = (post) => {
        // navigation.navigate('Detail', post);
    }

    return (
        <>
            <ScrollView>
                {posts.map((post, index) => {
                    return (//must return JSX
                        <Pressable key={index} onPress={() => handlePostPress(post)}>
                            <TodoItem
                                {...post}
                                onStatusChange={onStatusChange}
                                onPostDelete={onPostDelete}
                            />
                        </Pressable>
                    )
                })}
                <View style={{ height: 90 }}></View>
            </ScrollView>

        </>
    );
}