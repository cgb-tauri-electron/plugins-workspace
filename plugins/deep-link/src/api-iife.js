if("__TAURI__"in window){var __TAURI_DEEPLINK__=function(_){"use strict";return _.getLastLink=async function(){return await window.__TAURI_INVOKE__("plugin:deep-link|get_last_link")},_}({});Object.defineProperty(window.__TAURI__,"deepLink",{value:__TAURI_DEEPLINK__})}
