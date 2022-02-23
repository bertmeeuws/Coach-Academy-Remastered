
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateLoginInput {
    email: string;
    password: string;
}

export class CreateClientInput {
    userId: number;
    surname: string;
    name: string;
    dob?: Nullable<DateTime>;
    phone?: Nullable<string>;
    address?: Nullable<string>;
    number?: Nullable<number>;
    postal?: Nullable<number>;
    city?: Nullable<string>;
    coachId?: Nullable<number>;
}

export class UpdateClientInput {
    id: number;
}

export class CreateCoachInput {
    surname: string;
    name: string;
    user?: Nullable<CreateUserInput>;
    clients?: Nullable<CreateClientInput>;
}

export class UpdateCoachInput {
    id: number;
}

export class CreateUserInput {
    email: string;
    password: string;
    createdAt?: Nullable<DateTime>;
}

export class UpdateUserInput {
    id: number;
}

export class Login {
    email: string;
    password: string;
}

export abstract class IMutation {
    abstract createLogin(createLogin: CreateLoginInput): string | Promise<string>;

    abstract logout(): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createClient(createClientInput: CreateClientInput): Client | Promise<Client>;

    abstract updateClient(updateClientInput: UpdateClientInput): Client | Promise<Client>;

    abstract removeClient(id: number): Nullable<Client> | Promise<Nullable<Client>>;

    abstract createCoach(createCoachInput: CreateCoachInput): Coach | Promise<Coach>;

    abstract updateCoach(updateCoachInput: UpdateCoachInput): Coach | Promise<Coach>;

    abstract removeCoach(id: number): Nullable<Coach> | Promise<Nullable<Coach>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Client {
    id: number;
    user?: Nullable<User>;
    surname?: Nullable<string>;
    name?: Nullable<string>;
    dob?: Nullable<DateTime>;
    phone?: Nullable<string>;
    address?: Nullable<string>;
    number?: Nullable<number>;
    postal?: Nullable<number>;
    city?: Nullable<string>;
    coachId?: Nullable<Coach>;
}

export abstract class IQuery {
    abstract clients(): Nullable<Client>[] | Promise<Nullable<Client>[]>;

    abstract client(id: number): Nullable<Client> | Promise<Nullable<Client>>;

    abstract coaches(): Nullable<Coach>[] | Promise<Nullable<Coach>[]>;

    abstract coach(id: number): Nullable<Coach> | Promise<Nullable<Coach>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Coach {
    id: number;
    surname: string;
    name: string;
    user: User;
    clients?: Nullable<Nullable<Client>[]>;
}

export class User {
    id: number;
    email: string;
    password: string;
    createdAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
