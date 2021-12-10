import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import OpenloginReactNativeSdk, {
  LoginProvider,
  OpenloginNetwork,
} from 'openlogin-react-native-sdk';

export default function App() {
  const [authState, setAuthState] = React.useState({});

  React.useEffect(() => {
    OpenloginReactNativeSdk.addOpenloginAuthStateChangedEventListener(
      setAuthState
    );
    OpenloginReactNativeSdk.init({
      clientId:
        'BFDssx7rrb7p90lZ9l28PxB9fcIIai81pmOaMt1rMwzyQ-uWuG2srWRK_07Y55cNWbv2qVXVXNM-OXCW95c3TuQ',
      network: OpenloginNetwork.TESTNET,
      redirectUrl: 'com.example.openloginreactnativesdk://auth',
    })
      .then((result) => console.log(`success: ${result}`))
      .catch((err) => console.log(`error: ${err}`));
  }, []);

  // React.useEffect(() => {
  //   // OpenloginReactNativeSdk.multiply(3, 7).then(setResult);
  // }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() =>
          OpenloginReactNativeSdk.login({
            provider: LoginProvider.GOOGLE,
          })
            .then((result) => console.log(`success: ${result}`))
            .catch((err) => console.log(`error: ${err}`))
        }
      />
      <Button
        title="Logout"
        onPress={() =>
          OpenloginReactNativeSdk.logout({
            provider: LoginProvider.GOOGLE,
          })
            .then((result) => console.log(`success: ${result}`))
            .catch((err) => console.log(`error: ${err}`))
        }
      />
      <Text>Result: {JSON.stringify(authState)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
