import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Text } from 'react-native-elements';

const Exit = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack(null);
    }}
    style={{ margin: 10 }}
  >
    <Text>Exit</Text>
  </TouchableOpacity>
);

Exit.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Exit;
