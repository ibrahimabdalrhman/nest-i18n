import { IsEmail, IsString, Length } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateUserDto {
  @IsString()
  @Length(3, 20, {
    message: i18nValidationMessage('validation.INCORRECT_USERNAME'),
  })
  readonly username: string;

  @IsEmail({}, { message: i18nValidationMessage('validation.INCORRECT_EMAIL') })
  readonly email: string;

  @IsString()
  readonly country: string;

  @IsString()
  @Length(8, 20, {
    message: i18nValidationMessage('validation.INCORRECT_PASSWORD'),
  })
  readonly password: string;
}
