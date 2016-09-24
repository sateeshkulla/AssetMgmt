import getRoutes from "/Users/skulla/learn/AssetManagement/AssetMgmt/src/config/routes";

// Make sure that webpack considers new dependencies introduced in the Index
// file
import "/Users/skulla/learn/AssetManagement/AssetMgmt/Index";
import config from "/Users/skulla/learn/AssetManagement/AssetMgmt/src/config/application";
import Entry from "/Users/skulla/learn/AssetManagement/AssetMgmt/src/config/.entry";
import { createStore } from "gluestick-shared";
import middleware from "/Users/skulla/learn/AssetManagement/AssetMgmt/src/config/redux-middleware";

export function getStore (httpClient) {
  return createStore(httpClient, () => require("/Users/skulla/learn/AssetManagement/AssetMgmt/src/reducers"), middleware, (cb) => module.hot && module.hot.accept("/Users/skulla/learn/AssetManagement/AssetMgmt/src/reducers", cb), !!module.hot);
}

if (typeof window === "object") {
  Entry.start(getRoutes, getStore);
}
