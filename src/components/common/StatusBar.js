import React from 'react';
import { View } from 'react-native';

function StatusBar( props ) {

    const styles = {
        statusBar: {
            width: '100%',
            height: 24,
            backgroundColor: props.color
        }
    }
    
    return (
        <View style={styles.statusBar} />
    )
}

export { StatusBar }