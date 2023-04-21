import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-28d4e889.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useState, _ as _export_sfc } from '../server.mjs';
import __nuxt_component_0$3 from './Icon-c5ae943a.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './config-46788470.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _imports_0 = "" + publicAssetsURL("favicon.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "flex gap-4 rounded-full m-2 pr-4 w-fit h-fit font-bold opacity-75 hover:opacity-100 group transition-all"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" width="2em" height="2em" class="w-8"${_scopeId}><span class="inline-flex items-center text-lg opacity-75 group-hover:opacity-100"${_scopeId}>GAL</span>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "",
            width: "2em",
            height: "2em",
            class: "w-8"
          }),
          createVNode("span", { class: "inline-flex items-center text-lg opacity-75 group-hover:opacity-100" }, "GAL")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/home-button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuShowing = useState("isMenuShowing");
    const items = [
      { icon: "solar:planet-bold", label: "Journey Through the Solar System", link: "https://gal-cernilogar.github.io/journey-through-the-solar-system/" },
      { icon: "solar:gamepad-bold", label: "Playground", link: "https://gal-cernilogar.github.io/playground/" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$3;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2 overflow-y-auto pb-20 w-full max-w-full lg:max-w-fit h-full" }, _attrs))}><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          class: ["flex gap-2 rounded-full pr-6 opacity-50 transition-all", unref(isMenuShowing) ? "hover:bg-neutral-300 dark:hover:bg-neutral-700" : ""]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                size: "3em",
                class: ["rounded-full p-2 min-w-[3rem] opacity-75 transition-all", unref(isMenuShowing) ? "" : "hover:bg-neutral-300 dark:hover:bg-neutral-700"]
              }, null, _parent2, _scopeId));
              _push2(`<span class="inline-flex items-center"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: item.icon,
                  size: "3em",
                  class: ["rounded-full p-2 min-w-[3rem] opacity-75 transition-all", unref(isMenuShowing) ? "" : "hover:bg-neutral-300 dark:hover:bg-neutral-700"]
                }, null, 8, ["name", "class"]),
                createVNode("span", { class: "inline-flex items-center" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/navigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "expand-button",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuShowing = useState("isMenuShowing");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "flex w-fit h-fit ml-auto lg:ml-0 lg:mt-auto p-2 rounded-full opacity-50 hover:bg-neutral-300 dark:hover:bg-neutral-700" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:chevron-up",
        size: "2em",
        class: ["transition-all", unref(isMenuShowing) ? "lg:-rotate-90" : "rotate-180 lg:rotate-90"]
      }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/expand-button.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DefaultHomeButton = __nuxt_component_0$1;
  const _component_DefaultNavigation = _sfc_main$3;
  const _component_DefaultExpandButton = _sfc_main$2;
  _push(`<menu${ssrRenderAttrs(mergeProps({
    id: "default-menu",
    class: "fixed inset-0 flex lg:flex-col flex-wrap lg:flex-nowrap p-2 gap-2 bg-white dark:bg-black transition-all"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DefaultHomeButton, { class: "order-1" }, null, _parent));
  _push(ssrRenderComponent(_component_DefaultNavigation, { class: "order-3 lg:order-2" }, null, _parent));
  _push(ssrRenderComponent(_component_DefaultExpandButton, { class: "order-2 lg:order-3" }, null, _parent));
  _push(`</menu>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuShowing = useState("isMenuShowing", () => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DefaultMenu = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "default-layout",
        class: "antialiased text-base text-black dark:text-white"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DefaultMenu, null, null, _parent));
      _push(`<main id="default-page" class="${ssrRenderClass([unref(isMenuShowing) ? "lg:ml-96 mt-[90vh]" : "lg:ml-16 mt-16", "relative lg:mt-0 min-h-[calc(100vh-4rem)] lg:min-h-screen shadow-eqlg bg-white dark:bg-neutral-900 transition-all"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-4a994bf9.mjs.map
