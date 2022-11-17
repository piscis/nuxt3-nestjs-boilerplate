import { bindHandler } from "~~/backend/main";

export default fromNodeMiddleware((req, res, next) => {
  bindHandler(req, res, next);
});
