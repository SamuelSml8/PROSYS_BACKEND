import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsEmail()
  @Length(1, 50)
  email: string;

  @IsString()
  @Length(1, 100)
  password: string;

  @IsString()
  @Length(1, 15)
  telephone: string;

  @IsString()
  @Length(1, 10)
  role: string;
}
