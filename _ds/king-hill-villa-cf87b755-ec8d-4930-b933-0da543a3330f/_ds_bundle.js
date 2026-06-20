/* @ds-bundle: {"format":3,"namespace":"DesignSystem_cf87b7","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"a4514b56413b","components/brand/Wordmark.jsx":"76e12952c271","components/core/Badge.jsx":"c624e40a0609","components/core/Button.jsx":"af6989d770bd","components/core/Card.jsx":"73b9375d7759","components/forms/Input.jsx":"92c2f440b2e0","components/forms/Select.jsx":"8ea767eabb3f","ui_kits/website/Footer.jsx":"daa816801c8b","ui_kits/website/Hero.jsx":"69ec167f914b","ui_kits/website/Sections.jsx":"be825535b223","ui_kits/website/SiteHeader.jsx":"1f1b75d4c95b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_cf87b7 = window.DesignSystem_cf87b7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* King Hill Villa: Eyebrow */
function Eyebrow({
  children,
  tone = 'gold',
  ornament = true,
  align = 'center',
  style,
  ...rest
}) {
  const colors = {
    gold: 'var(--kh-sandstone-gold)',
    ocean: 'var(--kh-ocean-blue)',
    onDark: 'var(--kh-sandstone-gold)'
  };
  const color = colors[tone] || colors.gold;
  const diamond = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--kh-sandstone-gold)',
      fontSize: '0.7em',
      lineHeight: 1
    }
  }, "✦");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      gap: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), ornament && diamond, /*#__PURE__*/React.createElement("span", null, children), ornament && align === 'center' && diamond);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* King Hill Villa: Wordmark */
function Wordmark({
  tone = 'dark',
  size = 'md',
  harbor = true,
  est = true,
  style,
  ...rest
}) {
  const scale = {
    sm: 0.66,
    md: 1,
    lg: 1.5
  };
  const s = scale[size] || 1;
  const main = tone === 'light' ? 'var(--kh-ivory-white)' : 'var(--kh-ocean-blue)';
  const gold = 'var(--kh-sandstone-gold)';
  const diamond = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: gold,
      fontSize: 0.6 * 28 * s
    }
  }, "✦");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6 * s,
      fontFamily: 'var(--font-display)',
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44 * s,
      fontWeight: 700,
      letterSpacing: '0.03em',
      color: main
    }
  }, "King Hill Villa"), harbor && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10 * s,
      fontSize: 14 * s,
      fontWeight: 500,
      letterSpacing: '0.26em',
      color: main
    }
  }, diamond, /*#__PURE__*/React.createElement("span", null, "AT MUDJIN HARBOR"), diamond), est && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11 * s,
      fontWeight: 600,
      letterSpacing: '0.34em',
      color: gold,
      marginTop: 2 * s
    }
  }, "EST 2024"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* King Hill Villa: Badge / Tag */
