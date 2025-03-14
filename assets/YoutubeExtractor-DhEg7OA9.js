import { r as reactExports, j as jsxRuntimeExports, al as Modal, aD as Box, aC as Button, ae as Typography, y as CForm, aF as CFormLabel, D as CFormInput, F as CButton, h as CSpinner, p as CIcon, aG as apiPost } from "./index-I-OjYVUo.js";
import { l as lib, C as ContentCopyIcon, S as Snackbar, A as Alert } from "./index-CvoAc4-T.js";
import { M as Markdown } from "./index-theaUQs8.js";
import { s as services_cost, c as cilStar } from "./config-CB4qC7zh.js";
import { C as CRow, a as CCol } from "./CRow-Bb3xtpYK.js";
import { C as CCard, a as CCardBody } from "./CCardBody-CanmQiUv.js";
import { C as CCardHeader } from "./CCardHeader-0owQy5PB.js";
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
const YoutubeExtractor = () => {
  const [videoUrl, setVideoUrl] = reactExports.useState("");
  const [percent, setPercent] = reactExports.useState("");
  const [responseType, setResponseType] = reactExports.useState("summary");
  const [language, setLanguage] = reactExports.useState("ar");
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState("");
  const [showModal, setShowModal] = reactExports.useState(false);
  const handleSubmit = async () => {
    var _a, _b;
    if (!videoUrl || !responseType || !language) {
      alert("يرجى إدخال جميع البيانات المطلوبة");
      return;
    }
    setLoading(true);
    try {
      const response = await apiPost("/video/get_trans", {
        videoUrl,
        percent,
        responseType,
        language
      });
      if (response.data.status === 200) {
        setResult(((_b = (_a = response.data) == null ? void 0 : _a.body) == null ? void 0 : _b.processedText) ?? "");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "تحليل نصوص فيديوهات اليوتيوب" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "رابط الفيديو" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              placeholder: "أدخل رابط الفيديو",
              value: videoUrl,
              onChange: (e) => setVideoUrl(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "النسبة من النص الأصلي" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "number",
                placeholder: "مثال: 75%",
                min: 0,
                max: 100,
                value: percent,
                onChange: (e) => setPercent(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "نوع الاستجابة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CFormSelect,
              {
                value: responseType,
                onChange: (e) => setResponseType(e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "summary", children: "تلخيص" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "paraphrase", children: "إعادة صياغة" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "analysis", children: "تحليل المحتوى" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "اختر اللغة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                value: language,
                onChange: (e) => setLanguage(e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "primary", onClick: handleSubmit, disabled: loading, children: [
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { size: "sm" }) : "تحليل الفيديو",
          services_cost["youtube-trans"],
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CIcon,
            {
              icon: cilStar,
              className: "me-2",
              style: { color: "gold", fontSize: "50px" }
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResultModal, { text: result, handleClose: () => setShowModal(false), open: showModal })
  ] });
};
export {
  YoutubeExtractor as default
};
