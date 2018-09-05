import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
// import App, { Content, Title, name } from "./App";
/*
import * as Zuli from "./App";
Output:
    {
        Title: function Title()
        default: function App()
        Content: function Content()
    }

import Zuli from './App';
Output: Component yang di export default

import { Title } from './App';
Output: Component Title yang di export biasa
*/

// const AppWrapper = () => (
//   <React.Fragment>
//     <App name={name} />
//     {/* <App name={"azhar"} /> */}
//     <Title name={name} />
//   </React.Fragment>
// );

AppRegistry.registerComponent("CloneStickyNote", () => App);
