import {ExpressMiddlewareInterface} from "routing-controllers";
import jwt from 'jsonwebtoken'

export class MyMiddleware implements ExpressMiddlewareInterface { 
 
    use(request: any, response: any, next: (err?: any) => any): any {
        console.log("req", request)
        const token = request.headers["x-auth-token"];
        if (!token){
         return response.status(401).send("Access denied. No token provided.");
        }

        try {      
            jwt.verify(token, "202003");
            const decoded = jwt.verify(token, "202003");
            request.user = decoded;
            next();
        } catch (ex) {
            response.status(400).send("Invalid token.");
        }

    }
 
}