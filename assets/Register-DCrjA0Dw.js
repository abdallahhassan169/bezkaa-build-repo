import { j as jsxRuntimeExports, y as CForm, z as CInputGroup, A as CInputGroupText, p as CIcon, B as cilUser, D as CFormInput, E as cilLockLocked, F as CButton } from "./index-CiKRmcYv.js";
import { C as CContainer } from "./CContainer-BUdtFN55.js";
import { C as CRow, a as CCol } from "./CRow-B-Kpm6wY.js";
import { C as CCard, a as CCardBody } from "./CCardBody-Sy_aGZfG.js";
const Register = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-body-tertiary min-vh-100 d-flex flex-row align-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 9, lg: 7, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mx-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Register" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-secondary", children: "Create your account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUser }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "Username", autoComplete: "username" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "@" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "Email", autoComplete: "email" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilLockLocked }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          type: "password",
          placeholder: "Password",
          autoComplete: "new-password"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilLockLocked }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          type: "password",
          placeholder: "Repeat password",
          autoComplete: "new-password"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "success", children: "Create Account" }) })
  ] }) }) }) }) }) }) });
};
export {
  Register as default
};
