import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 20
  },
  scrollContainer: { flex: 1 },
  item: {
    padding: 10,
    marginVertical: 8,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8
  },
  title: {
    fontSize: 18
  },
  button: {
    borderRadius: 8
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 8
  },
  addText: {
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 8,
    height: 40,
    width: 40
  },
  headerText: {
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "violet",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 80,
    paddingVertical: 20
  },
  addNewItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "center",
    paddingHorizontal: 30
  },
  logo: {
    width: 24,
    height: 24
  },
  removelogo: {
    width: 40,
    height: 40
  }
});
