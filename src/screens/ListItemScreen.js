import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
// import {Avatar,Card,Title,Paragraph,Button} from 'react-native-paper'

const ListItemScreen = () => {

    const myitems = [
        {
            name: "iphone",
            year: "2013",
            phone: "1234567890",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJ8Wgt_6HZ-Rln-AOBqk-AVMH_6KN7-ItnA&usqp=CAU",
            desc: "I want to sell this Iphone !"
        },
        {
            name: "Camera",
            year: "2013",
            phone: "1234567809",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FKviwZTvMI26YgcRD1fIXb0W5TdncuvoXA&usqp=CAU",
            desc: "I want to sell this Iphone !"
        }
    ]

    // const renderItem1 = () => {
    //     return (
    //         <Card>
    //             <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    //             <Card.Content>
    //             <Text variant="titleLarge">Card title</Text>
    //             <Text variant="bodyMedium">Card content</Text>
    //             </Card.Content>
    //             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    //             <Card.Actions>
    //             <Button>Cancel</Button>
    //             <Button>Ok</Button>
    //             </Card.Actions>
    //         </Card>
    //     ) 
    // }

    const renderItem = (title) => {
        return (
          <View style={styles.container}>
            <Text style={styles.text}>{title.name}</Text>
            <Text style={styles.text}>{title.desc}</Text>
            <Text style={styles.text}>{title.year}</Text>
            <Image source={{uri: title.image}} style={styles.image} />
            <View style={styles.action}>
                <TouchableOpacity>
                <Text style={styles.btn}>₹ 100 </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.btn}>Call Seller </Text>
                </TouchableOpacity>
            </View>
          </View>
        //   <View></View>
        );
      };

      const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FKviwZTvMI26YgcRD1fIXb0W5TdncuvoXA&usqp=CAU';


    return (
        <View>
            <FlatList 
            data={myitems}
            keyExtractor={(item) => item.phone}
            renderItem={({item}) => renderItem(item)}
            />
            {/* <Image source={require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FKviwZTvMI26YgcRD1fIXb0W5TdncuvoXA&usqp=CAU')}/> */}
            {/* <Image source={{ uri: imageUrl }} style={styles.image} />
            <Image source={require('../assets/download.jpg')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        // marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
    },
    image: {
        width: 300, // Adjust the width and height as needed
        height: 200,
    },
    btn: {
        color: 'blue',
        marginRight: 10,
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    card: {
        width: 200,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5, // Add elevation to the card
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
})

export default ListItemScreen;