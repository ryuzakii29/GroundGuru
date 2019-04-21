import { user } from "../routes/lib/user.route";

export class Routes {
  constructor(private app: any) {
    this.app = app;
  }

  setRoutes() {
    this.app.use("/a", user);
  }
}
