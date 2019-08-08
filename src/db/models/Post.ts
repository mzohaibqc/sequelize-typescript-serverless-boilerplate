import { BelongsToMany, Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";

import { User } from './User';

@Table({ timestamps: true })
export class Post extends Model<Post> {
  @Column
  public title!: string;

  @Column
  public text!: string;

  @ForeignKey(() => User)
  @Column
  public userId: number;

  @BelongsTo(() => User)
  public user!: User;
}
