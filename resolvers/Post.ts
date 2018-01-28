export default {
  list: async (parent, args, ctx, info) => {
    return ctx.db.query.posts(args, info)
  },

  find: async (parent, args, ctx, info) => {
    return ctx.db.query.post(args, info)
  },

  create: async (parent, args, ctx, info) => {
    return ctx.db.mutation.createPost(args, info)
  },

  update: async (parent, args, ctx, info) => {
    return ctx.db.mutation.updatePost(args, info)
  },

  delete: async (parent, args, ctx, info) => {
    return ctx.db.mutation.deletePost(args, info)
  },
}
