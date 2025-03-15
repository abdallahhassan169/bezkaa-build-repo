import { r as reactExports, j as jsxRuntimeExports, al as Modal, aD as Box, aC as Button, ae as Typography, y as CForm, aF as CFormLabel, D as CFormInput, F as CButton, h as CSpinner, p as CIcon, aG as apiPost } from "./index-CiKRmcYv.js";
import { l as lib, C as ContentCopyIcon, S as Snackbar, A as Alert } from "./index-BYIgjBCl.js";
import { M as Markdown } from "./index-B_tby9eX.js";
import { s as services_cost, c as cilStar } from "./config-CB4qC7zh.js";
import { C as CRow, a as CCol } from "./CRow-B-Kpm6wY.js";
import { C as CCard, a as CCardBody } from "./CCardBody-Sy_aGZfG.js";
import { C as CCardHeader } from "./CCardHeader-DwUN0K1f.js";
import { C as CFormTextarea } from "./CFormTextarea-CX5y3TI0.js";
import "./Grow-BU239NWR.js";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "90vh",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  direction: "rtl",
  color: "black"
};
function ResultModal({ text, open, handleClose }) {
  const [selectedAction, setSelectedAction] = reactExports.useState("text");
  const [openSnackbar, setOpenSnackbar] = reactExports.useState(false);
  console.log(text, "text");
  const handleActionChange = (action) => {
    setSelectedAction(action);
    console.log(`${action} action triggered`);
  };
  const handleCopy = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Modal,
      {
        open,
        onClose: handleClose,
        "aria-labelledby": "modal-title",
        "aria-describedby": "modal-description",
        sx: {
          backdropFilter: "blur(8px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: style, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: selectedAction === "text" ? "contained" : "outlined",
                color: "primary",
                onClick: () => handleActionChange("text"),
                sx: { marginRight: 1 },
                children: "النص"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: selectedAction === "Markdown" ? "contained" : "outlined",
                color: "primary",
                onClick: () => handleActionChange("Markdown"),
                sx: { marginRight: 1 },
                children: "Markdown"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(lib.CopyToClipboard, { text: selectedAction === "Markdown" ? JSON.stringify(text) : text, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "secondary",
                sx: { marginRight: 1 },
                onClick: handleCopy,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, {})
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              id: "modal-description",
              variant: "body1",
              sx: { flexGrow: 1, textAlign: "justify", whiteSpace: "pre-wrap" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: text })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mt: 3, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", color: "secondary", onClick: handleClose, children: "إغلاق" }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar, { open: openSnackbar, autoHideDuration: 2e3, onClose: handleCloseSnackbar, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { onClose: handleCloseSnackbar, severity: "success", sx: { width: "100%" }, children: "تم النسخ بنجاح!" }) })
  ] });
}
const Transelation = () => {
  const [inputText, setInputText] = reactExports.useState("");
  const [targetLanguage, setTargetLanguage] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState("");
  const [showModal, setShowModal] = reactExports.useState(false);
  const [conv, setConv] = reactExports.useState();
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    setLoading(true);
    try {
      const response = await apiPost("/content/translate", {
        text: inputText,
        targetLanguage,
        conv_id: conv
      });
      setResult((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.body);
      setConv((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.current_conv);
      if (response == null ? void 0 : response.data) setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleReset = () => {
    setInputText("");
    setTargetLanguage("");
    setResult("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { style: { direction: "rtl" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "أداة الترجمة" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "translate-textarea", children: "النص المراد ترجمته:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormTextarea,
            {
              id: "translate-textarea",
              rows: 5,
              placeholder: "اكتب النص هنا...",
              value: inputText,
              onChange: handleInputChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "target-language", children: "اختر اللغة المستهدفة:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              id: "target-language",
              placeholder: "أدخل اللغة المستهدفة (مثل: en, fr, ar)",
              value: targetLanguage,
              onChange: handleLanguageChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 d-flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "primary", type: "submit", disabled: loading, children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { size: "sm" }) : "إرسال",
            services_cost["youtube-trans"],
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CIcon,
              {
                icon: cilStar,
                className: "me-2",
                style: { color: "gold", fontSize: "50px" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: handleReset, children: "إعادة تعيين" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResultModal, { text: result, handleClose: () => setShowModal(false), open: showModal }) })
  ] });
};
export {
  Transelation as default
};
