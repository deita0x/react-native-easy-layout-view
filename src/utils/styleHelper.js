import { PATTERNS, PADDING_VARIATIONS, MARGIN_VARIATIONS } from './const';

function getKeyValueStyle(type, props) {
  let style = {}, pattern;

  if (type === 'height') { pattern = PATTERNS.height; }
  if (type === 'width') { pattern = PATTERNS.width; }
  if (type === 'flex') { pattern = PATTERNS.flex; }

  for (let prop in props) {
    if (pattern.test(prop)) {
      const [key, value] = prop.split('-');

      if (value) {
        style[key] = Number(value);
      } else {
        style[key] = type === 'flex' ? 1 : 0
      }
    }
  }

  return style;
}

function getPaddingMarginStyle(type, props) {
  let style = {}, pattern, variations, validValues;
  const keys = Object.keys(props);

  if (type === 'padding') {
    pattern = PATTERNS.padding;
    variations = PADDING_VARIATIONS;
  }
  if (type === 'margin') {
    pattern = PATTERNS.margin;
    variations = MARGIN_VARIATIONS;
  }

  validValues = keys.filter(key => pattern.test(key) && key);

  validValues.forEach(validValue => {
    const [key, value] = validValue.split('-');
    for (styleType in variations) {
      if (styleType === key) {
        const styleName = variations[styleType];
        style[styleName] = value ? Number(value) : 0;
      }
    }
  });

  return style;
};

const StyleHelper = {
  extractFlexValue: props => {
    return getKeyValueStyle('flex', props);
  },

  extractFlexDirection: props => {
    const keys = Object.keys(props);
    const validFlexDirection = keys.filter(key => key === 'row' || key === 'column' && key);
    const lastProp = validFlexDirection[validFlexDirection.length - 1];

    return lastProp ? { flexDirection: lastProp } : null;
  },

  extractAlignmentsValues: props => {
    const { row, center } = props;
    const alignments = {};
    const alignmentRules = {};

    if (row) {
      alignmentRules.justifyContent = ['left', 'right', 'centerH', 'spread'];
      alignmentRules.alignItems = ['top', 'bottom', 'centerV'];
    } else {
      alignmentRules.justifyContent = ['top', 'bottom', 'centerV', 'spread'];
      alignmentRules.alignItems = ['left', 'right', 'centerH'];
    }

    for (let aligment in alignmentRules) {
      const value = alignmentRules[aligment];

      for (let i in value) {
        const position = value[i];

        if (props[position]) {
          if (['top', 'left'].includes(position)) {
            alignments[aligment] = 'flex-start';
          } else if (['bottom', 'right'].includes(position)) {
            alignments[aligment] = 'flex-end';
          } else if (['centerH', 'centerV'].includes(position)) {
            alignments[aligment] = 'center';
          } else if (position === 'spread') {
            alignments[aligment] = 'space-between';
          }
        }
      }
    }

    if (center) {
      alignments.justifyContent = 'center';
      alignments.alignItems = 'center';
    }

    return alignments;
  },

  extractHeight: props => {
    return getKeyValueStyle('height', props);
  },

  extractWidth: props => {
    return getKeyValueStyle('width', props);
  },

  extractPadding: props => {
    return getPaddingMarginStyle('padding', props);
  },

  extractMargin: props => {
    return getPaddingMarginStyle('margin', props);
  },
};

export default StyleHelper;
