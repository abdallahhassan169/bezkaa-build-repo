import { r as reactExports, _ as __rest, R as React, a as __assign, c as classNames, P as PropTypes, b as colorPropType, j as jsxRuntimeExports, aG as apiPost } from "./index-CiKRmcYv.js";
import { C as CRow, a as CCol } from "./CRow-B-Kpm6wY.js";
import { C as CCard, a as CCardBody } from "./CCardBody-Sy_aGZfG.js";
import { C as CCardHeader } from "./CCardHeader-DwUN0K1f.js";
import { C as CBadge } from "./DefaultLayout-2QcYHQHr.js";
import "./CContainer-BUdtFN55.js";
var CTableHead = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return React.createElement("thead", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableHead.displayName = "CTableHead";
var CTableHeaderCell = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return React.createElement("th", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableHeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableHeaderCell.displayName = "CTableHeaderCell";
var CTableBody = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return React.createElement("tbody", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableBody.displayName = "CTableBody";
var CTableDataCell = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
  var Component = rest.scope ? "th" : "td";
  return React.createElement(Component, __assign({ className: classNames((_b = {}, _b["align-".concat(align)] = align, _b["table-active"] = active, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableDataCell.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(["bottom", "middle", "top"]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableDataCell.displayName = "CTableDataCell";
var CTableRow = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
  return React.createElement("tr", __assign({ className: classNames((_b = {}, _b["align-".concat(align)] = align, _b["table-active"] = active, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableRow.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(["bottom", "middle", "top"]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableRow.displayName = "CTableRow";
var CTableFoot = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return React.createElement("tfoot", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableFoot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableFoot.displayName = "CTableFoot";
var CTableCaption = reactExports.forwardRef(function(_a, ref) {
  var children = _a.children, props = __rest(_a, ["children"]);
  return React.createElement("caption", __assign({}, props, { ref }), children);
});
CTableCaption.propTypes = {
  children: PropTypes.node
};
CTableCaption.displayName = "CTableCaption";
var CTableResponsiveWrapper = function(_a) {
  var children = _a.children, responsive = _a.responsive, rest = __rest(_a, ["children", "responsive"]);
  return responsive ? React.createElement("div", __assign({ className: typeof responsive === "boolean" ? "table-responsive" : "table-responsive-".concat(responsive) }, rest), children) : React.createElement(React.Fragment, null, children);
};
CTableResponsiveWrapper.propTypes = {
  children: PropTypes.node,
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ])
};
CTableResponsiveWrapper.displayName = "CTableResponsiveWrapper";
var pretifyName = function(name) {
  return name.replace(/[-_.]/g, " ").replace(/ +/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};
var getColumnLabel = function(column) {
  var _a;
  return typeof column === "object" ? (_a = column.label) !== null && _a !== void 0 ? _a : pretifyName(column.key) : pretifyName(column);
};
var getColumnNames = function(columns, items) {
  return columns ? columns.map(function(column) {
    return typeof column === "object" ? column.key : column;
  }) : items && getColumnNamesFromItems(items);
};
var getColumnNamesFromItems = function(items) {
  return Object.keys(items[0] || {}).filter(function(el) {
    return el.charAt(0) !== "_";
  });
};
var CTable = reactExports.forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children, align = _a.align, borderColor = _a.borderColor, bordered = _a.bordered, borderless = _a.borderless, caption = _a.caption, captionTop = _a.captionTop, className = _a.className, color = _a.color, columns = _a.columns, footer = _a.footer, hover = _a.hover, items = _a.items, responsive = _a.responsive, small = _a.small, striped = _a.striped, stripedColumns = _a.stripedColumns, tableFootProps = _a.tableFootProps, tableHeadProps = _a.tableHeadProps, rest = __rest(_a, ["children", "align", "borderColor", "bordered", "borderless", "caption", "captionTop", "className", "color", "columns", "footer", "hover", "items", "responsive", "small", "striped", "stripedColumns", "tableFootProps", "tableHeadProps"]);
  var columnNames = reactExports.useMemo(function() {
    return getColumnNames(columns, items);
  }, [columns, items]);
  return React.createElement(
    CTableResponsiveWrapper,
    { responsive },
    React.createElement(
      "table",
      __assign({ className: classNames("table", (_b = {}, _b["align-".concat(align)] = align, _b["border-".concat(borderColor)] = borderColor, _b["caption-top"] = captionTop || caption === "top", _b["table-bordered"] = bordered, _b["table-borderless"] = borderless, _b["table-".concat(color)] = color, _b["table-hover"] = hover, _b["table-sm"] = small, _b["table-striped"] = striped, _b["table-striped-columns"] = stripedColumns, _b), className) }, rest, { ref }),
      (caption && caption !== "top" || captionTop) && React.createElement(CTableCaption, null, caption || captionTop),
      columns && React.createElement(
        CTableHead,
        __assign({}, tableHeadProps),
        React.createElement(CTableRow, null, columns.map(function(column, index) {
          return React.createElement(CTableHeaderCell, __assign({}, column._props && __assign({}, column._props), column._style && { style: __assign({}, column._style) }, { key: index }), getColumnLabel(column));
        }))
      ),
      items && React.createElement(CTableBody, null, items.map(function(item, index) {
        return React.createElement(CTableRow, __assign({}, item._props && __assign({}, item._props), { key: index }), columnNames && columnNames.map(function(colName, index2) {
          return item[colName] !== void 0 ? React.createElement(CTableDataCell, __assign({}, item._cellProps && __assign(__assign({}, item._cellProps["all"] && __assign({}, item._cellProps["all"])), item._cellProps[colName] && __assign({}, item._cellProps[colName])), { key: index2 }), item[colName]) : null;
        }));
      })),
      children,
      footer && React.createElement(
        CTableFoot,
        __assign({}, tableFootProps),
        React.createElement(CTableRow, null, footer.map(function(item, index) {
          return React.createElement(CTableDataCell, __assign({}, typeof item === "object" && item._props && __assign({}, item._props), { key: index }), typeof item === "object" ? item.label : item);
        }))
      )
    )
  );
});
CTable.propTypes = {
  align: PropTypes.oneOf(["bottom", "middle", "top"]),
  borderColor: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(["top"])]),
  captionTop: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  columns: PropTypes.array,
  footer: PropTypes.array,
  hover: PropTypes.bool,
  items: PropTypes.array,
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  small: PropTypes.bool,
  striped: PropTypes.bool,
  stripedColumns: PropTypes.bool,
  tableFootProps: PropTypes.shape(__assign({}, CTableFoot.propTypes)),
  tableHeadProps: PropTypes.shape(__assign({}, CTableHead.propTypes))
};
CTable.displayName = "CTable";
const defaultUser = {
  id: "لا يوجد",
  name: "زائر",
  email: "لا يوجد",
  phone: "غير متاح",
  credit_points: 0,
  email_verified: false,
  google_id: "لا يوجد",
  last_pay_date: "غير متاح"
};
const UserDashboard = () => {
  const [user, setUser] = reactExports.useState(defaultUser);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const fetchUserData = async () => {
      var _a, _b;
      try {
        const response = await apiPost("/users/users");
        if (!((_a = response.data) == null ? void 0 : _a.status) === 200) {
          throw new Error("Network response was not ok");
        }
        const data = (_b = response.data) == null ? void 0 : _b.body;
        if (data) {
          setUser(data);
        } else {
          console.warn("No data received from the API. Using default data.");
        }
      } catch (error2) {
        setError(error2.message);
        console.error("Error fetching user data:", error2);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Error: ",
      error
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: "12", md: "6", lg: "6", style: { marginTop: "15px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "معلومات المستخدم" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTable, { striped: true, hover: true, responsive: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "الاسم" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: user.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "البريد الإلكتروني" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: user.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "رقم الهاتف" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: user.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "تم التحقق من البريد الإلكتروني" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CBadge, { color: user.email_verified ? "success" : "danger", children: user.email_verified ? "تم التحقق" : "لم يتم التحقق" }) })
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: "12", md: "6", lg: "6", style: { marginTop: "15px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "تفاصيل الدفع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTable, { striped: true, hover: true, responsive: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "النقاط المتاحة" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: user.credit_points })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "تاريخ اخر تجديد" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: user.last_pay_date })
        ] })
      ] }) }) })
    ] }) })
  ] }) });
};
export {
  UserDashboard as default
};
