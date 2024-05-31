import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Prosys')
    .setDescription('Prosys is a comprehensive system developed by SOMOS RETENES, designed to efficiently manage products, orders and customers. With an intuitive interface and powerful functionalities, Prosys simplifies inventory management, facilitates order tracking and optimizes customer interaction. From product administration to order management and customer service, Prosys offers a complete solution for SOMOS RETENES business needs. This Swagger documentation provides a detailed description of available endpoints, accepted parameters and expected responses, allowing easy integration and development of external applications with Prosys.')
    .setVersion('1.0')
    .addTag('Prosys')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
