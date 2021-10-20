import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  app.use(session({
    cookie: {maxAge: 86400000},
    secret: 'ajskdhajkdhadjkaeouieraodfhjkc',
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000, () => {`Server started on port 3000`});
}
bootstrap();
