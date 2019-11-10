import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Post('/login')
    checkAdmin(@Body() body: {email, password}) {
      return this.adminService.checkAdmin(body);
    }

}
