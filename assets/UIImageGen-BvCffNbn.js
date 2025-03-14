import { j as jsxRuntimeExports, al as Modal, aD as Box, aC as Button, aG as apiPost, r as reactExports, y as CForm, aF as CFormLabel, D as CFormInput, F as CButton, h as CSpinner, p as CIcon } from "./index-I-OjYVUo.js";
import { s as services_cost, c as cilStar } from "./config-CB4qC7zh.js";
import { C as CRow, a as CCol } from "./CRow-Bb3xtpYK.js";
import { C as CCard, a as CCardBody } from "./CCardBody-CanmQiUv.js";
import { C as CCardHeader } from "./CCardHeader-0owQy5PB.js";
import { C as CFormSelect } from "./CFormSelect-CAU_uUgE.js";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
function ResultModal({ imageUrl, open, handleClose }) {
  console.log(imageUrl);
  const handleDownload = () => {
    apiPost("/programming/downloady", { path: imageUrl.path }).then((response) => {
      if (!response || !response.data) {
        throw new Error("Failed to fetch the image");
      }
      const base64Image = response.data.body;
      const byteCharacters = atob(base64Image.split(",")[1]);
      const byteNumbers = new Uint8Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const blob = new Blob([byteNumbers], { type: "image/png" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "myImage.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }).catch((err) => {
      console.error("Error downloading image:", err);
      alert("Failed to download the image. Please try again.");
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      open,
      onClose: handleClose,
      "aria-labelledby": "modal-title",
      "aria-describedby": "modal-description",
      sx: { backdropFilter: "blur(8px)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: style, children: [
        imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imageUrl.img,
              alt: "Generated",
              style: {
                maxWidth: "100%",
                maxHeight: "70vh",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                marginBottom: "16px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "primary", onClick: handleDownload, children: "تحميل الصورة" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "لا توجد صورة للعرض" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", color: "secondary", onClick: handleClose, sx: { mt: 2 }, children: "إغلاق" })
      ] })
    }
  );
}
const UIImageGen = () => {
  const [formData, setFormData] = reactExports.useState({
    primarySubject: "",
    background: "",
    lighting: "",
    colorPalette: "",
    mood: "",
    culture: "",
    artStyle: "",
    size: "1024x1024",
    quality: "standard"
  });
  const [loading, setLoading] = reactExports.useState(false);
  const [imageUrl, setImageUrl] = reactExports.useState("");
  const [showModal, setShowModal] = reactExports.useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (!formData.primarySubject) {
      alert("يرجى إدخال الموضوع الرئيسي");
      return;
    }
    setLoading(true);
    try {
      const response = await apiPost("/programming/ui-gen", formData);
      console.log("before");
      if (response.data.status === 200) {
        console.log("before 1 ");
        setImageUrl(response.data.body);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("فشل في توليد الصورة");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "مصمم الصور" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "الوصف " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              placeholder: "مثال: مدينة مستقبلية",
              name: "primarySubject",
              value: formData.primarySubject,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "الخلفية" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              placeholder: "مثال: سماء غائمة، غروب الشمس",
              name: "background",
              value: formData.background,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 d-flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "الإضاءة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { name: "lighting", value: formData.lighting, onChange: handleChange, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "اختر الإضاءة" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "طبيعية", children: "طبيعية" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ليلية", children: "ليلية" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "نيونية", children: "نيونية" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "لوحة الألوان" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CFormSelect,
              {
                name: "colorPalette",
                value: formData.colorPalette,
                onChange: handleChange,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "اختر الألوان" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "دافئة", children: "دافئة" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "باردة", children: "باردة" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "كلاسيكية", children: "كلاسيكية" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "المزاج" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { name: "mood", value: formData.mood, onChange: handleChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "اختر المزاج" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "هادئ", children: "هادئ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "غامض", children: "غامض" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ملهم", children: "ملهم" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "الثقافة / التأثير الفني" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { name: "culture", value: formData.culture, onChange: handleChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "اختر الثقافة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "عربي", children: "عربي" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ياباني", children: "ياباني" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "أوروبي كلاسيكي", children: "أوروبي كلاسيكي" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "النمط الفني" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { name: "artStyle", value: formData.artStyle, onChange: handleChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "اختر النمط" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "واقعي", children: "واقعي" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "كرتوني", children: "كرتوني" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "لوحة زيتية", children: "لوحة زيتية" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 d-flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "حجم الصورة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { name: "size", value: formData.size, onChange: handleChange, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1024x1024", children: "مربع (1024x1024)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1024x1792", children: "طولي (1024x1792)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1792x1024", children: "عرضي (1792x1024)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { children: "جودة الصورة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { name: "quality", value: formData.quality, onChange: handleChange, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "standard", children: "عادية" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hd", children: "عالية الدقة" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "primary", onClick: handleSubmit, disabled: loading, children: [
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { size: "sm" }) : "توليد الصورة",
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
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResultModal, { open: showModal, imageUrl, handleClose: () => setShowModal(false) })
  ] });
};
export {
  UIImageGen as default
};
