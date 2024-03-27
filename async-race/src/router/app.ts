import Router from "./router";
import { PageIds } from "./router";

export default class App extends Router{
  run() {
    this.renderPage(PageIds.StartPageId);
    this.enableRouteChange();
  }
}