import { r as reactExports, j as jsxRuntimeExports, al as Modal, aD as Box, aC as Button, ae as Typography, y as CForm, aF as CFormLabel, F as CButton, h as CSpinner, aE as axios } from "./index-I-OjYVUo.js";
import { l as lib, C as ContentCopyIcon, S as Snackbar, A as Alert } from "./index-CvoAc4-T.js";
import { M as Markdown } from "./index-theaUQs8.js";
import { C as CRow, a as CCol } from "./CRow-Bb3xtpYK.js";
import { C as CCard, a as CCardBody } from "./CCardBody-CanmQiUv.js";
import { C as CCardHeader } from "./CCardHeader-0owQy5PB.js";
import { C as CFormTextarea } from "./CFormTextarea-Ciogspkk.js";
import { C as CFormSelect } from "./CFormSelect-CAU_uUgE.js";
import "./Grow-CqnyeZGf.js";
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
  flexDirection: "column",
  direction: "rtl"
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
const SEO = () => {
  const [inputText, setInputText] = reactExports.useState("");
  const [selectedAction, setSelectedAction] = reactExports.useState("keywords");
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState("");
  const [showModal, setShowModal] = reactExports.useState(false);
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://127.0.0.1:3001/marketing/seo`, {
        text: inputText,
        action: selectedAction
      });
      setResult(response.data.response);
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleReset = () => {
    setInputText("");
    setResult("");
    setSelectedAction("keywords");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { style: { direction: "rtl" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "أداة تحسين محركات البحث (SEO)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "seo-textarea", children: "أدخل النص:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormTextarea,
            {
              id: "seo-textarea",
              rows: 5,
              placeholder: "اكتب النص الذي تريد تحليله هنا...",
              value: inputText,
              onChange: handleInputChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "seo-action", children: "اختر الإجراء:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Default select example", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "اختر من القائمة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "keywords", children: "تحليل الكلمات المفتاحية" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "translate", children: "ترجمة النص" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "description", children: "تحسين الوصف التعريفي" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 d-flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", onClick: handleSubmit, disabled: loading, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { size: "sm" }) : "إرسال" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: handleReset, children: "إعادة تعيين" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResultModal, { text: result, handleClose: () => setShowModal(false), open: showModal }) })
  ] });
};
export {
  SEO as default
};
