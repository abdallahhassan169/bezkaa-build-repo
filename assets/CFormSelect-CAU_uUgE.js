import { r as reactExports, _ as __rest, R as React, aI as CFormControlWrapper, a as __assign, c as classNames, P as PropTypes } from "./index-I-OjYVUo.js";
var CFormSelect = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, htmlSize = _a.htmlSize, id = _a.id, invalid = _a.invalid, label = _a.label, options = _a.options, size = _a.size, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid, rest = __rest(_a, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "htmlSize", "id", "invalid", "label", "options", "size", "text", "tooltipFeedback", "valid"]);
  return React.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    React.createElement("select", __assign({ id, className: classNames("form-select", (_b = {}, _b["form-select-".concat(size)] = size, _b["is-invalid"] = invalid, _b["is-valid"] = valid, _b), className), size: htmlSize }, rest, { ref }), options ? options.map(function(option, index) {
      return React.createElement("option", __assign({}, typeof option === "object" && option.disabled && { disabled: option.disabled }, typeof option === "object" && option.value !== void 0 && { value: option.value }, { key: index }), typeof option === "string" ? option : option.label);
    }) : children)
  );
});
CFormSelect.propTypes = __assign({ className: PropTypes.string, htmlSize: PropTypes.number, options: PropTypes.array }, CFormControlWrapper.propTypes);
CFormSelect.displayName = "CFormSelect";
export {
  CFormSelect as C
};
