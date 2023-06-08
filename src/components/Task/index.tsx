import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
type Props = {
    Ttext: string;
    onRemove: () => void;
}

export function Task({ Ttext, onRemove }: Props){

    const [isChecked, setChecked] = useState(false);
    return(
        <View style={styles.task}>
        <Checkbox style={styles.checkbox}
            value={isChecked}
           onValueChange={setChecked}
           color={isChecked ? '#5E60CE' : undefined}  

        />
       <Text style={styles.tasktext}>{Ttext}</Text>
       <TouchableOpacity style={styles.taskbutton} onPress={onRemove} >
           <Image source={require ('../../../assets/trash.png')} />
       </TouchableOpacity>
</View>

    );
}