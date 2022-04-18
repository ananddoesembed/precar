import { CreateUserDto } from './DTO/create-user.dto';
import { LoginUserDto } from './DTO/login-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(body: CreateUserDto): void;
    loginUser(body: LoginUserDto): void;
}
