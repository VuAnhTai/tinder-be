'use strict';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema(
  {
    uuid: { type: String },
    name: { type: String },
    url: { type: String },
    birthday: { type: Date, default: Date.now },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    is_active: { type: Number, default: 0 },
    is_delete: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    created_by: { type: String, default: '' },
    updated_by: { type: String, default: '' },
  },
  {
    collection: 'user',
    versionKey: false,
  }
);

schema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj._id;
  delete obj.password;
  return obj;
};

schema.pre('save', function (next) {
  if (this.isNew) {
    this.uuid = uuidv4();
  }

  next();
});

export const UserModel = mongoose.model('User', schema);
