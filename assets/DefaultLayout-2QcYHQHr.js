const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Users-16bOgA9T.js","./index-CiKRmcYv.js","./index-JCgk-N38.css","./Grow-BU239NWR.js","./ContentWriting-2pz193A7.js","./index-CFiv8d58.js","./index-BYIgjBCl.js","./index-B_tby9eX.js","./CRow-B-Kpm6wY.js","./CCardBody-Sy_aGZfG.js","./CCardHeader-DwUN0K1f.js","./CFormTextarea-CX5y3TI0.js","./CFormSelect-BiXhVmUG.js","./ContentWriting-BWmF-fPs.css","./UIGen-Dz15Gaoc.js","./config-CB4qC7zh.js","./UIImageGen-ewi3NrBl.js","./Transelation-DlYYO_MK.js","./Transelation-BWuaZsvl.css","./SEO-De3ExKtm.js","./SEO-Bppkwp5q.css","./Payment-CZ6nYl3c.js","./Payment-DONoTSzX.css","./Verification-Ba0tSHtE.js","./YoutubeExtractor-DdEMkzVG.js","./Home-kzulZZaQ.js","./CContainer-BUdtFN55.js"])))=>i.map(i=>d[i]);
import { r as reactExports, _ as __rest$1, R as React, a as __assign$2, c as classNames, P as PropTypes, b as colorPropType, s as shapePropType, t as textColorsPropType, C as CLink, u as useForkedRef, d as reactDomExports, e as CBackdrop, T as Transition, f as __vitePreload, g as useLocation, j as jsxRuntimeExports, h as CSpinner, i as Routes, k as Route, N as Navigate, l as useColorModes, m as useAuth, n as useDispatch, o as useSelector, p as CIcon, q as commonjsGlobal, v as getDefaultExportFromCjs, w as NavLink, x as CCloseButton } from "./index-CiKRmcYv.js";
import { C as CContainer } from "./CContainer-BUdtFN55.js";
var CBadge = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "span" : _c, className = _a.className, color = _a.color, position = _a.position, shape = _a.shape, size = _a.size, textBgColor = _a.textBgColor, textColor = _a.textColor, rest = __rest$1(_a, ["children", "as", "className", "color", "position", "shape", "size", "textBgColor", "textColor"]);
  return React.createElement(Component, __assign$2({ className: classNames("badge", (_b = {}, _b["bg-".concat(color)] = color, _b["position-absolute translate-middle"] = position, _b["top-0"] = position === null || position === void 0 ? void 0 : position.includes("top"), _b["top-100"] = position === null || position === void 0 ? void 0 : position.includes("bottom"), _b["start-100"] = position === null || position === void 0 ? void 0 : position.includes("end"), _b["start-0"] = position === null || position === void 0 ? void 0 : position.includes("start"), _b["badge-".concat(size)] = size, _b["text-".concat(textColor)] = textColor, _b["text-bg-".concat(textBgColor)] = textBgColor, _b), shape, className) }, rest, { ref }), children);
});
CBadge.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  position: PropTypes.oneOf(["top-start", "top-end", "bottom-end", "bottom-start"]),
  shape: shapePropType,
  size: PropTypes.oneOf(["sm"]),
  textBgColor: colorPropType,
  textColor: textColorsPropType
};
CBadge.displayName = "CBadge";
var CBreadcrumb = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest$1(_a, ["children", "className"]);
  return React.createElement(
    "nav",
    { "aria-label": "breadcrumb" },
    React.createElement("ol", __assign$2({ className: classNames("breadcrumb", className) }, rest, { ref }), children)
  );
});
CBreadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CBreadcrumb.displayName = "CBreadcrumb";
var CBreadcrumbItem = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, active = _a.active, as = _a.as, className = _a.className, href = _a.href, rest = __rest$1(_a, ["children", "active", "as", "className", "href"]);
  return React.createElement("li", __assign$2({ className: classNames("breadcrumb-item", {
    active
  }, className) }, active && { "aria-current": "page" }, rest, { ref }), href ? React.createElement(CLink, { as, href }, children) : children);
});
CBreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};
CBreadcrumbItem.displayName = "CBreadcrumbItem";
var isInViewport = function(element) {
  var rect = element.getBoundingClientRect();
  return Math.floor(rect.top) >= 0 && Math.floor(rect.left) >= 0 && Math.floor(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) && Math.floor(rect.right) <= (window.innerWidth || document.documentElement.clientWidth);
};
var CFooter = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, position = _a.position, rest = __rest$1(_a, ["children", "className", "position"]);
  return React.createElement("div", __assign$2({ className: classNames("footer", (_b = {}, _b["footer-".concat(position)] = position, _b), className) }, rest, { ref }), children);
});
CFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(["fixed", "sticky"])
};
CFooter.displayName = "CFooter";
var CHeader = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, container = _a.container, position = _a.position, rest = __rest$1(_a, ["children", "className", "container", "position"]);
  return React.createElement("div", __assign$2({ className: classNames("header", (_b = {}, _b["header-".concat(position)] = position, _b), className) }, rest, { ref }), container ? React.createElement("div", { className: typeof container === "string" ? "container-".concat(container) : "container" }, children) : React.createElement(React.Fragment, null, children));
});
CHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
      "fluid"
    ])
  ]),
  position: PropTypes.oneOf(["fixed", "sticky"])
};
CHeader.displayName = "CHeader";
var CHeaderNav = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest$1(_a, ["children", "as", "className"]);
  return React.createElement(Component, __assign$2({ className: classNames("header-nav", className), role: "navigation" }, rest, { ref }), children);
});
CHeaderNav.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
};
CHeaderNav.displayName = "CHeaderNav";
var CHeaderToggler = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest$1(_a, ["children", "className"]);
  return React.createElement("button", __assign$2({ type: "button", className: classNames("header-toggler", className) }, rest, { ref }), children !== null && children !== void 0 ? children : React.createElement("span", { className: "header-toggler-icon" }));
});
CHeaderToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CHeaderToggler.displayName = "CHeaderToggler";
var CNav = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "ul" : _c, className = _a.className, layout = _a.layout, variant = _a.variant, rest = __rest$1(_a, ["children", "as", "className", "layout", "variant"]);
  return React.createElement(Component, __assign$2({ className: classNames("nav", (_b = {}, _b["nav-".concat(layout)] = layout, _b["nav-".concat(variant)] = variant, _b), className), role: "navigation" }, rest, { ref }), children);
});
CNav.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  layout: PropTypes.oneOf(["fill", "justified"]),
  variant: PropTypes.oneOf(["pills", "tabs", "underline", "underline-border"])
};
CNav.displayName = "CNav";
var CNavContext = reactExports.createContext({});
var recursiveClone = function(children, id, updateId) {
  return React.Children.map(children, function(child, index) {
    if (!React.isValidElement(child) || // @ts-expect-error the `children` exist in each component. TODO: resolve
    child.type.displayName !== "CNavGroup" && // @ts-expect-error the `children` exist in each component. TODO: resolve
    child.type.displayName !== "CNavLink" && // @ts-expect-error the `children` exist in each component. TODO: resolve
    child.type.displayName !== "CNavItem") {
      return child;
    }
    var _id = id ? updateId ? "".concat(id, ".").concat(index) : "".concat(id) : "".concat(index);
    if (child.props && child.props.children) {
      return React.cloneElement(child, {
        idx: _id,
        children: recursiveClone(
          child.props.children,
          _id,
          // @ts-expect-error the `displayName` exist in each component. TODO: resolve
          child.type.displayName === "CNavItem" ? false : true
        )
      });
    }
    return React.cloneElement(child, {
      idx: _id
    });
  });
};
var CSidebarNav = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest$1(_a, ["children", "as", "className"]);
  var _c = reactExports.useState(""), visibleGroup = _c[0], setVisibleGroup = _c[1];
  var CNavContextValues = {
    visibleGroup,
    setVisibleGroup
  };
  return React.createElement(
    CNavContext.Provider,
    { value: CNavContextValues },
    React.createElement(Component, __assign$2({ className: classNames("sidebar-nav", className), ref }, rest), recursiveClone(children))
  );
});
CSidebarNav.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarNav.displayName = "CSidebarNav";
var CNavLink = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, idx = _a.idx, rest = __rest$1(_a, ["children", "className", "idx"]);
  var navLinkRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, navLinkRef);
  var setVisibleGroup = reactExports.useContext(CNavContext).setVisibleGroup;
  reactExports.useEffect(function() {
    var _a2;
    rest.active = (_a2 = navLinkRef.current) === null || _a2 === void 0 ? void 0 : _a2.classList.contains("active");
    idx && rest.active && setVisibleGroup(idx);
  }, [rest.active, className]);
  return React.createElement(CLink, __assign$2({ className: classNames("nav-link", className) }, rest, { ref: forkedRef }), children);
});
CNavLink.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  idx: PropTypes.string
};
CNavLink.displayName = "CNavLink";
var CNavItem = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "li" : _b, className = _a.className, rest = __rest$1(_a, ["children", "as", "className"]);
  return React.createElement(Component, { className: classNames("nav-item", className), ref }, rest.href || rest.to ? React.createElement(CNavLink, __assign$2({ className }, rest), children) : children);
});
CNavItem.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
};
CNavItem.displayName = "CNavItem";
var isOnMobile = function(element) {
  return Boolean(getComputedStyle(element).getPropertyValue("--cui-is-mobile"));
};
var CSidebar = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, colorScheme = _a.colorScheme, narrow = _a.narrow, onHide = _a.onHide, onShow = _a.onShow, onVisibleChange = _a.onVisibleChange, overlaid = _a.overlaid, placement = _a.placement, position = _a.position, size = _a.size, unfoldable = _a.unfoldable, visible = _a.visible, rest = __rest$1(_a, ["children", "className", "colorScheme", "narrow", "onHide", "onShow", "onVisibleChange", "overlaid", "placement", "position", "size", "unfoldable", "visible"]);
  var sidebarRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, sidebarRef);
  var _c = reactExports.useState(), inViewport = _c[0], setInViewport = _c[1];
  var _d = reactExports.useState(false), mobile = _d[0], setMobile = _d[1];
  var _e = reactExports.useState(false), visibleMobile = _e[0], setVisibleMobile = _e[1];
  var _f = reactExports.useState(visible !== void 0 ? visible : overlaid ? false : true), visibleDesktop = _f[0], setVisibleDesktop = _f[1];
  reactExports.useEffect(function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    visible !== void 0 && handleVisibleChange(visible);
  }, [visible]);
  reactExports.useEffect(function() {
    inViewport !== void 0 && onVisibleChange && onVisibleChange(inViewport);
    !inViewport && onHide && onHide();
    inViewport && onShow && onShow();
  }, [inViewport]);
  reactExports.useEffect(function() {
    mobile && setVisibleMobile(false);
  }, [mobile]);
  reactExports.useEffect(function() {
    var _a2, _b2;
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseup", handleClickOutside);
    window.addEventListener("keyup", handleKeyup);
    (_a2 = sidebarRef.current) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("mouseup", handleOnClick);
    (_b2 = sidebarRef.current) === null || _b2 === void 0 ? void 0 : _b2.addEventListener("transitionend", function() {
      sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    });
    return function() {
      var _a3, _b3;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseup", handleClickOutside);
      window.removeEventListener("keyup", handleKeyup);
      (_a3 = sidebarRef.current) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("mouseup", handleOnClick);
      (_b3 = sidebarRef.current) === null || _b3 === void 0 ? void 0 : _b3.removeEventListener("transitionend", function() {
        sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
      });
    };
  });
  var handleVisibleChange = function(visible2) {
    if (mobile) {
      setVisibleMobile(visible2);
      return;
    }
    setVisibleDesktop(visible2);
  };
  var handleHide = function() {
    handleVisibleChange(false);
  };
  var handleResize = function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
  };
  var handleKeyup = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleClickOutside = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleOnClick = function(event) {
    var target = event.target;
    target && target.classList.contains("nav-link") && !target.classList.contains("nav-group-toggle") && mobile && handleHide();
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", __assign$2({ className: classNames("sidebar", (_b = {}, _b["sidebar-".concat(colorScheme)] = colorScheme, _b["sidebar-narrow"] = narrow, _b["sidebar-overlaid"] = overlaid, _b["sidebar-".concat(placement)] = placement, _b["sidebar-".concat(position)] = position, _b["sidebar-".concat(size)] = size, _b["sidebar-narrow-unfoldable"] = unfoldable, _b.show = mobile && visibleMobile || overlaid && visibleDesktop, _b.hide = visibleDesktop === false && !mobile && !overlaid, _b), className) }, rest, { ref: forkedRef }), children),
    typeof window !== "undefined" && mobile && reactDomExports.createPortal(React.createElement(CBackdrop, { className: "sidebar-backdrop", visible: mobile && visibleMobile }), document.body)
  );
});
CSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colorScheme: PropTypes.oneOf(["dark", "light"]),
  narrow: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  onVisibleChange: PropTypes.func,
  overlaid: PropTypes.bool,
  placement: PropTypes.oneOf(["start", "end"]),
  position: PropTypes.oneOf(["fixed", "sticky"]),
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  unfoldable: PropTypes.bool,
  visible: PropTypes.bool
};
CSidebar.displayName = "CSidebar";
var CSidebarBrand = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "a" : _b, className = _a.className, rest = __rest$1(_a, ["children", "as", "className"]);
  return React.createElement(Component, __assign$2({ className: classNames("sidebar-brand", className), ref }, rest), children);
});
CSidebarBrand.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarBrand.displayName = "CSidebarBrand";
var CSidebarFooter = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest$1(_a, ["children", "className"]);
  return React.createElement("div", __assign$2({ className: classNames("sidebar-footer", className), ref }, rest), children);
});
CSidebarFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarFooter.displayName = "CSidebarFooter";
var CSidebarToggler = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest$1(_a, ["children", "className"]);
  return React.createElement("button", __assign$2({ className: classNames("sidebar-toggler", className), ref }, rest), children);
});
CSidebarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarToggler.displayName = "CSidebarToggler";
var CSidebarHeader = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest$1(_a, ["children", "className"]);
  return React.createElement("div", __assign$2({ className: classNames("sidebar-header", className), ref }, rest), children);
});
CSidebarHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarHeader.displayName = "CSidebarHeader";
var CTabContent = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest$1(_a, ["children", "className"]);
  return React.createElement("div", __assign$2({ className: classNames("tab-content", className) }, rest, { ref }), children);
});
CTabContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CTabContent.displayName = "CTabContent";
var CTabPane = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, className = _a.className, onHide = _a.onHide, onShow = _a.onShow, _b = _a.transition, transition = _b === void 0 ? true : _b, visible = _a.visible, rest = __rest$1(_a, ["children", "className", "onHide", "onShow", "transition", "visible"]);
  var tabPaneRef = reactExports.useRef();
  var forkedRef = useForkedRef(ref, tabPaneRef);
  return React.createElement(Transition, { in: visible, nodeRef: tabPaneRef, onEnter: onShow, onExit: onHide, timeout: 150 }, function(state) {
    return React.createElement("div", __assign$2({ className: classNames("tab-pane", {
      active: visible,
      fade: transition,
      show: state === "entered"
    }, className) }, rest, { ref: forkedRef }), children);
  });
});
CTabPane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  transition: PropTypes.bool,
  visible: PropTypes.bool
};
CTabPane.displayName = "CTabPane";
var cibPaypal = ["32 32", "<path d='M10.962 18.494c-0.219 1.2-1.087 6.794-1.344 8.375-0.019 0.113-0.063 0.156-0.188 0.156h-4.662c-0.475 0-0.819-0.412-0.756-0.869l3.663-23.244c0.094-0.6 0.631-1.056 1.25-1.056 9.519 0 10.319-0.231 12.75 0.713 3.756 1.456 4.1 4.969 2.75 8.769-1.344 3.913-4.531 5.594-8.756 5.644-2.712 0.044-4.344-0.438-4.706 1.512zM26.319 9.5c-0.113-0.081-0.156-0.113-0.188 0.081-0.125 0.712-0.319 1.406-0.55 2.1-2.494 7.113-9.406 6.494-12.781 6.494-0.381 0-0.631 0.206-0.681 0.587-1.412 8.775-1.694 10.606-1.694 10.606-0.063 0.444 0.219 0.806 0.662 0.806h3.969c0.538 0 0.981-0.394 1.088-0.931 0.044-0.337-0.069 0.381 0.9-5.706 0.288-1.375 0.894-1.231 1.831-1.231 4.438 0 7.9-1.8 8.931-7.019 0.406-2.175 0.288-4.463-1.487-5.788z'/>"];
var cilAccountLogout = ["512 512", "<polygon fill='var(--ci-primary-color, currentColor)' points='77.155 272.034 351.75 272.034 351.75 272.033 351.75 240.034 351.75 240.033 77.155 240.033 152.208 164.98 152.208 164.98 152.208 164.979 129.58 142.353 15.899 256.033 15.9 256.034 15.899 256.034 129.58 369.715 152.208 347.088 152.208 347.087 152.208 347.087 77.155 272.034' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='160 16 160 48 464 48 464 464 160 464 160 496 496 496 496 16 160 16' class='ci-primary'/>"];
var cilCheckCircle = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808' class='ci-primary'/>"];
var cilCode = ["512 512", "<polygon fill='var(--ci-primary-color, currentColor)' points='388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='330.529 16 297.559 16 178.441 496 211.412 496 330.529 16' class='ci-primary'/>"];
var cilCursor = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M446.754,47.9a20.075,20.075,0,0,0-21.307-2.745L32,229.835v37l165.349,66.139L303.317,496h37L453.281,68.369A20.072,20.072,0,0,0,446.754,47.9ZM317.124,458.524l-98.473-151.5-148.9-59.561L415.779,85.044Z' class='ci-primary'/>"];
var cilImage = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M40,472H472V40H40ZM440,348.142,328.628,236.769l46.6-46.6L440,254.935ZM72,72H440V209.68l-64.769-64.77L306,214.142l-100-100-134,134Zm0,221.4,134-134,234,234V440H72Z' class='ci-primary'/>"];
var cilMediaPlay = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M444.4,235.236,132.275,49.449A24,24,0,0,0,96,70.072V434.214a24.017,24.017,0,0,0,35.907,20.839L444.03,276.7a24,24,0,0,0,.367-41.461ZM128,420.429V84.144L416.244,255.718Z' class='ci-primary'/>"];
var cilMenu = ["512 512", "<rect width='352' height='32' x='80' y='96' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='352' height='32' x='80' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='352' height='32' x='80' y='384' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"];
var cilNotes = ["512 512", "<rect width='288' height='32' x='112' y='152' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='288' height='32' x='112' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='152' height='32' x='112' y='328' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M480,48H32V464H480ZM448,432H64V80H448Z' class='ci-primary'/>"];
var cilSpeedometer = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z' class='ci-primary'/><rect width='32' height='32' x='80' y='264' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='128' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='136' y='168' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='400' y='264' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z' class='ci-primary'/>"];
var cilVideo = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M461,132,360,171.277V72H16V440H360V332.723L461,372h35V132Zm3,206.833-136-52.89V408H48V104H328V218.057l136-52.89Z' class='ci-primary'/>"];
React.lazy(() => __vitePreload(() => import("./Users-16bOgA9T.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url));
const ContentWriting = React.lazy(() => __vitePreload(() => import("./ContentWriting-2pz193A7.js"), true ? __vite__mapDeps([4,1,2,5,6,3,7,8,9,10,11,12,13]) : void 0, import.meta.url));
const UIGen = React.lazy(() => __vitePreload(() => import("./UIGen-Dz15Gaoc.js"), true ? __vite__mapDeps([14,1,2,6,3,15,5,8,9,10,11]) : void 0, import.meta.url));
const UIImageGen = React.lazy(() => __vitePreload(() => import("./UIImageGen-ewi3NrBl.js"), true ? __vite__mapDeps([16,1,2,15,8,9,10,12]) : void 0, import.meta.url));
const Transelation = React.lazy(() => __vitePreload(() => import("./Transelation-DlYYO_MK.js"), true ? __vite__mapDeps([17,1,2,6,3,7,15,8,9,10,11,18]) : void 0, import.meta.url));
const SEO = React.lazy(() => __vitePreload(() => import("./SEO-De3ExKtm.js"), true ? __vite__mapDeps([19,1,2,6,3,7,8,9,10,11,12,20]) : void 0, import.meta.url));
const Payment = React.lazy(() => __vitePreload(() => import("./Payment-CZ6nYl3c.js"), true ? __vite__mapDeps([21,1,2,22]) : void 0, import.meta.url));
const OTPVerificationBox = React.lazy(() => __vitePreload(() => import("./Verification-Ba0tSHtE.js"), true ? __vite__mapDeps([23,1,2,9,10]) : void 0, import.meta.url));
const YoutubeExtractor = React.lazy(() => __vitePreload(() => import("./YoutubeExtractor-DdEMkzVG.js"), true ? __vite__mapDeps([24,1,2,6,3,7,15,8,9,10,12]) : void 0, import.meta.url));
const UserDashboard = React.lazy(() => __vitePreload(() => import("./Home-kzulZZaQ.js"), true ? __vite__mapDeps([25,1,2,8,9,10,26]) : void 0, import.meta.url));
const routes = [
  { path: "/", exact: true, name: "الرئيسية", element: UserDashboard },
  { path: "/content-generation", name: "كتابة المحتوي", element: ContentWriting },
  { path: "/ui-gen", name: "مولد نصوص برمجية", element: UIGen },
  { path: "/ui-img-gen", name: "مولد الصور", element: UIImageGen },
  { path: "/transelate", name: "المترجم", element: Transelation },
  { path: "/seo", name: "محسن محركات البحث", element: SEO },
  { path: "/payment", name: "الدفع", element: Payment },
  { path: "/verify", name: "تأكيد الهوية", element: OTPVerificationBox },
  { path: "/youtube-extractor", name: "مستخلص اليوتيوب", element: YoutubeExtractor }
];
const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname;
  const getRouteName = (pathname, routes2) => {
    const currentRoute = routes2.find((route) => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };
  const getBreadcrumbs = (location) => {
    const breadcrumbs2 = [];
    location.split("/").reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      const routeName = getRouteName(currentPathname, routes);
      routeName && breadcrumbs2.push({
        pathname: currentPathname,
        name: routeName,
        active: index + 1 === array.length ? true : false
      });
      return currentPathname;
    });
    return breadcrumbs2;
  };
  const breadcrumbs = getBreadcrumbs(currentLocation);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CBreadcrumb, { className: "my-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CBreadcrumbItem, { href: "/", children: "الرئيسية" }),
    breadcrumbs.map((breadcrumb, index) => {
      return /* @__PURE__ */ reactExports.createElement(
        CBreadcrumbItem,
        {
          ...breadcrumb.active ? { active: true } : { href: breadcrumb.pathname },
          key: index
        },
        breadcrumb.name
      );
    })
  ] });
};
React.memo(AppBreadcrumb);
const AppContent = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CContainer, { className: "px-4", lg: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { color: "primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    routes.map((route, idx) => {
      return route.element && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: route.path,
          exact: route.exact,
          name: route.name,
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(route.element, {})
        },
        idx
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "dashboard", replace: true }) })
  ] }) }) });
};
const AppContent$1 = React.memo(AppContent);
const AppFooter = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CFooter, { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ms-1", children: [
    " ",
    `جميع الحقوق محفوظة بذكاء 2025`
  ] }) }) }) });
};
const AppFooter$1 = React.memo(AppFooter);
const AppHeader = () => {
  const headerRef = reactExports.useRef();
  useColorModes("coreui-free-react-admin-template-theme");
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  reactExports.useEffect(() => {
    document.addEventListener("scroll", () => {
      headerRef.current && headerRef.current.classList.toggle("shadow-sm", document.documentElement.scrollTop > 0);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CHeader, { position: "sticky", className: "mb-4 p-0", ref: headerRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CContainer, { className: "border-bottom px-4", fluid: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CHeaderToggler,
      {
        onClick: () => dispatch({ type: "set", sidebarShow: !sidebarShow }),
        style: { marginInlineStart: "-14px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilMenu, size: "lg" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CHeaderNav, { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilAccountLogout, size: "lg", onClick: logout }) }) }) })
  ] }) });
};
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function("return this")();
var _root = root$2;
var root$1 = _root;
var now$1 = function() {
  return root$1.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var root = _root;
var Symbol$3 = root.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$1(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$1;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;
var baseTrim = _baseTrim, isObject$2 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject$1 = isObject_1, now = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce$1;
const debounce$2 = /* @__PURE__ */ getDefaultExportFromCjs(debounce_1);
var debounce = debounce_1, isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle;
const throttle$1 = /* @__PURE__ */ getDefaultExportFromCjs(throttle_1);
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
function getElementWindow$1(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }
  return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }
  return element.ownerDocument;
}
var getOptions$1 = function(obj) {
  var initialObj = {};
  var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);
    if (option) {
      var key = option[1].replace(/\W+(.)/g, function(_, chr) {
        return chr.toUpperCase();
      });
      switch (attribute.value) {
        case "true":
          acc[key] = true;
          break;
        case "false":
          acc[key] = false;
          break;
        case void 0:
          acc[key] = true;
          break;
        default:
          acc[key] = attribute.value;
      }
    }
    return acc;
  }, initialObj);
  return options;
};
function addClasses$1(el, classes) {
  var _a;
  if (!el)
    return;
  (_a = el.classList).add.apply(_a, classes.split(" "));
}
function removeClasses$1(el, classes) {
  if (!el)
    return;
  classes.split(" ").forEach(function(className) {
    el.classList.remove(className);
  });
}
function classNamesToQuery$1(classNames2) {
  return ".".concat(classNames2.split(" ").join("."));
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var helpers = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addClasses: addClasses$1,
  canUseDOM,
  classNamesToQuery: classNamesToQuery$1,
  getElementDocument: getElementDocument$1,
  getElementWindow: getElementWindow$1,
  getOptions: getOptions$1,
  removeClasses: removeClasses$1
});
var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM) {
  window.addEventListener("resize", function() {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}
function scrollbarWidth() {
  if (cachedScrollbarWidth === null) {
    if (typeof document === "undefined") {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }
    var body = document.body;
    var box = document.createElement("div");
    box.classList.add("simplebar-hide-scrollbar");
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }
  return cachedScrollbarWidth;
}
var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions = getOptions$1, addClasses = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
var SimpleBarCore = (
  /** @class */
  function() {
    function SimpleBarCore2(element, options) {
      if (options === void 0) {
        options = {};
      }
      var _this = this;
      this.removePreventClickId = null;
      this.minScrollbarWidth = 20;
      this.stopScrollDelay = 175;
      this.isScrolling = false;
      this.isMouseEntering = false;
      this.isDragging = false;
      this.scrollXTicking = false;
      this.scrollYTicking = false;
      this.wrapperEl = null;
      this.contentWrapperEl = null;
      this.contentEl = null;
      this.offsetEl = null;
      this.maskEl = null;
      this.placeholderEl = null;
      this.heightAutoObserverWrapperEl = null;
      this.heightAutoObserverEl = null;
      this.rtlHelpers = null;
      this.scrollbarWidth = 0;
      this.resizeObserver = null;
      this.mutationObserver = null;
      this.elStyles = null;
      this.isRtl = null;
      this.mouseX = 0;
      this.mouseY = 0;
      this.onMouseMove = function() {
      };
      this.onWindowResize = function() {
      };
      this.onStopScrolling = function() {
      };
      this.onMouseEntered = function() {
      };
      this.onScroll = function() {
        var elWindow = getElementWindow(_this.el);
        if (!_this.scrollXTicking) {
          elWindow.requestAnimationFrame(_this.scrollX);
          _this.scrollXTicking = true;
        }
        if (!_this.scrollYTicking) {
          elWindow.requestAnimationFrame(_this.scrollY);
          _this.scrollYTicking = true;
        }
        if (!_this.isScrolling) {
          _this.isScrolling = true;
          addClasses(_this.el, _this.classNames.scrolling);
        }
        _this.showScrollbar("x");
        _this.showScrollbar("y");
        _this.onStopScrolling();
      };
      this.scrollX = function() {
        if (_this.axis.x.isOverflowing) {
          _this.positionScrollbar("x");
        }
        _this.scrollXTicking = false;
      };
      this.scrollY = function() {
        if (_this.axis.y.isOverflowing) {
          _this.positionScrollbar("y");
        }
        _this.scrollYTicking = false;
      };
      this._onStopScrolling = function() {
        removeClasses(_this.el, _this.classNames.scrolling);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isScrolling = false;
      };
      this.onMouseEnter = function() {
        if (!_this.isMouseEntering) {
          addClasses(_this.el, _this.classNames.mouseEntered);
          _this.showScrollbar("x");
          _this.showScrollbar("y");
          _this.isMouseEntering = true;
        }
        _this.onMouseEntered();
      };
      this._onMouseEntered = function() {
        removeClasses(_this.el, _this.classNames.mouseEntered);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isMouseEntering = false;
      };
      this._onMouseMove = function(e) {
        _this.mouseX = e.clientX;
        _this.mouseY = e.clientY;
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseMoveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseMoveForAxis("y");
        }
      };
      this.onMouseLeave = function() {
        _this.onMouseMove.cancel();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseLeaveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseLeaveForAxis("y");
        }
        _this.mouseX = -1;
        _this.mouseY = -1;
      };
      this._onWindowResize = function() {
        _this.scrollbarWidth = _this.getScrollbarWidth();
        _this.hideNativeScrollbar();
      };
      this.onPointerEvent = function(e) {
        if (!_this.axis.x.track.el || !_this.axis.y.track.el || !_this.axis.x.scrollbar.el || !_this.axis.y.scrollbar.el)
          return;
        var isWithinTrackXBounds, isWithinTrackYBounds;
        _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
        _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
        }
        if (isWithinTrackXBounds || isWithinTrackYBounds) {
          e.stopPropagation();
          if (e.type === "pointerdown" && e.pointerType !== "touch") {
            if (isWithinTrackXBounds) {
              _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                _this.onDragStart(e, "x");
              } else {
                _this.onTrackClick(e, "x");
              }
            }
            if (isWithinTrackYBounds) {
              _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                _this.onDragStart(e, "y");
              } else {
                _this.onTrackClick(e, "y");
              }
            }
          }
        }
      };
      this.drag = function(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!_this.draggedAxis || !_this.contentWrapperEl)
          return;
        var eventOffset;
        var track = _this.axis[_this.draggedAxis].track;
        var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
        var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
        var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
        var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : "0px", 10);
        e.preventDefault();
        e.stopPropagation();
        if (_this.draggedAxis === "y") {
          eventOffset = e.pageY;
        } else {
          eventOffset = e.pageX;
        }
        var dragPos = eventOffset - ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) - _this.axis[_this.draggedAxis].dragOffset;
        dragPos = _this.draggedAxis === "x" && _this.isRtl ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) - scrollbar.size - dragPos : dragPos;
        var dragPerc = dragPos / (trackSize - scrollbar.size);
        var scrollPos = dragPerc * (contentSize - hostSize);
        if (_this.draggedAxis === "x" && _this.isRtl) {
          scrollPos = ((_l = SimpleBarCore2.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative) ? -scrollPos : scrollPos;
        }
        _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
      };
      this.onEndDrag = function(e) {
        _this.isDragging = false;
        var elDocument = getElementDocument(_this.el);
        var elWindow = getElementWindow(_this.el);
        e.preventDefault();
        e.stopPropagation();
        removeClasses(_this.el, _this.classNames.dragging);
        _this.onStopScrolling();
        elDocument.removeEventListener("mousemove", _this.drag, true);
        elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
        _this.removePreventClickId = elWindow.setTimeout(function() {
          elDocument.removeEventListener("click", _this.preventClick, true);
          elDocument.removeEventListener("dblclick", _this.preventClick, true);
          _this.removePreventClickId = null;
        });
      };
      this.preventClick = function(e) {
        e.preventDefault();
        e.stopPropagation();
      };
      this.el = element;
      this.options = __assign$1(__assign$1({}, SimpleBarCore2.defaultOptions), options);
      this.classNames = __assign$1(__assign$1({}, SimpleBarCore2.defaultOptions.classNames), options.classNames);
      this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        }
      };
      if (typeof this.el !== "object" || !this.el.nodeName) {
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      }
      this.onMouseMove = throttle$1(this._onMouseMove, 64);
      this.onWindowResize = debounce$2(this._onWindowResize, 64, { leading: true });
      this.onStopScrolling = debounce$2(this._onStopScrolling, this.stopScrollDelay);
      this.onMouseEntered = debounce$2(this._onMouseEntered, this.stopScrollDelay);
      this.init();
    }
    SimpleBarCore2.getRtlHelpers = function() {
      if (SimpleBarCore2.rtlHelpers) {
        return SimpleBarCore2.rtlHelpers;
      }
      var dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var scrollbarDummyEl = dummyDiv.firstElementChild;
      var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
      if (!dummyChild)
        return null;
      document.body.appendChild(scrollbarDummyEl);
      scrollbarDummyEl.scrollLeft = 0;
      var dummyContainerOffset = SimpleBarCore2.getOffset(scrollbarDummyEl);
      var dummyChildOffset = SimpleBarCore2.getOffset(dummyChild);
      scrollbarDummyEl.scrollLeft = -999;
      var dummyChildOffsetAfterScroll = SimpleBarCore2.getOffset(dummyChild);
      document.body.removeChild(scrollbarDummyEl);
      SimpleBarCore2.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
      };
      return SimpleBarCore2.rtlHelpers;
    };
    SimpleBarCore2.prototype.getScrollbarWidth = function() {
      try {
        if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
          return 0;
        } else {
          return scrollbarWidth();
        }
      } catch (e) {
        return scrollbarWidth();
      }
    };
    SimpleBarCore2.getOffset = function(el) {
      var rect = el.getBoundingClientRect();
      var elDocument = getElementDocument(el);
      var elWindow = getElementWindow(el);
      return {
        top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
        left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
      };
    };
    SimpleBarCore2.prototype.init = function() {
      if (canUseDOM) {
        this.initDOM();
        this.rtlHelpers = SimpleBarCore2.getRtlHelpers();
        this.scrollbarWidth = this.getScrollbarWidth();
        this.recalculate();
        this.initListeners();
      }
    };
    SimpleBarCore2.prototype.initDOM = function() {
      var _a, _b;
      this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
      this.contentEl = this.options.contentNode || this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
      this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
      this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
      this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
      this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
      this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
      this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
      this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
      this.axis.x.scrollbar.el = ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      this.axis.y.scrollbar.el = ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      if (!this.options.autoHide) {
        addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
        addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
      }
    };
    SimpleBarCore2.prototype.initListeners = function() {
      var _this = this;
      var _a;
      var elWindow = getElementWindow(this.el);
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("pointerdown", this.onPointerEvent, true);
      this.el.addEventListener("mousemove", this.onMouseMove);
      this.el.addEventListener("mouseleave", this.onMouseLeave);
      (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.onScroll);
      elWindow.addEventListener("resize", this.onWindowResize);
      if (!this.contentEl)
        return;
      if (window.ResizeObserver) {
        var resizeObserverStarted_1 = false;
        var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
        this.resizeObserver = new resizeObserver(function() {
          if (!resizeObserverStarted_1)
            return;
          elWindow.requestAnimationFrame(function() {
            _this.recalculate();
          });
        });
        this.resizeObserver.observe(this.el);
        this.resizeObserver.observe(this.contentEl);
        elWindow.requestAnimationFrame(function() {
          resizeObserverStarted_1 = true;
        });
      }
      this.mutationObserver = new elWindow.MutationObserver(function() {
        elWindow.requestAnimationFrame(function() {
          _this.recalculate();
        });
      });
      this.mutationObserver.observe(this.contentEl, {
        childList: true,
        subtree: true,
        characterData: true
      });
    };
    SimpleBarCore2.prototype.recalculate = function() {
      if (!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)
        return;
      var elWindow = getElementWindow(this.el);
      this.elStyles = elWindow.getComputedStyle(this.el);
      this.isRtl = this.elStyles.direction === "rtl";
      var contentElOffsetWidth = this.contentEl.offsetWidth;
      var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
      var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
      var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
      var elOverflowX = this.elStyles.overflowX;
      var elOverflowY = this.elStyles.overflowY;
      this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
      this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
      var contentElScrollHeight = this.contentEl.scrollHeight;
      var contentElScrollWidth = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
      this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
      this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
      var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
      this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
      this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
      this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
      this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
      this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
      this.hideNativeScrollbar();
      var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
      var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
      this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
      this.axis.x.scrollbar.size = this.getScrollbarSize("x");
      this.axis.y.scrollbar.size = this.getScrollbarSize("y");
      if (this.axis.x.scrollbar.el)
        this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
      if (this.axis.y.scrollbar.el)
        this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
      this.positionScrollbar("x");
      this.positionScrollbar("y");
      this.toggleTrackVisibility("x");
      this.toggleTrackVisibility("y");
    };
    SimpleBarCore2.prototype.getScrollbarSize = function(axis) {
      var _a, _b;
      if (axis === void 0) {
        axis = "y";
      }
      if (!this.axis[axis].isOverflowing || !this.contentEl) {
        return 0;
      }
      var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
      var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
      var scrollbarRatio = trackSize / contentSize;
      var scrollbarSize;
      scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
      if (this.options.scrollbarMaxSize) {
        scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
      }
      return scrollbarSize;
    };
    SimpleBarCore2.prototype.positionScrollbar = function(axis) {
      var _a, _b, _c;
      if (axis === void 0) {
        axis = "y";
      }
      var scrollbar = this.axis[axis].scrollbar;
      if (!this.axis[axis].isOverflowing || !this.contentWrapperEl || !scrollbar.el || !this.elStyles) {
        return;
      }
      var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
      var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;
      var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
      var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      scrollOffset = axis === "x" && this.isRtl && ((_b = SimpleBarCore2.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero) ? -scrollOffset : scrollOffset;
      if (axis === "x" && this.isRtl) {
        scrollOffset = ((_c = SimpleBarCore2.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative) ? scrollOffset : -scrollOffset;
      }
      var scrollPourcent = scrollOffset / (contentSize - hostSize);
      var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
      handleOffset = axis === "x" && this.isRtl ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
      scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
    };
    SimpleBarCore2.prototype.toggleTrackVisibility = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var track = this.axis[axis].track.el;
      var scrollbar = this.axis[axis].scrollbar.el;
      if (!track || !scrollbar || !this.contentWrapperEl)
        return;
      if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
        track.style.visibility = "visible";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
        this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
      } else {
        track.style.visibility = "hidden";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
        this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
      }
      if (this.axis[axis].isOverflowing) {
        scrollbar.style.display = "block";
      } else {
        scrollbar.style.display = "none";
      }
    };
    SimpleBarCore2.prototype.showScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
        addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = true;
      }
    };
    SimpleBarCore2.prototype.hideScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.isDragging)
        return;
      if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = false;
      }
    };
    SimpleBarCore2.prototype.hideNativeScrollbar = function() {
      if (!this.offsetEl)
        return;
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
      this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
    };
    SimpleBarCore2.prototype.onMouseMoveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!currentAxis.track.el || !currentAxis.scrollbar.el)
        return;
      currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
      currentAxis.scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      if (this.isWithinBounds(currentAxis.track.rect)) {
        this.showScrollbar(axis);
        addClasses(currentAxis.track.el, this.classNames.hover);
        if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
          addClasses(currentAxis.scrollbar.el, this.classNames.hover);
        } else {
          removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
        }
      } else {
        removeClasses(currentAxis.track.el, this.classNames.hover);
        if (this.options.autoHide) {
          this.hideScrollbar(axis);
        }
      }
    };
    SimpleBarCore2.prototype.onMouseLeaveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      removeClasses(this.axis[axis].track.el, this.classNames.hover);
      removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
      if (this.options.autoHide) {
        this.hideScrollbar(axis);
      }
    };
    SimpleBarCore2.prototype.onDragStart = function(e, axis) {
      var _a;
      if (axis === void 0) {
        axis = "y";
      }
      this.isDragging = true;
      var elDocument = getElementDocument(this.el);
      var elWindow = getElementWindow(this.el);
      var scrollbar = this.axis[axis].scrollbar;
      var eventOffset = axis === "y" ? e.pageY : e.pageX;
      this.axis[axis].dragOffset = eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);
      this.draggedAxis = axis;
      addClasses(this.el, this.classNames.dragging);
      elDocument.addEventListener("mousemove", this.drag, true);
      elDocument.addEventListener("mouseup", this.onEndDrag, true);
      if (this.removePreventClickId === null) {
        elDocument.addEventListener("click", this.preventClick, true);
        elDocument.addEventListener("dblclick", this.preventClick, true);
      } else {
        elWindow.clearTimeout(this.removePreventClickId);
        this.removePreventClickId = null;
      }
    };
    SimpleBarCore2.prototype.onTrackClick = function(e, axis) {
      var _this = this;
      var _a, _b, _c, _d;
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!this.options.clickOnTrack || !currentAxis.scrollbar.el || !this.contentWrapperEl)
        return;
      e.preventDefault();
      var elWindow = getElementWindow(this.el);
      this.axis[axis].scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      var scrollbar = this.axis[axis].scrollbar;
      var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
      var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : "0px", 10);
      var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      var t = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
      var dir = t < 0 ? -1 : 1;
      var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
      var speed = 40;
      var scrollTo = function() {
        if (!_this.contentWrapperEl)
          return;
        if (dir === -1) {
          if (scrolled > scrollSize) {
            scrolled -= speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        } else {
          if (scrolled < scrollSize) {
            scrolled += speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        }
      };
      scrollTo();
    };
    SimpleBarCore2.prototype.getContentElement = function() {
      return this.contentEl;
    };
    SimpleBarCore2.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    };
    SimpleBarCore2.prototype.removeListeners = function() {
      var elWindow = getElementWindow(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter);
      this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
      this.el.removeEventListener("mousemove", this.onMouseMove);
      this.el.removeEventListener("mouseleave", this.onMouseLeave);
      if (this.contentWrapperEl) {
        this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
      }
      elWindow.removeEventListener("resize", this.onWindowResize);
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.onMouseMove.cancel();
      this.onWindowResize.cancel();
      this.onStopScrolling.cancel();
      this.onMouseEntered.cancel();
    };
    SimpleBarCore2.prototype.unMount = function() {
      this.removeListeners();
    };
    SimpleBarCore2.prototype.isWithinBounds = function(bbox) {
      return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
    };
    SimpleBarCore2.prototype.findChild = function(el, query) {
      var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      return Array.prototype.filter.call(el.children, function(child) {
        return matches.call(child, query);
      })[0];
    };
    SimpleBarCore2.rtlHelpers = null;
    SimpleBarCore2.defaultOptions = {
      forceVisible: false,
      clickOnTrack: true,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: true
    };
    SimpleBarCore2.getOptions = getOptions;
    SimpleBarCore2.helpers = helpers;
    return SimpleBarCore2;
  }()
);
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var SimpleBar = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, _b = _a.scrollableNodeProps, scrollableNodeProps = _b === void 0 ? {} : _b, otherProps = __rest(_a, ["children", "scrollableNodeProps"]);
  var elRef = reactExports.useRef();
  var scrollableNodeRef = reactExports.useRef();
  var contentNodeRef = reactExports.useRef();
  var options = {};
  var rest = {};
  Object.keys(otherProps).forEach(function(key) {
    if (Object.prototype.hasOwnProperty.call(SimpleBarCore.defaultOptions, key)) {
      options[key] = otherProps[key];
    } else {
      rest[key] = otherProps[key];
    }
  });
  var classNames2 = __assign(__assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
  var scrollableNodeFullProps = __assign(__assign({}, scrollableNodeProps), { className: "".concat(classNames2.contentWrapper).concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : ""), tabIndex: options.tabIndex || SimpleBarCore.defaultOptions.tabIndex, role: "region", "aria-label": options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel });
  reactExports.useEffect(function() {
    var instance;
    scrollableNodeRef.current = scrollableNodeFullProps.ref ? scrollableNodeFullProps.ref.current : scrollableNodeRef.current;
    if (elRef.current) {
      instance = new SimpleBarCore(elRef.current, __assign(__assign(__assign({}, options), scrollableNodeRef.current && {
        scrollableNode: scrollableNodeRef.current
      }), contentNodeRef.current && {
        contentNode: contentNodeRef.current
      }));
      if (typeof ref === "function") {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }
    return function() {
      instance === null || instance === void 0 ? void 0 : instance.unMount();
      instance = null;
      if (typeof ref === "function") {
        ref(null);
      }
    };
  }, []);
  return reactExports.createElement(
    "div",
    __assign({ "data-simplebar": "init", ref: elRef }, rest),
    reactExports.createElement(
      "div",
      { className: classNames2.wrapper },
      reactExports.createElement(
        "div",
        { className: classNames2.heightAutoObserverWrapperEl },
        reactExports.createElement("div", { className: classNames2.heightAutoObserverEl })
      ),
      reactExports.createElement(
        "div",
        { className: classNames2.mask },
        reactExports.createElement("div", { className: classNames2.offset }, typeof children === "function" ? children({
          scrollableNodeRef,
          scrollableNodeProps: __assign(__assign({}, scrollableNodeFullProps), { ref: scrollableNodeRef }),
          contentNodeRef,
          contentNodeProps: {
            className: classNames2.contentEl,
            ref: contentNodeRef
          }
        }) : reactExports.createElement(
          "div",
          __assign({}, scrollableNodeFullProps),
          reactExports.createElement("div", { className: classNames2.contentEl }, children)
        ))
      ),
      reactExports.createElement("div", { className: classNames2.placeholder })
    ),
    reactExports.createElement(
      "div",
      { className: "".concat(classNames2.track, " simplebar-horizontal") },
      reactExports.createElement("div", { className: classNames2.scrollbar })
    ),
    reactExports.createElement(
      "div",
      { className: "".concat(classNames2.track, " simplebar-vertical") },
      reactExports.createElement("div", { className: classNames2.scrollbar })
    )
  );
});
SimpleBar.displayName = "SimpleBar";
const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      icon ? icon : indent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon-bullet" }) }),
      name && name,
      badge && /* @__PURE__ */ jsxRuntimeExports.jsx(CBadge, { color: badge.color, className: "ms-auto", size: "sm", children: badge.text })
    ] });
  };
  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { as: "div", children: rest.to || rest.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      CNavLink,
      {
        ...rest.to && { as: NavLink },
        ...rest.href && { target: "_blank", rel: "noopener noreferrer" },
        ...rest,
        children: navLink(name, icon, badge, indent)
      }
    ) : navLink(name, icon, badge, indent) }, index);
  };
  const navGroup = (item, index) => {
    var _a;
    const { component, name, icon, items: items2, to, ...rest } = item;
    const Component = component;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { compact: true, as: "div", toggler: navLink(name, icon), ...rest, children: (_a = item.items) == null ? void 0 : _a.map(
      (item2, index2) => item2.items ? navGroup(item2, index2) : navItem(item2, index2, true)
    ) }, index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CSidebarNav, { as: SimpleBar, children: items && items.map((item, index) => item.items ? navGroup(item, index) : navItem(item, index)) });
};
AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired
};
const logo = "" + new URL("logo-CKB3HxJh.png", import.meta.url).href;
const _nav = [
  {
    component: CNavItem,
    name: "الرئيسية",
    to: "/",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilSpeedometer, customClassName: "nav-icon" })
  },
  {
    component: CNavItem,
    name: "مصمم الصور",
    to: "/ui-img-gen",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilImage, customClassName: "nav-icon" })
  },
  {
    component: CNavItem,
    name: "مصمم المواقع ",
    to: "/ui-gen",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilCursor, customClassName: "nav-icon" })
  },
  {
    component: CNavItem,
    name: "ملخص اليوتيوب",
    to: "/youtube-extractor",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilVideo, customClassName: "nav-icon" })
  },
  {
    component: CNavItem,
    name: "الترجمة",
    to: "/transelate",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilNotes, customClassName: "nav-icon" })
  },
  ///content-generation
  {
    component: CNavItem,
    name: "كاتب المقالات",
    to: "/content-generation",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilNotes, customClassName: "nav-icon" })
  },
  {
    component: CNavItem,
    name: "الدفع",
    to: "/payment",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cibPaypal, customClassName: "nav-icon" })
  },
  {
    component: CNavItem,
    name: "تأكيد الهوية",
    to: "/verify",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilCheckCircle, customClassName: "nav-icon" })
  }
];
const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CSidebar,
    {
      className: "border-end",
      colorScheme: "dark",
      position: "fixed",
      unfoldable,
      visible: sidebarShow,
      onVisibleChange: (visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CSidebarHeader, { className: "border-bottom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CSidebarBrand, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, style: { width: "100%", height: "10%" } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CCloseButton,
            {
              className: "d-lg-none",
              dark: true,
              onClick: () => dispatch({ type: "set", sidebarShow: false })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebarNav, { items: _nav }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CSidebarFooter, { className: "border-top d-none d-lg-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CSidebarToggler,
          {
            onClick: () => dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        ) })
      ]
    }
  );
};
const AppSidebar$1 = React.memo(AppSidebar);
({
  href: PropTypes.string
});
const DocsLink = (props) => {
  const { href, name, text, ...rest } = props;
  const _href = name ? `https://coreui.io/react/docs/components/${name}` : href;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    CLink,
    {
      ...rest,
      href: _href,
      rel: "noreferrer noopener",
      target: "_blank",
      className: "card-header-action",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-body-secondary", children: text || "docs" })
    }
  ) });
};
DocsLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
};
React.memo(DocsLink);
const DocsExample = (props) => {
  const { children, href, tabContentClassName } = props;
  const _href = `https://coreui.io/react/docs/${href}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "example", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "underline-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNavLink, { href: "#", active: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilMediaPlay, className: "me-2" }),
        "Preview"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNavLink, { href: _href, target: "_blank", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilCode, className: "me-2" }),
        "Code"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTabContent, { className: `rounded-bottom ${tabContentClassName ? tabContentClassName : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTabPane, { className: "p-3 preview", visible: true, children }) })
  ] });
};
DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tabContentClassName: PropTypes.string
};
React.memo(DocsExample);
const DefaultLayout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper d-flex flex-column min-vh-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "body flex-grow-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppContent$1, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppFooter$1, {})
    ] })
  ] });
};
const DefaultLayout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DefaultLayout
}, Symbol.toStringTag, { value: "Module" }));
export {
  CBadge as C,
  DefaultLayout$1 as D
};
