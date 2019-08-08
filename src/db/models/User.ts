import { HasMany, Column, Model, Table, Scopes } from "sequelize-typescript";

import { Post } from "./Post";

@Table({ timestamps: true })
export class User extends Model<User> {
  @Column
  public firstName!: string;

  @Column
  public lastName!: string;

  @Column
  public email!: string;

  @HasMany(() => Post)
  public posts?: Post[];
}
