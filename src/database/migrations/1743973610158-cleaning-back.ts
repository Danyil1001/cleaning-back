import { MigrationInterface, QueryRunner } from "typeorm";

export class CleaningBack1743973610158 implements MigrationInterface {
    name = 'CleaningBack1743973610158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" ADD "amount" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" ADD "amount" integer NOT NULL`);
    }

}
