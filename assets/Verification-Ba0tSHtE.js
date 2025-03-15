import { r as reactExports, _ as __rest, u as useForkedRef, R as React, T as Transition, a as __assign, c as classNames, x as CCloseButton, P as PropTypes, b as colorPropType, j as jsxRuntimeExports, y as CForm, F as CButton, D as CFormInput, aG as apiPost } from "./index-CiKRmcYv.js";
import { C as CCard, a as CCardBody } from "./CCardBody-Sy_aGZfG.js";
import { C as CCardHeader } from "./CCardHeader-DwUN0K1f.js";
var CAlert = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? "primary" : _b, dismissible = _a.dismissible, variant = _a.variant, _c = _a.visible, visible = _c === void 0 ? true : _c, onClose = _a.onClose, rest = __rest(_a, ["children", "className", "color", "dismissible", "variant", "visible", "onClose"]);
  var alertRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, alertRef);
  var _d = reactExports.useState(visible), _visible = _d[0], setVisible = _d[1];
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  return React.createElement(Transition, { in: _visible, mountOnEnter: true, nodeRef: alertRef, onExit: onClose, timeout: 150, unmountOnExit: true }, function(state) {
    return React.createElement(
      "div",
      __assign({ className: classNames("alert", variant === "solid" ? "bg-".concat(color, " text-white") : "alert-".concat(color), {
        "alert-dismissible fade": dismissible,
        show: state === "entered"
      }, className), role: "alert" }, rest, { ref: forkedRef }),
      children,
      dismissible && React.createElement(CCloseButton, { onClick: function() {
        return setVisible(false);
      } })
    );
  });
});
CAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType.isRequired,
  dismissible: PropTypes.bool,
  onClose: PropTypes.func,
  variant: PropTypes.string,
  visible: PropTypes.bool
};
CAlert.displayName = "CAlert";
const OTPVerificationBox = () => {
  const [isActive, setIsActive] = reactExports.useState(null);
  const [otpSent, setOtpSent] = reactExports.useState(false);
  const [otp, setOtp] = reactExports.useState("");
  const [alertMessage, setAlertMessage] = reactExports.useState("");
  reactExports.useEffect(() => {
    const checkUserStatus = async () => {
      var _a;
      try {
        const response = await apiPost("/verify/check_user_verification");
        setIsActive((_a = response.data.body[0]) == null ? void 0 : _a.email_verified);
      } catch (error) {
        console.error("Error checking user status:", error);
        setAlertMessage("خطا في التحقق");
      }
    };
    checkUserStatus();
  }, []);
  const handleSendEmail = async () => {
    try {
      const response = await apiPost("/verify/send_otp");
      setOtpSent(true);
      setAlertMessage("تم إرسال الرمز");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setAlertMessage("خطأ في ارسال الرمز");
    }
  };
  const handleVerifyOtp = async () => {
    try {
      const response = await apiPost("/verify/verify", { code: otp });
      setAlertMessage(response.data.message);
      if (response.data) {
        setIsActive(true);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setAlertMessage("خطا في التحقق من الرمز");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex justify-content-center align-items-center vh-70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { className: "text-center", children: "تأكيد الهوية" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      alertMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "info", children: alertMessage }),
      isActive === null && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "جاري التحقق..." }),
      isActive === true && /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "success", children: "تم التحقق من الهوية" }),
      isActive === false && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { children: !otpSent ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", onClick: handleSendEmail, children: "إرسال الرمز للايميل المسجل" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormInput,
          {
            type: "text",
            placeholder: "Enter OTP",
            value: otp,
            onChange: (e) => setOtp(e.target.value),
            className: "mb-3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "success", onClick: handleVerifyOtp, disabled: !otp, children: "تأكيد الهوية" })
      ] }) }) })
    ] })
  ] }) });
};
export {
  OTPVerificationBox as default
};
