import { r as reactExports, _ as __rest, R as React, a as __assign, c as classNames, P as PropTypes, b as colorPropType } from "./index-CiKRmcYv.js";
var CCard = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, textBgColor = _a.textBgColor, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "textBgColor", "textColor"]);
  return React.createElement("div", __assign({ className: classNames("card", (_b = {}, _b["bg-".concat(color)] = color, _b["text-".concat(textColor)] = textColor, _b["text-bg-".concat(textBgColor)] = textBgColor, _b), className) }, rest, { ref }), children);
});
CCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  textBgColor: colorPropType,
  textColor: PropTypes.string
};
CCard.displayName = "CCard";
var CCardBody = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return React.createElement("div", __assign({ className: classNames("card-body", className) }, rest, { ref }), children);
});
CCardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CCardBody.displayName = "CCardBody";
export {
  CCard as C,
  CCardBody as a
};
