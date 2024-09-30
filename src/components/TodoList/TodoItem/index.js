import { View, Text, Switch, Pressable, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "./styles";

export default function TodoItem({ id, title, description, published, onStatusChange, onPostDelete }) {

    const handleLabelPress = () => {
        onStatusChange(!published, id);
    }

    const handleDeletePress = () => {
        Alert.alert(
            'Delete Post',
            `This message will delete the post ${title}. \nAre you sure?`,
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        onPostDelete(id);
                    }
                },
                {
                    text: 'No',
                }
            ]
        );
    }

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {/* <Text style={styles.description}>
                    {description}
                </Text> */}
            </View>

            <View style={styles.buttons}>
                <View style={styles.switch}>
                    <Switch
                        value={published}
                        onValueChange={(value) => onStatusChange(value, id)}
                    />
                    <Pressable onPress={handleLabelPress}>
                        <Text style={styles.switchText}>Status</Text>
                    </Pressable>
                </View>

                <AntDesign.Button
                    name="delete"
                    size={24}
                    color="#cc0000"
                    backgroundColor="transparent"
                    underlayColor="#ffdddd"
                    onPress={handleDeletePress}
                >
                    Delete
                </AntDesign.Button>
            </View>
        </View>
    );
}