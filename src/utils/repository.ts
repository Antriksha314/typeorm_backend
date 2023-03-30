import { Session } from 'inspector';
import { CXN } from '../typeorm/data-source';
import { UserMeta } from '../typeorm/entity/meta';
import { Role } from '../typeorm/entity/role';
import { User } from '../typeorm/entity/user';

// User Repository
export const UserRepository = CXN.getRepository(User);

// UserMeta Repository
export const UserMetaRepository = CXN.getRepository(UserMeta);

// Role Repository
export const RoleRepository = CXN.getRepository(Role);

// Session Repository
export const SessionRepository = CXN.getRepository(Session);
