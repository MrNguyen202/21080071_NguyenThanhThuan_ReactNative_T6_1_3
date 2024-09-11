import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = (props) => {
  // Destructure the props
  const { label, isSelected, onSelectionChange} = props;

  return (
    // TouchableOpacity is used to handle the press event
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onSelectionChange}>
      <View style={styles.radioButton}>
        {/* Render a smaller circle inside the outer circle when isSelected is true */}
        {isSelected ? <View style={styles.radioButtonSelected} /> : null}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

// Styles for the RadioButton component
const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  radioButtonSelected: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
  },
  radioButtonLabel: {
    fontSize: 18,
    color: '#000',
  },
});

export { RadioButton };