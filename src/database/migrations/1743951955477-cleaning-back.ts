import { MigrationInterface, QueryRunner } from "typeorm";

export class CleaningBack1743951955477 implements MigrationInterface {
    name = 'CleaningBack1743951955477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."service_option_type_enum" AS ENUM('cleaning_general', 'cleaning_before_move', 'cleaning_after_repair', 'moving')`);
        await queryRunner.query(`CREATE TABLE "service_option" ("id" SERIAL NOT NULL, "type" "public"."service_option_type_enum" NOT NULL, "serviceId" integer, CONSTRAINT "PK_70d8bf485defd38a96799f31a97" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."service_type_enum" AS ENUM('cleaning', 'moving')`);
        await queryRunner.query(`CREATE TABLE "service" ("id" SERIAL NOT NULL, "type" "public"."service_type_enum" NOT NULL, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."service_item_type_type_enum" AS ENUM('room', 'bathroom', 'store_room')`);
        await queryRunner.query(`CREATE TABLE "service_item_type" ("id" SERIAL NOT NULL, "type" "public"."service_item_type_type_enum" NOT NULL, CONSTRAINT "PK_0ef13860a75db3cfb4d803d15eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_option_item_amount_price" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "price" integer NOT NULL, "serviceOptionId" integer, "serviceItemTypeId" integer, CONSTRAINT "PK_f0db0503baec90f28aac3b17ddb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "service_option" ADD CONSTRAINT "FK_3fafcf26db28892a4082c49ddfb" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" ADD CONSTRAINT "FK_c879d7f43567af9b7a43826c995" FOREIGN KEY ("serviceOptionId") REFERENCES "service_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" ADD CONSTRAINT "FK_1fcabd9449451b3a984a4ba18cc" FOREIGN KEY ("serviceItemTypeId") REFERENCES "service_item_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" DROP CONSTRAINT "FK_1fcabd9449451b3a984a4ba18cc"`);
        await queryRunner.query(`ALTER TABLE "service_option_item_amount_price" DROP CONSTRAINT "FK_c879d7f43567af9b7a43826c995"`);
        await queryRunner.query(`ALTER TABLE "service_option" DROP CONSTRAINT "FK_3fafcf26db28892a4082c49ddfb"`);
        await queryRunner.query(`DROP TABLE "service_option_item_amount_price"`);
        await queryRunner.query(`DROP TABLE "service_item_type"`);
        await queryRunner.query(`DROP TYPE "public"."service_item_type_type_enum"`);
        await queryRunner.query(`DROP TABLE "service"`);
        await queryRunner.query(`DROP TYPE "public"."service_type_enum"`);
        await queryRunner.query(`DROP TABLE "service_option"`);
        await queryRunner.query(`DROP TYPE "public"."service_option_type_enum"`);
    }

}
