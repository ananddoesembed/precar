import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto';
import { LoginUserDto } from './DTO/login-user.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
    constructor(private userService:UserService){}
    @Post('/register')
    createUser(@Body() body:CreateUserDto){
        console.log(body);
    }
    @Post('/login')
    loginUser(@Body() body:LoginUserDto){
        this.userService.login(body.email,body.password)
        console.log(body);

    }
}
