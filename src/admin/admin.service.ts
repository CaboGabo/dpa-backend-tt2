import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AdminService {
    constructor() {}

    checkAdmin({email, password}) {
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            return {grant_access: true, email: email};
        }
        throw new HttpException(
            'No tienes acceso de administrador',
            HttpStatus.NOT_FOUND,
          );
    }
}
