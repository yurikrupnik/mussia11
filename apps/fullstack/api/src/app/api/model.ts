// import { User, user } from '@creativearis/models';
import mongoose, { Document, Schema, SchemaTypeOptions } from 'mongoose';

type providers = 'local' | 'google' | 'github';
type roles = 'editor' | 'finance' | 'admin' | 'crm';

type User = {
  email: string;
  password: string;
  role: roles;
  image: string;
  firstName: string;
  lastName?: string;
  isActive?: boolean;
  creditCardNumber?: string;
  provider: providers;
};

type UserGroupDocument = User & Document;

const emailReg = /^([\w-/.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const validateEmail = (email: string) => emailReg.test(email);

const dbModel = 'user';

const userGroupSchemaObj: Record<keyof User, SchemaTypeOptions<any>> = {
  creditCardNumber: {
    type: String,
    transform: (str: string) => {
      if (str) {
        return `****-****-****-${str.substr(str.length - 4)}`;
      }
      return null;
    },
    default: '',
    // get: (str: string) => {
    //     if (str) {
    //         return `****-****-****-${str.substr(str.length - 4)}`;
    //     }
    //     return null;
    // },
  },
  // aris: {
  //     type: String,
  //     default: "d",
  // },
  provider: {
    type: String,
    enum: ['local', 'google'],
    default: 'local',
  },
  // id: {
  //     type: String,
  //     required() {
  //         return this.provider !== "local";
  //     }
  // },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Email address is required'],
    validate: [validateEmail, 'Please fill a valid email address'],
    // match: [emailReg, "pls"],
    // match: emailReg,
    index: true,
  },
  // token: {
  //     type: String,
  //     default: ""
  // },
  password: {
    type: String,
    required() {
      return this.provider === 'local';
    },
    // required: true,
    // required: function() [{ return this.a === 'test'; }, 'YOUR CUSTOME MSG HERE']
    // set: generateHashSync,
  },
  role: {
    type: String,
    // enum: usersRoles,
    default: 'admin',
  },
  image: {
    type: String,
    default: '',
  },
  firstName: {
    type: String,
    required() {
      return this.provider !== 'local';
    },
  },
  lastName: {
    type: String,
    required() {
      return this.provider !== 'local';
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
};

const UsersSchema: Schema = new Schema(userGroupSchemaObj);

export default mongoose.model<UserGroupDocument>(dbModel, UsersSchema);
// type UserGroupDocument = User & Document;
/**
 * @swagger
 * components:
 *   schemas:
 *       Provider:
 *           type: string
 *           default: local
 *           enum:
 *              - local
 *              - google
 *              - github
 *       Role:
 *           type: string
 *           enum: [editor, finance, admin, crm]
 *           default: admin
 *
 *       User:
 *         properties:
 *           _id:
 *               type: string
 *           isActive:
 *               type: boolean
 *               default: true
 *           email:
 *               type: string
 *               example: ad@ad.com
 *           firstName:
 *               type: string
 *           lastName:
 *               type: string
 *           password:
 *               type: string
 *           creditCardNumber:
 *               type: string
 *               default: ''
 *           provider:
 *               type: string
 *               example: local
 *               schema:
 *                   $ref: '#/components/schemas/Provider'
 *           token:
 *               type: string
 *           role:
 *               type: string
 *               schema:
 *                   $ref: '#/components/schemas/Role'
 */
const mock: Partial<User>[] = [
  {
    email: 'a@a.com',
    password: '123456',
  },
  {
    email: 'b@b.com',
    password: '123452',
  },
];

// export default user(mongoose);
//
// export { mock };

// export type { User };
// export { mock };
