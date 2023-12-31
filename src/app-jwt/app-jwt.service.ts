import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppJwtService {
  constructor(private jwtService: JwtService) {}

  async login() {
    const payload = { username: 'harp', sub: 'dfgdfg', role: 'student' };
    return { access_token: this.jwtService.sign(payload) };
  }

  verify(token: string) {
    return this.jwtService.verify(token);
  }
}
