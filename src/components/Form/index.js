import { useState } from "react";
import { View, Text, TextInput, Switch, Button, Pressable } from "react-native";
import styles from "./styles";

export default function Form({ navigation, onAddPost }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [published, setPublished] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const handleSavePress = () => {
        const validate = [];

        //validate the date
        if (title === '') {
            validate.push('The title is required.');
        }


        if (validate.length > 0) {
            setErrorMessages(validate);
        } else {
            //add data to state
            onAddPost(title, description, published);

            //clear up the form
            setTitle('');
            setDescription('');
            setPublished(false);
            setErrorMessages([]);

            navigation.goBack();
        }
    }

    const handleTitleChange = (value) => {
        setTitle(value);
    }

    const handleDescriptionChange = (value) => {
        setDescription(value);
        //use callback function when we have more operate
    }


    const hanleLabelPress = () => {
        setPublished(!published);
    }

    return (
        <View style={styles.container}>
            <View style={styles.title.container}>
                <Text style={styles.title.label}>Add a new Todo:</Text>
            </View>
            {/*conditionally display the error message */}
            {errorMessages.length > 0 && (
                <>
                    <Text style={styles.errorMessageTitle}>Invalid data:</Text>
                    {errorMessages.map((errMsg, index) => (
                        <Text key={index} style={styles.errorMessageItem}>
                            - {errMsg}
                        </Text>
                    ))}
                </>
            )}

            <TextInput
                style={styles.textInput}
                placeholder="Title"
                value={title}
                onChangeText={handleTitleChange}
            />
            {/* <TextInput
                style={[styles.textInput, styles.textInputDescription]}
                placeholder="Description"
                multiline={true}
                value={description}
                onChangeText={setDescription}
            /> */}

            <View style={styles.switch}>
                <Switch
                    value={published}
                    onValueChange={setPublished}
                />
                <Pressable onPress={hanleLabelPress}>
                    <Text style={styles.switchText}>Status</Text>
                </Pressable>
            </View>
            <Button title="Save" onPress={handleSavePress} />
        </View>
    );
}