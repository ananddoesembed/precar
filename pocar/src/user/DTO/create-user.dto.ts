import {IsString,IsEmail} from 'class-validator'
export class CreateUserDto {
        @IsString()
        password:string
        @IsString()
        rePass:string
        @IsEmail()
        email:string
}