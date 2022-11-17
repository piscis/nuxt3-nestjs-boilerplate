import { Backend } from "~~/backend/main";

export default fromNodeMiddleware((req,res,next) => {
  Backend.getListener(req, res, next);
});
