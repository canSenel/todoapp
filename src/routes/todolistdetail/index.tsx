import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from "react-native";
import { remove } from "../../images";
import { styles } from "./assets";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../states/itemreducer";

export interface PropsType {}

const ListItemDetailScreen: React.FC<PropsType> = (): React.ReactNode => {
  const itemName = useSelector((state: any) =>
    state.item.value[0] ? state.item.value[0].title : "not selected item"
  );
  const item = useSelector((state: any) => state.item);
  const dispatch = useDispatch();
  const [toDoItem, setToDoItem] = useState("");
  const [toDoList, setToDoList] = useState<any[]>([]);

  const onItemClick = () => {
    dispatch(removeItem(item));
  };

  return (
    <View style={styles.addNewItemContainer}>
      <Text style={styles.input}>{itemName}</Text>
      <TouchableOpacity
        onPress={() => {
          onItemClick();
        }}
        style={styles.addText}
      >
        <Image style={styles.logo} source={remove}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default ListItemDetailScreen;
