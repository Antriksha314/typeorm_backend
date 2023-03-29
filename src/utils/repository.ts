import { CXN } from "typeorm/data-source";
import { UserMeta } from "typeorm/entities/meta";
import { Role } from "typeorm/entities/role";
import { User } from "typeorm/entities/user";

// User Repository
export const UserRepository = CXN.getRepository(User);

// UserMeta Repository
export const UserMetaRepository = CXN.getRepository(UserMeta);

// Role Repository
export const RoleRepository = CXN.getRepository(Role);