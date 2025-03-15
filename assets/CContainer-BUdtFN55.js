import { r as reactExports, _ as __rest, R as React, a as __assign, c as classNames, P as PropTypes } from "./index-CiKRmcYv.js";
var BREAKPOINTS = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "fluid"
];
var CContainer = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS.forEach(function(bp) {
    var breakpoint = rest[bp];
    delete rest[bp];
    breakpoint && repsonsiveClassNames.push("container-".concat(bp));
  });
  return React.createElement("div", __assign({ className: classNames(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "container", className) }, rest, { ref }), children);
});
CContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  fluid: PropTypes.bool
};
CContainer.displayName = "CContainer";
export {
  CContainer as C
};
