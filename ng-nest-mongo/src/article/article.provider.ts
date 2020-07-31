import { Injectable } from '@nestjs/common';
import { ArticleSchema } from './schemas/article.schemas';
import { Connection } from 'mongoose';

export const articleProvider = [
    {
        provide: 'ARTICLE_MODEL',
        useFactory: (connection: Connection) => connection.model('Article', ArticleSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]

// @Injectable()
// export class ArticleProvider {}
