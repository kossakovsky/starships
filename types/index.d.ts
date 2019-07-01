export type Starship = {
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  films: Array<string>
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  MGLT: string
  model: string
  name: string
  passengers: string
  pilots: Array<string>
  starship_class: string
  url: string
}

export type Pagination = {
  hasPreviousPage: boolean
  hasNextPage: boolean
  page: number
}
