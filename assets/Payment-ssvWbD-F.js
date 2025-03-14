import { j as jsxRuntimeExports } from "./index-I-OjYVUo.js";
function Payment() {
  const handlePlanSelection = (planName) => {
    const phoneNumber = "+201550411364";
    const message = `أريد دفع هذه الخطة: ${planName}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-cards", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-card plan-card-free", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "الخطة المجانية" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-points", children: "200 نقطة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-price", children: "مجانًا" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-text", children: "هذه هي الخطة التلقائية" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-card plan-card-basic", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "الخطة الأساسية" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-points", children: "500 نقطة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-price", children: "300 جنيه مصري" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handlePlanSelection("الخطة الأساسية"), children: "اختر هذه الخطة" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-card plan-card-standard", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "الخطة المتوسطة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-points", children: "800 نقطة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-price", children: "500 جنيه مصري" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handlePlanSelection("الخطة المتوسطة"), children: "اختر هذه الخطة" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-card plan-card-premium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "الخطة المميزة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-points", children: "1500 نقطة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "plan-price", children: "800 جنيه مصري" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handlePlanSelection("الخطة المميزة"), children: "اختر هذه الخطة" })
    ] })
  ] });
}
export {
  Payment as default
};
