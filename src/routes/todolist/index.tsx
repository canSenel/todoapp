import React, { useEffect, useState, Profiler } from "react";
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
import { add, remove } from "../../images";
import { styles } from "./assets";
import { useSelector, useDispatch, useStore } from "react-redux";
import { storeItem, removeItem } from "../../states/itemreducer";
import { useFocusEffect } from "@react-navigation/native";
import { useGetPokemonByNameQuery } from "../../services/pokemon";

export interface PropsType {
  text: string;
  route: ParamsType;
  navigation: any;
}

interface ParamsType {
  params: ParamsPropType;
}

interface ParamsPropType {
  text: string;
}

interface ItemType {
  title: string;
}

const ListScreen: React.FC<PropsType> = (props): React.ReactNode => {
  const [toDoList, setToDoList] = useState<any[]>([]);
  const [toDoItem, setToDoItem] = useState("");
  const [userProfile, setUserProfile] = useState<any>({});
  const dispatch = useDispatch();
  // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const store = useStore();
  console.log("usestor", store.getState());
  useFocusEffect(React.useCallback(() => {}, []));

  // console.log("data", isLoading ? "null" : data.sprites.front_shiny);
  // console.log("isLoading", isLoading);

  const getGitHubProfile = (userName: string) => {
    return fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .catch(err => {
        console.log("err", err);
      });
  };

  // const getGitHubProfile = (userName: string) => {
  //   return fetch(`https://api.github.com/users/${userName}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       firstParam:"value"
  //     })
  //   })
  //     .then(res => res.json())
  //     .catch(err => {
  //       console.log("err", err);
  //     });
  // };

  useEffect(() => {
    setTimeout(() => {
      getGitHubProfile("canSenel").then(setUserProfile);
    }, 1000);
    // console.log("userprofile", userProfile.login);
    return () => {
      // cleanup if needed
    };
  }, []);

  const onItemClick = (key: any) => {
    setToDoList(
      toDoList.filter(item => {
        if (item.key !== key) {
          return true;
        }
      })
    );
    // dispatch(removeItem());
  };

  const Item = ({ title }: ItemType) => {
    return (
      <View>
        <Text> {title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }: React.ReactNode) => {
    return (
      <View style={styles.item}>
        <Item title={item.title} />
        <TouchableOpacity
          onPress={() => {
            onItemClick(item.key);
          }}
          style={styles.button}
        >
          <Image style={styles.removelogo} source={remove}></Image>
        </TouchableOpacity>
      </View>
    );
  };

  const addToDoItem = () => {
    if (toDoItem === "a") {
      Alert.alert("s", "temizlik yapılacak unutma ", [
        {
          text: "Cancel",
          onPress: () => console.log("OK Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
      setToDoList([
        ...toDoList,
        { title: "Temizlik yapıldı !!!", key: Date.now() }
      ]);
      setToDoItem("");
    } else {
      setToDoList([...toDoList, { title: toDoItem, key: Date.now() }]);
      setToDoItem("");
    }
  };

  const getHeader = () => {
    return userProfile && userProfile.login ? (
      <View style={styles.headerText}>
        <Text>
          {"TO DO LIST COUNT" + ` ${toDoList.length} ` + userProfile.login}
        </Text>
      </View>
    ) : (
      <View style={styles.headerText}>
        <Text>{"Loading..."}</Text>
      </View>
    );
  };

  const getFooter = () => {
    return null;
  };

  const navigateToDetail = () => {
    const { navigation } = props;
    console.log("todolist", toDoList);
    dispatch(storeItem(toDoList));
    navigation.navigate("ListItemDetailScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addNewItemContainer}>
        <TextInput
          onChangeText={toDoItem => setToDoItem(toDoItem)}
          value={toDoItem}
          style={styles.input}
          placeholder="Add new to do"
        ></TextInput>
        <TouchableOpacity onPress={() => addToDoItem()} style={styles.addText}>
          <Image style={styles.logo} source={add}></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        data={toDoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={getHeader}
        ListFooterComponent={getFooter}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={() => navigateToDetail()}
        style={styles.headerText}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListScreen;
