import { r as reactExports, _ as __rest, R as React, a as __assign, c as classNames, P as PropTypes } from "./index-CiKRmcYv.js";
var CCardHeader = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "div" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return React.createElement(Component, __assign({ className: classNames("card-header", className) }, rest, { ref }), children);
});
CCardHeader.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
};
CCardHeader.displayName = "CCardHeader";
export {
  CCardHeader as C
};
