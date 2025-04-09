import { MigrationInterface, QueryRunner } from "typeorm";

export class CleaningBack1744235155617 implements MigrationInterface {
    name = 'CleaningBack1744235155617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" ADD "time" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" DROP COLUMN "time"`);
    }

}
