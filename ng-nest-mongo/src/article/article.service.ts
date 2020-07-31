import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticleService {

    constructor(@Inject('ARTICLE_MODEL') private readonly articleModel: Model) {}

    async create(articleDto: ArticleDto): Promise<any> {
        const createArticle = new this.articleModel(articleDto);
        return await this.articleModel.createdArticle.save();
    }

    async findAll(): Promise<any> {
        return await this.articleModel.find().exec();
    }

    async find(id: string): Promise<any> {
        return await this.articleModel.findById(id).exec();
    }

    async update(id: string, articleDto: ArticleDto): Promise<any> {
        return await this.articleModel.findByIdAndUpdate(id, articleDto);
    }

    async delete(id: string, articleDto: ArticleDto): Promise<any> {
        return await this.articleModel.findByIdAndRemove(id);
    }
}
