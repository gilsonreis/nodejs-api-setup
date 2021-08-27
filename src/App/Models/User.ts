import bcrypt from 'bcryptjs'
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string

  @Column()
  public email: string

  @Column()
  public password: string

  constructor (props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }

  @BeforeInsert()
  @BeforeUpdate()
  private hashPassword () {
    this.password = bcrypt.hashSync(this.password, 10)
  }
}

export default User
