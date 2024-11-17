import { MigrationInterface, QueryRunner } from "typeorm";

export class NameFieldAddToUserTable1731834349746 implements MigrationInterface {
    name = 'NameFieldAddToUserTable1731834349746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

}