function Badge({
  children,
  tone = 'ocean',
  subtle = false,
  style,
  ...rest
}) {
  const tones = {
    ocean: {
      solid: {
        bg: 'var(--kh-ocean-blue)',
        fg: 'var(--kh-ivory-white)'
      },
      soft: {
        bg: 'rgba(11,58,99,0.10)',
        fg: 'var(--kh-ocean-blue)'
      }
    },
    aqua: {
      solid: {
        bg: 'var(--kh-caribbean-aqua)',
        fg: '#fff'
      },
      soft: {
        bg: 'var(--kh-aqua-100)',
        fg: 'var(--kh-aqua-600)'
      }
    },
    gold: {
      solid: {
        bg: 'var(--kh-sandstone-gold)',
        fg: 'var(--kh-ocean-900)'
      },
      soft: {
        bg: 'var(--kh-gold-200)',
        fg: 'var(--kh-driftwood-600)'
      }
    },
    palm: {
      solid: {
        bg: 'var(--kh-palm-green)',
        fg: '#fff'
      },
      soft: {
        bg: 'rgba(69,107,58,0.12)',
        fg: 'var(--kh-palm-600)'
      }
    },
    neutral: {
      solid: {
        bg: 'var(--kh-ink-700)',
        fg: '#fff'
      },
      soft: {
        bg: 'var(--kh-sand-300)',
        fg: 'var(--kh-ink-700)'
      }
    }
  };
  const c = tones[tone][subtle ? 'soft' : 'solid'];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: c.bg,
      color: c.fg,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.2,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* King Hill Villa: Button */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13,
      letterSpacing: '0.1em'
    },
    md: {
      padding: '13px 26px',
      fontSize: 14,
      letterSpacing: '0.12em'
    },
    lg: {
      padding: '17px 38px',
      fontSize: 15,
      letterSpacing: '0.14em'
    }
  };
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    textTransform: 'uppercase',
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--kh-ocean-blue)',
      color: 'var(--kh-ivory-white)',
      borderColor: 'var(--kh-ocean-blue)'
    },
    gold: {
      background: 'var(--kh-sandstone-gold)',
      color: 'var(--kh-ocean-900)',
      borderColor: 'var(--kh-sandstone-gold)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--kh-ocean-blue)',
      borderColor: 'var(--kh-ocean-blue)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--kh-ocean-blue)',
      borderColor: 'transparent'
    },
    onDark: {
      background: 'transparent',
      color: 'var(--kh-ivory-white)',
      borderColor: 'rgba(248,244,236,0.55)'
    }
  };
  const hover = {
    primary: {
      background: 'var(--kh-ocean-700)',
      borderColor: 'var(--kh-ocean-700)'
    },
    gold: {
      background: 'var(--kh-gold-600)',
      borderColor: 'var(--kh-gold-600)'
    },
    secondary: {
      background: 'var(--kh-ocean-blue)',
      color: 'var(--kh-ivory-white)'
    },
    ghost: {
      background: 'rgba(11,58,99,0.08)'
    },
    onDark: {
      background: 'rgba(248,244,236,0.12)',
      borderColor: 'var(--kh-ivory-white)'
    }
  };
  const [h, setH] = React.useState(false);
  const merged = {
    ...base,
    ...variants[variant],
    ...(h && !disabled ? hover[variant] : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    style: merged
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* King Hill Villa: Card */
function Card({
  children,
  image,
  imageAlt = '',
  arch = false,
  overline,
  title,
  body,
  footer,
  elevated = true,
  style,
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const interactive = !!onClick;
  const wrap = {
    background: 'var(--color-surface)',
    border: '1px solid var(--border-hairline)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    boxShadow: elevated ? h && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)' : 'none',
    transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
    transform: h && interactive ? 'translateY(-3px)' : 'translateY(0)',
    cursor: interactive ? 'pointer' : 'default',
    display: 'flex',
    flexDirection: 'column',
    ...style
  };
  const mediaStyle = {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    display: 'block',
    borderRadius: arch ? 'var(--radius-arch)' : 0,
    margin: arch ? '14px 14px 0' : 0,
    width: arch ? 'calc(100% - 28px)' : '100%',
    border: arch ? '2px solid var(--border-frame)' : 'none'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: mediaStyle
  }), (overline || title || body || footer || children) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, overline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-gold)'
    }
  }, overline), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: 'var(--text-heading)',
      lineHeight: 1.2
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, body), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* King Hill Villa: Input */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      background: 'var(--color-surface)',
      border: `1.5px solid ${error ? '#b3503f' : focus ? 'var(--kh-caribbean-aqua)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px rgba(30,156,195,0.18)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? '#b3503f' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* King Hill Villa: Select */
function Select({
  label,
  value,
  onChange,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      background: 'var(--color-surface)',
      border: `1.5px solid ${focus ? 'var(--kh-caribbean-aqua)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '12px 38px 12px 14px',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? '0 0 0 3px rgba(30,156,195,0.18)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--kh-ocean-blue)',
      fontSize: 11
    }
  }, "▼")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* King Hill Villa: Kai chatbot bubble + site footer */
