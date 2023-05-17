import { Text, StyleSheet, Dimensions, View, Platform} from "react-native"

function Title({children}) {
    return <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
        </View>
        
}

export default Title

const deviceWidth = Dimensions.get('window').width
console.log('what is the device width for title? ', deviceWidth)

const deviceHeight = Dimensions.get('window').height
console.log('what is device height for title? ', deviceHeight)

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: "center",
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%'
    },
    titleContainer: {
        paddingTop: deviceWidth > 400 ? 48 : 0
    }
})