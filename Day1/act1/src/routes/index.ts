import {aa} from "./a";

export class Routes{
    constructor(private app: any){
        this.app = app;
    }

    setRoutes(){
        this.app.use("/a", aa);
    }
}