function KaiChat() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 26,
      bottom: 26,
      zIndex: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 14
    }
  }, open && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      background: 'var(--kh-ivory-white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--kh-ocean-blue)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/kai_turtle.png",
    alt: "Kai",
    style: {
      width: 34,
      height: 34,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--kh-sandstone-gold)',
      fontSize: 15,
      letterSpacing: '0.06em'
    }
  }, "Kai"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'rgba(248,244,236,0.7)',
      fontSize: 11
    }
  }, "Your island guide"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      background: 'var(--kh-sand-300)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)'
    }
  }, "Hi, I’m Kai 🐢 Ask me about the villa, beaches, or things to do on Middle Caicos."))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      border: '2px solid var(--kh-sandstone-gold)',
      background: 'var(--kh-ocean-blue)',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-md)',
      padding: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/kai_turtle.png",
    alt: "Chat with Kai",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })));
}
function SiteFooter() {
  const {
    Wordmark
  } = window.DesignSystem_cf87b7;
  const cols = [{
    h: 'The Villa',
    items: ['Overview', 'Rooms & Suites', 'Amenities', 'Gallery']
  }, {
    h: 'Middle Caicos',
    items: ['Mudjin Harbor', 'Beaches', 'Local Guide', 'Getting Here']
  }, {
    h: 'Plan',
    items: ['Book Your Stay', 'Rates & Availability', 'Concierge', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--kh-ocean-900)',
      color: 'var(--kh-ivory-white)',
      padding: '72px 40px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "light",
    size: "sm"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'rgba(248,244,236,0.65)',
      marginTop: 18,
      maxWidth: 260
    }
  }, "“Discover the quiet side of paradise.”")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--kh-sandstone-gold)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(248,244,236,0.78)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '44px auto 0',
      paddingTop: 22,
      borderTop: '1px solid rgba(248,244,236,0.14)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'rgba(248,244,236,0.5)',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 King Hill Villa at Mudjin Harbor"), /*#__PURE__*/React.createElement("span", null, "Middle Caicos, Turks & Caicos Islands")));
}
window.KaiChat = KaiChat;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* King Hill Villa: Hero with full-bleed drone image + booking bar */
function Hero({
  onBook
}) {
  const {
    Button,
    Wordmark,
    Select,
    Input
  } = window.DesignSystem_cf87b7;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 640,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo_cliffs.png",
    alt: "Mudjin Harbor cliffs",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(7,39,63,0.42) 0%, rgba(7,39,63,0.30) 45%, rgba(7,39,63,0.66) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '90px 24px 150px',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "light",
    size: "sm",
    harbor: true,
    est: true,
    style: {
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 58,
      lineHeight: 1.06,
      letterSpacing: '0.02em',
      color: 'var(--kh-ivory-white)',
      margin: '0 0 18px',
      textShadow: '0 2px 24px rgba(7,39,63,0.4)'
    }
  }, "Experience Middle Caicos"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.6,
      color: 'rgba(248,244,236,0.92)',
      maxWidth: 560,
      margin: '0 auto 34px'
    }
  }, "A private Caribbean villa overlooking the turquoise waters of Mudjin Harbor."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: onBook
  }, "Book Your Stay"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg"
  }, "Explore the Villa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
      width: 'min(900px, 90%)',
      background: 'var(--kh-ivory-white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-hairline)',
      padding: '20px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr auto',
      gap: 18,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Arrival",
    type: "date"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Departure",
    type: "date"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Guests",
    options: ['2 guests', '4 guests', '6 guests', '8 guests']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    style: {
      height: 47
    },
    onClick: onBook
  }, "Check Dates")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* King Hill Villa: Intro + experience grid + ocean-life CTA band */
function VillaStory() {
  const {
    Eyebrow
  } = window.DesignSystem_cf87b7;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--kh-ivory-white)',
      padding: '128px 40px 80px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 20
    }
  }, "Discover the Quiet Side of Paradise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: '0.02em',
      color: 'var(--kh-ocean-blue)',
      margin: '0 auto 20px',
      maxWidth: 720,
      lineHeight: 1.15
    }
  }, "Where the Caribbean Slows Down"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, "Perched above one of the most beautiful beaches in the Caribbean, King Hill Villa is a private retreat on Middle Caicos, empty beaches, turquoise water, and golden-hour views from every room."));
}
function ExperienceGrid() {
  const {
    Card,
    Badge,
    Button
  } = window.DesignSystem_cf87b7;
  const items = [{
    image: '../../assets/photo_beach.png',
    overline: 'Beach of the Week',
    title: 'Mudjin Harbor Cove',
    body: 'Cliff stairs lead down to a hidden stretch of empty sand.',
    tag: 'Oceanfront'
  }, {
    image: '../../assets/photo_turtle.png',
    overline: 'Ocean Life',
    title: 'Snorkel the Reef',
    body: 'Sea turtles, rays and reef fish a short swim from shore.',
    tag: 'Guided'
  }, {
    image: '../../assets/photo_sunset.png',
    overline: 'Sunset Reports',
    title: 'Golden Hour Dining',
    body: 'Outdoor dinners as the sky turns over the harbor.',
    tag: 'Private Chef'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--kh-sand-300)',
      padding: '80px 40px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 26
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    image: it.image,
    overline: it.overline,
    title: it.title,
    body: it.body,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "aqua",
      subtle: true
    }, it.tag), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Details"))
  })))));
}
window.VillaStory = VillaStory;
window.ExperienceGrid = ExperienceGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* King Hill Villa: Site header / nav */
function SiteHeader({
  solid
}) {
  const {
    Button
  } = window.DesignSystem_cf87b7;
  const links = ['The Villa', 'Mudjin Harbor', 'Experiences', 'Gallery', 'Journal'];
  const wrap = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 40px',
    background: solid ? 'var(--kh-ivory-white)' : 'rgba(7,39,63,0.18)',
    backdropFilter: solid ? 'none' : 'blur(6px)',
    borderBottom: solid ? '1px solid var(--border-hairline)' : '1px solid rgba(248,244,236,0.18)',
    transition: 'background var(--dur-base) var(--ease-out)'
  };
  const ink = solid ? 'var(--kh-ocean-blue)' : 'var(--kh-ivory-white)';
  return /*#__PURE__*/React.createElement("header", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '0.06em',
      color: ink
    }
  }, "King Hill Villa"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: ink,
      textDecoration: 'none',
      opacity: 0.92
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: solid ? 'primary' : 'onDark',
    size: "sm"
  }, "Book Your Stay"));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
