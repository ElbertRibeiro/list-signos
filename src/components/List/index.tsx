import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

interface ListProps {
    signo: String,
    dataInicio: String,
    dataFim: String
}


export default function List(props:ListProps) {
  return (
    <View style={style.boxSigno}>
      <Text style={style.nameSigno}>
        {props.signo}
      </Text>
      <Text>
        Nascidos entre: {props.dataInicio} - {props.dataFim}
      </Text>
    </View>
  );
}