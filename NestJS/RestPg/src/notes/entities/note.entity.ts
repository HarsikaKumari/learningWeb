import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Note {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'email_address', unique: true })
    emailAddress: string;

    @Column()
    password: string;

    @CreateDateColumn({ 
        type: 'boolean',
        name: 'deleted_at'
    })
    deletedAt: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}
