import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export interface PropsType {
  text: string;
  route: ParamsType;
  navigation: Object;
}

interface ParamsType {
  params: ParamsPropType;
}

interface ParamsPropType {
  text: string;
}

const HomeScreen: React.FC<PropsType> = (props): React.ReactNode => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen {props.route.params.text}</Text>
      <TouchableOpacity
        onPress={() => onClickPress(props.navigation)}
        style={styles.button}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const onClickPress = (navigation: any) => {
  navigation.navigate("ListScreen");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#F3F3F3",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 100
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
export default HomeScreen;
