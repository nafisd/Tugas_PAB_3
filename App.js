import {useState, useRef} from 'react'
import { DrawerLayoutAndroid, StyleSheet, Text, View, StatusBar, } from 'react-native';
import Header from './components/header';
import List from "./screens/list";
import Article from "./screens/article";
import Button from './components/button';
import Separator from './components/separator';

const App = () => {
  const [page, setPage] = useState("list");
  const drawer = useRef(null);
  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };

  const navigationView = () => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}> 
      <Button text="List" onPress={() => changePage(drawer, "list")}/>
      <Separator height={30} />
      <Button text="Article" onPress={() => changePage(drawer, "article")} />
      <Separator height={30} />
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );
  
  return (
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition='left'
    renderNavigationView={navigationView}
    >
      <StatusBar style='light' backgroundColor='#AA0002' />
      <View>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : null}
      </View>
    </DrawerLayoutAndroid>
  );
};

export default App;