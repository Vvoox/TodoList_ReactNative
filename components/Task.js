import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Task = () => {

    return (
        <View style={styles.task}>
            <Text>This is a Task.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    task:{
        fontSize:14,
        fontWeight:'bold',
    }
});

export default Task;