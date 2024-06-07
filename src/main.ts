import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Prosys')
    .setDescription(
      'Prosys is a comprehensive system developed for SOMOS RETENES, designed to efficiently manage products, orders and customers. Intuitive to use and with powerful functionality, Prosys simplifies inventory management, facilitates order tracking and optimizes customer interaction. From product management to order management and customer service, Prosys offers a complete solution for SOMOS RETENES business needs. \n\nThis Swagger documentation provides a detailed description of available endpoints, accepted parameters and expected responses, allowing easy integration and development of external applications with Prosys. This system will be presented as a final project of the work technique in Software Programming of the Universidad Pontificia Bolivariana by the students: \n\n- Samuel Vera Miranda \n\n- Juan Esteban Alcaraz',
    )
    .setVersion('1.0')
    .addTag('Prosys')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
