import { Request, Response, Router } from "express";

class UserRoutes {
  getUser() {
    return (req: Request, res: Response) => {
      res.json({ message: "Get User" });
    };
  }
  addUser() {
    return (req: Request, res: Response) => {
      res.json({ message: "Add User" });
    };
  }
  updateUser() {
    return (req: Request, res: Response) => {
      const data = req.body;
      res.json(data);
    };
  }
  deleteUser() {
    return (req: Request, res: Response) => {
      const data = req.body;
      res.json(data);
    };
  }
}

const router = Router();
const route = new UserRoutes();

router
  .get("", route.getUser())
  .post("", route.addUser())
  .patch("", route.updateUser())
  .delete("", route.deleteUser());

export const user = router;
