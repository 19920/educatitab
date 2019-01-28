import React from 'react';
import moment from 'moment';
import {View,ScrollView,Text,TouchableOpacity } from 'react-native';


export default function CompletedTestTableRow(props) {
    const {name,startLevel,startDate,schoolName,customerTestId } = props
    const niceDate = moment(startDate).format("YYYY-MM-DD [kl.] HH:mm");
  return (
      <View>
            <ScrollView>
              <Text>Test:{name}</Text>
              <Text>Startnivå:{startLevel}</Text>
              <Text>Date:{niceDate}</Text>
              <Text>Skola:{schoolName}</Text>
              <Text>
                  <TouchableOpacity onPress={props.profilePdf(customerTestId)}>
                      <Text>TestProfil:{customerTestId}</Text>
                  </TouchableOpacity>
              </Text>
              </ScrollView> 
      </View>
  )
}
