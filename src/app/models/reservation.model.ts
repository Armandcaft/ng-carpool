export class Reservation {
  id!: number
  trajetId!: number
  userId!: number
  state!: number
  date!: Date
  nbPlace!: number
  nameDepart!: string
  latitudeDepart!: number
  longitudeDepart!: number
  nameArrive!: string
  latitudeArrive!: number
  longitudeArrive!: number
}
