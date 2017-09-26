// import libraries for making a component.
import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = (props) => 
    {
        const { textStyle, viewStyle } = styles;
    return (<View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
            </View>
    );
    };

const styles = {
    viewStyle: {
        backgroundColor: '#F39C12',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
    }    
};
// make the component 
export default Header;
