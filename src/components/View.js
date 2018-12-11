import React from 'react';
import { View as RNView, SafeAreaView } from 'react-native';

import { StyleHelper } from '../utils';

const View = props => {
  const { useSafeArea } = props;
  const StyledView = useSafeArea ? SafeAreaView : RNView;
  const baseStyle = {
    ...StyleHelper.extractFlexValue(props),
    ...StyleHelper.extractFlexDirection(props),
    ...StyleHelper.extractAlignmentsValues(props),
    ...StyleHelper.extractHeight(props),
    ...StyleHelper.extractWidth(props),
    ...StyleHelper.extractPadding(props),
    ...StyleHelper.extractMargin(props),
  };

  return (
    <StyledView style={[baseStyle, props.style]}>
      {props.children}
    </StyledView>
  );
};

export default View;
