import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { Article } from './interfaces/article.interface';

@Controller('article')
export class ArticleController {
    
    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async create(@Body() articleDto: ArticleDto) {
        return this.articleService.create(articleDto);
    }

    @Get()
    async findAll(): Promise<any> {
        return this.articleService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return this.articleService.find(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() articleDto: ArticleDto) {
        return this.articleService.update(id, articleDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Body() articleDto: ArticleDto) {
        return this.articleService.delete(id, articleDto);
    }
}
