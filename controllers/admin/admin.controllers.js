// DataBase
const AdminModel = require('../../model/admin.model');

module.exports = {
  create: async (ctx) => {
    const newUser = new AdminModel(ctx.request.body);
    const user = await newUser.save();
    try {
      ctx.status = 201;
      ctx.body = user;
    } catch(error) { console.warn(error) };
  },

  get: async (ctx) => {
    const users = await AdminModel.find()
    try {
      ctx.body = users;
    } catch(error) { console.warn(error) };
  },

  getById: async (ctx) => {
    const { id } = ctx.request.body;
    const user = await AdminModel.findById({ _id: id });
    try {
      ctx.body = user;
    } catch (error) { console.warn(error) };
  },

  update: async (ctx) => {
    const update = ctx.request.body;
    const { id } = ctx.request.body;
    console.log('update: ', update);
    
    const user = await AdminModel.findByIdAndUpdate(id, update, { new: true });
    try {
      ctx.body = user;
    } catch (error) { console.warn(error); }
  },

  remove: async (ctx) => {
    const { id } = ctx.request.body;
    const user = await AdminModel.deleteOne({ _id: id });
    try {
      ctx.body = user;
    } catch (error) { console.warn(error) };
  },
}
