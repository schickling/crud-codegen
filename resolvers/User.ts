export default {
  list: async (parent, args, ctx, info) => {
    return ctx.db.query.users(args, info)
  },

  find: async (parent, args, ctx, info) => {
    return ctx.db.query.user(args, info)
  },

  create: async (parent, args, ctx, info) => {
    return ctx.db.mutation.createUser(args, info)
  },

  update: async (parent, args, ctx, info) => {
    return ctx.db.mutation.updateUser(args, info)
  },

  delete: async (parent, args, ctx, info) => {
    return ctx.db.mutation.deleteUser(args, info)
  },
}
