import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "open-sans" : require('../../assets/fonts/OpenSans-Regular.ttf'),
      "open-sans-bold" : require('../../assets/fonts/OpenSans-Bold.ttf')
    });
};