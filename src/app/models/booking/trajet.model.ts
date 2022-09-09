import { Vehicule } from "../administration/vehicule.model"

export class Trajet {
  id!: number
  state!: number
  // vehicule!: Vehicule
  price!: Date
  hour!: number
  date!: Date
  nbPlace!: number
  typeTrajet!: boolean
  nameDepart!: string
  latitudeDepart!: number
  longitudeDepart!: number
  nameArrive!: string
  latitudeArrive!: number
  longitudeArrive!: number
}
