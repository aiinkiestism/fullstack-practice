let graphqlTools = require('graphql-tools')
let makeExcutableSchema = graphqlTools.makeExcutableSchema;

let typeDefs = `
    type blogpost {
        id :String!
        title: String!
        thumnail: String
        content: String
    }

    input blogpostInput {
        title: String!
        thumbnail: String
        content: String
    }

    type Query {
        blogposts(limit: Int): [blogpost]
        blogpost(id: String!): blogpost
    }

    type Mutation {
        addBlogpost(post: blogpostInput!): blogpost
    }
`

let getAllBlogposts = (obj, args, context, info) => {
    
    const limitInput = args.limit || '10'
    const limit = perseInt(limitInput)
    
    const array = []
    for (let i = 0; i < limit; i++) {
        array.push({
            id: i,
            title: 'Blogpost no.' + i,
            content: 'Description',
            thumnail: 'Some url'
        })
    }
    return array
}

let getBlogpost = (obj, args, context, info) => {
    
    return {
        id: args.id,
        title: 'Blogpost no.' + args.id,
        content: 'Description',
        thumbnail: 'Some url',
    }
}

let addBlogpost = (obj, args, context, info) => {
    
    return args.post
}

let resolvers = {
    Query: {
        blogposts: getAllBlogposts,
        blogpost: getBlogpost,
    },
    Mutation: {
        addBlogpost: addBlogpost,
    },
}

module.exports = makeExcutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
