import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateProductDto,
  ) {
    console.log('FILE:', file);
    console.log('BODY:', body);

    return this.productService.create({
      name: body.name,
      price: Number(body.price),
      description: body.description,
      code: body.code,
      imageUrl: file?.filename ? `/uploads/${file.filename}` : undefined,
    });
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.productService.findByCode(code);
  }

  @Put(':code')
  update(@Param('code') code: string, @Body() body: CreateProductDto) {
    return this.productService.updateByCode(code, body);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.productService.removeByCode(code);
  }
}
