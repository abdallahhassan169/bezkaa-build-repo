import { j as jsxRuntimeExports, z as CInputGroup, A as CInputGroupText, p as CIcon, D as CFormInput, F as CButton } from "./index-CiKRmcYv.js";
import { C as CContainer } from "./CContainer-BUdtFN55.js";
import { C as CRow, a as CCol } from "./CRow-B-Kpm6wY.js";
import { c as cilMagnifyingGlass } from "./cil-magnifying-glass-DQABYMt8.js";
const Page404 = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-body-tertiary min-vh-100 d-flex flex-row align-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "clearfix", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "float-start display-3 me-4", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "pt-3", children: [
        "Oops! You",
        "'",
        "re lost."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-secondary float-start", children: "The page you are looking for was not found." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "input-prepend", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilMagnifyingGlass }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", placeholder: "What are you looking for?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "info", children: "Search" })
    ] })
  ] }) }) }) });
};
export {
  Page404 as default
};
