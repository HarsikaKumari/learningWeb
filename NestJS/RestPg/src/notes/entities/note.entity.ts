import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('notes')
export class Note extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'Notes',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    title: string;

    @Column({
        type: 'text',
    })
    description: string;

    @Column({
        type: 'boolean',
        default: 1,
    })
    isActive: boolean;
}
