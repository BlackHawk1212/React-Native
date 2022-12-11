// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    /*<View 
    style={{
      padding: 50, 
      flexDirection: 'row', 
      width: '80%', 
      height: 300, 
      justifyContent: 'space-between', 
      alignItems: 'center'}}
      // width: '80%' from the parent component
      // alignItems: 'stretch'
      >
      <View style={{
          backgroundColor: 'red',
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: 'center',
          allignments: 'center'
        }}>
          <Text>1</Text>
        </View>

        <View style={{
          backgroundColor: 'blue',
          // width: 100,
          // height: 100,
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>2</Text>
        </View>

        <View style={{
          backgroundColor: 'blue',
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>3</Text>
      </View>*/

    <View style={styles.appContainer}>
      {/* <View>
        <Text
          style={
            {
            margin: 16,
            borderWidth: 2,
            borderColor: "red",
            padding: 16,
            }
            styles.dummyText
          }
        >
          Another Piece of Text!
        </Text>
      </View>
      <Text
        style={
          { margin: 16, borderWidth: 2, borderColor: "red", padding: 16 }
          styles.dummyText
        }
      >
        Hello World!
      </Text>
      <StatusBar style="auto" />
      <Button title="Tap me!" /> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
        {/* <Text>List of Goals...</Text> */}
        {/* {courseGoals.map((goal) => ( */}

        {/* ))} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "blue",
  }*/
  appContainer: {
    flex: 1,
    // padding: 50,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
