import { MigrationInterface, QueryRunner } from "typeorm";

export class CleaningBack1746389203505 implements MigrationInterface {
    name = 'CleaningBack1746389203505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client_request" ("id" SERIAL NOT NULL, "clientName" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying, "phone_number" character varying, "optionId" integer, CONSTRAINT "REL_3000c89699ae036afe1ef0d2d4" UNIQUE ("optionId"), CONSTRAINT "PK_0caba076958d8b3a59348cc3d03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "client_request" ADD CONSTRAINT "FK_3000c89699ae036afe1ef0d2d40" FOREIGN KEY ("optionId") REFERENCES "service_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_request" DROP CONSTRAINT "FK_3000c89699ae036afe1ef0d2d40"`);
        await queryRunner.query(`DROP TABLE "client_request"`);
    }

}
