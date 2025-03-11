var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useCallback, useRef } from "react";
var CommandsList = function (_a) {
    var items = _a.items, command = _a.command;
    var _b = useState(null), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var _c = useState(false), isKeyboardActive = _c[0], setIsKeyboardActive = _c[1];
    var itemsRef = useRef(null);
    var scrollToItem = useCallback(function (index) {
        if (itemsRef.current && itemsRef.current.children[index]) {
            itemsRef.current.children[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, []);
    var selectItem = useCallback(function (index) {
        if (items.length > 0 && items[0].title !== "No results found") {
            setSelectedIndex(index);
            scrollToItem(index);
        }
    }, [items, scrollToItem]);
    var upHandler = useCallback(function () {
        setIsKeyboardActive(true);
        if (selectedIndex !== null) {
            selectItem((selectedIndex - 1 + items.length) % items.length);
        }
        else if (items.length > 0) {
            selectItem(items.length - 1);
        }
    }, [items, selectedIndex, selectItem]);
    var downHandler = useCallback(function () {
        setIsKeyboardActive(true);
        if (selectedIndex !== null) {
            selectItem((selectedIndex + 1) % items.length);
        }
        else if (items.length > 0) {
            selectItem(0);
        }
    }, [items, selectedIndex, selectItem]);
    var enterHandler = function () {
        if (selectedIndex !== null) {
            var item = items[selectedIndex];
            if (item && !item.disabled && typeof command === "function") {
                command(item);
                return true;
            }
        }
        return false;
    };
    useEffect(function () {
        var onKeyDown = function (event) {
            if (event.key === "ArrowUp") {
                event.preventDefault();
                upHandler();
            }
            else if (event.key === "ArrowDown") {
                event.preventDefault();
                downHandler();
            }
            else if (event.key === "Enter") {
                event.preventDefault();
                if (enterHandler()) {
                    event.stopPropagation();
                }
            }
        };
        document.addEventListener("keydown", onKeyDown, true);
        return function () {
            document.removeEventListener("keydown", onKeyDown, true);
        };
    }, [upHandler, downHandler]);
    return (_jsx("div", __assign({ className: "slash-menu", ref: itemsRef }, { children: items.map(function (item, index) {
            return (_jsxs("button", __assign({ className: "slash-menu__item ".concat(isKeyboardActive && index === selectedIndex
                    ? "slash-menu__item--selected"
                    : "", " ").concat(item.disabled ? "slash-menu__item--disabled" : ""), onClick: function () {
                    setIsKeyboardActive(false);
                    command(item);
                }, onMouseEnter: function () {
                    if (isKeyboardActive) {
                        setIsKeyboardActive(false);
                        setSelectedIndex(null);
                    }
                }, disabled: item.disabled }, { children: [item.icon && item.icon, _jsx("span", __assign({ className: "slash-menu__item-title" }, { children: item.title }))] }), index));
        }) })));
};
export default React.memo(CommandsList);
//# sourceMappingURL=CommandsList.js.map