
import { PartialType } from "@nestjs/mapped-types";
import { CreateAuthDto } from "./create.auth.dto";
export class UpdateAuthDTO  extends PartialType(CreateAuthDto){}