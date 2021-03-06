'use strict';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema(
  {
    uuid: { type: String },
    user_uuid: { type: String },
    user_action_uuid: { type: String },
    is_matches: { type: Number, default: 0 },
    is_liked: { type: Number, default: 0 },
    is_active: { type: Number, default: 0 },
    is_delete: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    created_by: { type: String, default: '' },
    updated_by: { type: String, default: '' },
  },
  {
    collection: 'user_action',
    versionKey: false,
  }
);

schema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj._id;
  return obj;
};

schema.pre('save', function (next) {
  if (this.isNew) {
    this.uuid = uuidv4();
  }

  next();
});

export const UserActionModel = mongoose.model('UserAction', schema);
