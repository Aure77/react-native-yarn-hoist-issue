// Fix crash in prod builds
// https://github.com/kmagiera/react-native-gesture-handler/issues/320#issuecomment-443815828
import "react-native-gesture-handler";

// Regular imports
import { AppRegistry } from "react-native";
import "react-native-get-random-values";

import App from "./src/App";

AppRegistry.registerComponent("app1", () => App);
