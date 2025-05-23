import { NestFactory } from '@nestjs/core';
// import { RenderService } from 'nest-next';
import Next from 'next';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import path from 'path';

async function bootstrap() {
    const dev = process.env.NODE_ENV !== 'production';
    const app = Next({
        dev,
        // conf: { distDir: `${path.relative(process.cwd(), __dirname)}/../next` },
    }); // create Next.js pages

    await app.prepare();

    // create Nest.js pages using AppModule(contains RenderModule)
    const server = await NestFactory.create<NestExpressApplication>(AppModule);
    await server.listen(3000);

    // get registered RenderModule in Nest.js pages
    // const renderer = server.get(RenderService);

    // // bind Nest.js pages and Next.js pages
    // renderer.register(server, pages);

    // renderer.setErrorHandler(async (err, req, res) => {
    //     // send JSON response
    //     // res.send(err.response);
    //     if (err.status == 404) res.status(404).redirect('/error/404');
    // });

    // server.useGlobalPipes(new ValidationPipe());
}

bootstrap();
