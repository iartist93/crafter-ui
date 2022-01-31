export interface usePropsStyleType {
  // colors
  color: string;
  bg: string;
  backgroundColor: string;

  // background
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;

  // border
  border: string | number;
  borderTop: string | number;
  borderRight: string | number;
  borderBottom: string | number;
  borderLeft: string | number;
  borderWidth: number | string;
  borderRadius: string | number;
  borderColor: string;

  // position
  position: string;
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;

  // layout
  w: string | number;
  h: string | number;
  maxW: string | number;
  maxH: string | number;
  overflow: string;
  overflowX: string;
  overflowY: string;
  display: string;

  // spacing
  p: number;
  px: number;
  py: number;
  pt: number;
  pr: number;
  pl: number;
  pb: number;
  m: number;
  mx: number;
  my: number;
  ml: number;
  mr: number;
  mt: number;
  mb: number;

  // typography
  fontSize: number;
  fontWeight: string | number;
  fontFamily: string;
  textAlign: string;
  letterSpacing: string;
  lineHeight: string;

  // flexbox
  alignItems: string;
  justifyContent: string;
  alignContent: string;
  flexWrap: string;
  flexBasis: string | number;
  flexDirection: string;
  flex: string;
  justifySelf: string;
  alignSelf: string;
  order: number;
}

function stringOrNumber(attribute) {
  return typeof attribute === 'string' ? attribute : attribute + 'px';
}

export default function usePropsStyle(props: usePropsStyleType) {
  const style = {};

  // colors
  if (props.color) style['color'] = props.color;
  if (props.bg) style['background-color'] = props.bg;
  if (props.backgroundColor) style['background-color'] = props.backgroundColor;

  // background
  if (props.backgroundImage) style['background-image'] = props.backgroundImage;
  if (props.backgroundSize) style['background-size'] = props.backgroundSize;
  if (props.backgroundPosition)
    style['background-position'] = props.backgroundPosition;
  if (props.backgroundRepeat)
    style['background-repeat'] = props.backgroundRepeat;

  // border
  if (props.border) style['border'] = stringOrNumber(props.border);
  if (props.borderTop) style['border-top'] = stringOrNumber(props.borderTop);
  if (props.borderRight)
    style['border-right'] = stringOrNumber(props.borderRight);
  if (props.borderBottom)
    style['border-bottom'] = stringOrNumber(props.borderBottom);
  if (props.borderLeft) style['border-left'] = stringOrNumber(props.borderLeft);
  if (props.borderWidth)
    style['border-width'] = stringOrNumber(props.borderWidth);
  if (props.borderRadius)
    style['border-radius'] = stringOrNumber(props.borderRadius);
  if (props.borderColor) style['border-color'] = props.borderColor;

  // position
  if (props.position) style['position'] = props.position;
  if (props.top) style['top'] = stringOrNumber(props.top);
  if (props.right) style['right'] = stringOrNumber(props.right);
  if (props.left) style['left'] = stringOrNumber(props.left);
  if (props.bottom) style['bottom'] = stringOrNumber(props.bottom);

  // layout
  if (props.w) style['width'] = stringOrNumber(props.w);
  if (props.h) style['height'] = stringOrNumber(props.h);
  if (props.maxW) style['max-width'] = stringOrNumber(props.maxW);
  if (props.maxH) style['max-height'] = stringOrNumber(props.maxH);
  if (props.overflow) style['overflow'] = props.overflow;
  if (props.overflowX) style['overflow-x'] = props.overflowX;
  if (props.overflowY) style['overflow-y'] = props.overflowY;
  if (props.display) style['display'] = props.display;

  // spacing
  if (props.p) style['padding'] = props.p;
  if (props.px) {
    style['padding-left'] = props.px;
    style['padding-right'] = props.px;
  }
  if (props.py) {
    style['padding-top'] = props.py;
    style['padding-bottom'] = props.py;
  }
  if (props.pr) style['padding-right'] = props.pr;
  if (props.pl) style['padding-left'] = props.pl;
  if (props.pt) style['padding-top'] = props.pt;
  if (props.pb) style['padding-bottom'] = props.pb;

  if (props.m) style['margin'] = props.m;
  if (props.mx) {
    style['margin-left'] = props.mx;
    style['margin-right'] = props.mx;
  }
  if (props.my) {
    style['margin-top'] = props.my;
    style['margin-bottom'] = props.my;
  }
  if (props.mr) style['margin-right'] = props.mr;
  if (props.ml) style['margin-left'] = props.ml;
  if (props.mt) style['margin-top'] = props.mt;
  if (props.mb) style['margin-bottom'] = props.mb;

  //typography
  if (props.fontSize) style['font-size'] = props.fontSize;
  if (props.fontWeight) style['font-weight'] = stringOrNumber(props.fontWeight);
  if (props.fontFamily) style['font-family'] = props.fontFamily;
  if (props.textAlign) style['text-align'] = props.textAlign;
  if (props.letterSpacing) style['letter-spacing'] = props.letterSpacing;
  if (props.lineHeight) style['line-height'] = props.lineHeight;

  // flexbox
  if (props.alignItems) style['align-items'] = props.alignItems;
  if (props.justifyContent) style['justify-content'] = props.justifyContent;
  if (props.alignContent) style['align-content'] = props.alignContent;
  if (props.flexWrap) style['flex-wrap'] = props.flexWrap;
  if (props.flexBasis) style['flex-basis'] = stringOrNumber(props.flexBasis);
  if (props.flexDirection) style['flex-direction'] = props.flexDirection;
  if (props.flex) style['flex'] = props.flex;
  if (props.justifySelf) style['justify-self'] = props.justifySelf;
  if (props.alignSelf) style['align-self'] = props.alignSelf;
  if (props.order) style['order'] = props.order;

  return style;
}