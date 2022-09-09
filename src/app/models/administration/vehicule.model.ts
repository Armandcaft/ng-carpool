import { TypeVehicule } from "./type-vehicule.model";
import { User } from "../user.model";

export class Vehicule {
    id!: number;
    name!: string;
    description!: string;
    colour!: string;
    image!: string;
    marque!: string;
    model!: string;
    // typeVehicule!: TypeVehicule;
    // user!: User;
}
