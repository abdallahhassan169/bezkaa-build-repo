import { r as reactExports, _ as __rest, R as React, a as __assign, c as classNames, P as PropTypes } from "./index-I-OjYVUo.js";
var BREAKPOINTS$1 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CCol = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS$1.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "number" || typeof breakpoint === "string") {
      repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
    }
    if (typeof breakpoint === "boolean") {
      repsonsiveClassNames.push("col".concat(infix));
    }
    if (breakpoint && typeof breakpoint === "object") {
      if (typeof breakpoint.span === "number" || typeof breakpoint.span === "string") {
        repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint.span));
      }
      if (typeof breakpoint.span === "boolean") {
        repsonsiveClassNames.push("col".concat(infix));
      }
      if (typeof breakpoint.order === "number" || typeof breakpoint.order === "string") {
        repsonsiveClassNames.push("order".concat(infix, "-").concat(breakpoint.order));
      }
      if (typeof breakpoint.offset === "number") {
        repsonsiveClassNames.push("offset".concat(infix, "-").concat(breakpoint.offset));
      }
    }
  });
  return React.createElement("div", __assign({ className: classNames(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "col", className) }, rest, { ref }), children);
});
var span = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.oneOf(["auto"])
]);
var col = PropTypes.oneOfType([
  span,
  PropTypes.shape({
    span,
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    order: PropTypes.oneOfType([
      PropTypes.oneOf(["first", "last"]),
      PropTypes.number,
      PropTypes.string
    ])
  })
]);
CCol.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: col,
  sm: col,
  md: col,
  lg: col,
  xl: col,
  xxl: col
};
CCol.displayName = "CCol";
var BREAKPOINTS = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CRow = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "object") {
      if (breakpoint.cols) {
        repsonsiveClassNames.push("row-cols".concat(infix, "-").concat(breakpoint.cols));
      }
      if (typeof breakpoint.gutter === "number") {
        repsonsiveClassNames.push("g".concat(infix, "-").concat(breakpoint.gutter));
      }
      if (typeof breakpoint.gutterX === "number") {
        repsonsiveClassNames.push("gx".concat(infix, "-").concat(breakpoint.gutterX));
      }
      if (typeof breakpoint.gutterY === "number") {
        repsonsiveClassNames.push("gy".concat(infix, "-").concat(breakpoint.gutterY));
      }
    }
  });
  return React.createElement("div", __assign({ className: classNames("row", repsonsiveClassNames, className) }, rest, { ref }), children);
});
var bp = PropTypes.shape({
  cols: PropTypes.oneOfType([PropTypes.oneOf(["auto"]), PropTypes.number, PropTypes.string]),
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutterX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutterY: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
CRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: bp,
  sm: bp,
  md: bp,
  lg: bp,
  xl: bp,
  xxl: bp
};
CRow.displayName = "CRow";
export {
  CRow as C,
  CCol as a
};
