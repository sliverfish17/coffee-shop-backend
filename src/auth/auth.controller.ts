import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;

    if (username === 'admin' && password === 'admin123') {
      return { success: true, role: 'admin' }; // Mocked Login and Password
    }

    throw new UnauthorizedException('Невірний логін або пароль');
  }
}
