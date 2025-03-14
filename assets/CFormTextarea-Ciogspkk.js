import { r as reactExports, _ as __rest, R as React, aI as CFormControlWrapper, a as __assign, c as classNames, P as PropTypes } from "./index-I-OjYVUo.js";
var CFormTextarea = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, id = _a.id, invalid = _a.invalid, label = _a.label, plainText = _a.plainText, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid, rest = __rest(_a, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "id", "invalid", "label", "plainText", "text", "tooltipFeedback", "valid"]);
  return React.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    React.createElement("textarea", __assign({ className: classNames(plainText ? "form-control-plaintext" : "form-control", {
      "is-invalid": invalid,
      "is-valid": valid
    }, className), id }, rest, { ref }), children)
  );
});
CFormTextarea.propTypes = __assign({ className: PropTypes.string, id: PropTypes.string, plainText: PropTypes.bool }, CFormControlWrapper.propTypes);
CFormTextarea.displayName = "CFormTextarea";
export {
  CFormTextarea as C
};
