import { j as jsxRuntimeExports, r as reactExports, al as Modal, aD as Box, aC as Button, ae as Typography, y as CForm, aF as CFormLabel, D as CFormInput, F as CButton, h as CSpinner, aG as apiPost } from "./index-CiKRmcYv.js";
import { F as FaTrash } from "./index-CFiv8d58.js";
import { l as lib, C as ContentCopyIcon, S as Snackbar, A as Alert } from "./index-BYIgjBCl.js";
import { M as Markdown } from "./index-B_tby9eX.js";
import { C as CRow, a as CCol } from "./CRow-B-Kpm6wY.js";
import { C as CCard, a as CCardBody } from "./CCardBody-Sy_aGZfG.js";
import { C as CCardHeader } from "./CCardHeader-DwUN0K1f.js";
import { C as CFormTextarea } from "./CFormTextarea-CX5y3TI0.js";
import { C as CFormSelect } from "./CFormSelect-BiXhVmUG.js";
import { c as createSvgIcon } from "./Grow-BU239NWR.js";
const FastForward = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "m4 18 8.5-6L4 6zm9-12v12l8.5-6z"
}), "FastForward");
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
const ContentWriting = () => {
  const [inputText, setInputText] = reactExports.useState("");
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [style2, setStyle] = reactExports.useState("");
  const [wordCount, setWordCount] = reactExports.useState("");
  const [language, setLanguage] = reactExports.useState("");
  const [imageLinks, setImageLinks] = reactExports.useState([{ description: "", url: "" }]);
  const [showModal, setShowModal] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState("");
  const [conv, setConv] = reactExports.useState();
  const handleImageChange = (index, field, value) => {
    const newImageLinks = [...imageLinks];
    newImageLinks[index][field] = value;
    setImageLinks(newImageLinks);
  };
  const handleAddImage = () => {
    setImageLinks([...imageLinks, { description: "", url: "" }]);
  };
  const handleRemoveImage = (index) => {
    const newImageLinks = imageLinks.filter((_, i) => i !== index);
    setImageLinks(newImageLinks);
  };
  const handleSubmit = async () => {
    var _a;
    setLoading(true);
    const data = {
      text: inputText,
      title,
      description,
      style: style2,
      wordCount,
      language,
      images: imageLinks,
      conv_id: conv
    };
    try {
      const response = await apiPost("/content/write-article", data);
      setResult(response.data.article);
      setShowModal(true);
      setConv((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.current_conv);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { style: { direction: "rtl" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "أداة كتابة المحتوي" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "title-input", children: "عنوان المقال:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              id: "title-input",
              value: title,
              onChange: (e) => setTitle(e.target.value),
              placeholder: "أدخل عنوان المقال هنا..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "description-input", children: "وصف المقال:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormTextarea,
            {
              id: "description-input",
              rows: 4,
              value: description,
              onChange: (e) => setDescription(e.target.value),
              placeholder: "أدخل وصف المقال هنا..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "الأسلوب:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { value: style2, onChange: (e) => setStyle(e.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "اختر الأسلوب" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "formal", children: "رسمي" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "informal", children: "غير رسمي" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "persuasive", children: "إقناعي" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "word-count-input", children: "عدد الكلمات:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              id: "word-count-input",
              type: "number",
              value: wordCount,
              onChange: (e) => setWordCount(e.target.value),
              placeholder: "أدخل عدد الكلمات..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "اللغة:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { value: language, onChange: (e) => setLanguage(e.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "اختر اللغة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ar", children: "العربية" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "en", children: "الإنجليزية" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "fr", children: "الفرنسية" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "الصور:" }),
          imageLinks.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, md: 5, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                placeholder: "وصف الصورة",
                value: image.description,
                onChange: (e) => handleImageChange(index, "description", e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, md: 5, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                placeholder: "رابط الصورة",
                value: image.url,
                onChange: (e) => handleImageChange(index, "url", e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, md: 2, className: "d-flex align-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "danger", onClick: () => handleRemoveImage(index), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTrash, {}) }) })
          ] }, index)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", onClick: handleAddImage, children: "+ اضافة صورة" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CButton,
          {
            color: "success",
            onClick: handleSubmit,
            style: {
              display: "flex",
              justifyContent: "center",
              width: "15%",
              color: "white"
            },
            disabled: loading,
            children: [
              loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { size: "sm" }) : "إرسال",
              /* @__PURE__ */ jsxRuntimeExports.jsx(FastForward, {})
            ]
          }
        ) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResultModal, { text: result, handleClose: () => setShowModal(false), open: showModal })
  ] });
};
export {
  ContentWriting as default
};
