import { Router } from "express";
import { usersRoutes } from "./users.routes";
import ensureAuthenticated from "../middleware/ensureAuthenticated";
import { AuthenticateUserController } from "../useCases/authenticateUser/AuthenticateUserController";
import { RequestResetPasswordController } from "../useCases/requestResetPassword/RequestResetPasswordController";
import { ResetPasswordController } from "../useCases/resetPassword/ResetPasswordController";
import { matchesRoutes } from "./matches.routes";
import { rankingRoutes } from "./ranking.routes";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const requestResetPasswordController = new RequestResetPasswordController();
const resetPasswordController = new ResetPasswordController()

routes.post("/login", authenticateUserController.handle)
routes.post("/request-reset-password", requestResetPasswordController.handle)
routes.post("/reset-password", resetPasswordController.handle)

routes.use("/users", usersRoutes)
routes.use("/matches", ensureAuthenticated, matchesRoutes)
routes.use("/ranking", ensureAuthenticated, rankingRoutes)

export { routes };

