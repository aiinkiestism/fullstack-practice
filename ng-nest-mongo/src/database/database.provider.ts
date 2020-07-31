import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<any> => 
        await mongoose.connect('mongodb://localhost/angular-crud', { useNewUrlParser: true, useFindAndModify: false }),
    },
];

// @Injectable()
// export class DatabaseProvider {}
