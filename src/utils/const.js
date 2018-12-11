export const PATTERNS = {
  flex: /^flex(G|S)?(-\d*)?$/,
  height: /^height(G|S)?(-\d*)?$/,
  width: /^width(G|S)?(-\d*)?$/,
  padding: /^padding[LTRBHV]?(-\d*)?$/,
  margin: /^margin[LTRBHV]?(-\d*)?$/,
};

export const PADDING_VARIATIONS = {
  padding: 'padding',
  paddingL: 'paddingLeft',
  paddingT: 'paddingTop',
  paddingR: 'paddingRight',
  paddingB: 'paddingBottom',
  paddingH: 'paddingHorizontal',
  paddingV: 'paddingVertical',
};

export const MARGIN_VARIATIONS = {
  margin: 'margin',
  marginL: 'marginLeft',
  marginT: 'marginTop',
  marginR: 'marginRight',
  marginB: 'marginBottom',
  marginH: 'marginHorizontal',
  marginV: 'marginVertical',
};
