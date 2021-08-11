import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Header, Text, Image, Button } from 'react-native-elements';

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* <Header
                centerComponent={{ text: "Home", style: { color: "#fff", fontWeight: "bold",height: "10" } }}
                containerStyle={{ backgroundColor: "#999" }}
            /> */}
            <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
                <Text h3 style={{ marginVertical: 30 }}>Welcome</Text>
                <Image
                    source={{ uri: "https://source.unsplash.com/random/300x300" }}
                    style={{ width: 300, height: 300 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text style={{ marginVertical: 10 }}>いろいろな写真が表示されます。</Text>
            </View>
        </View >
    );
}

export default Home;