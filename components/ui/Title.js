import { Text, StyleSheet, Dimensions, View} from "react-native"

function Title({children}) {
    return <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
        </View>
        
}

export default Title

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: "center",
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%'
    },
    titleContainer: {
        paddingTop: deviceWidth < 380 ? 16 : 0
    }
})