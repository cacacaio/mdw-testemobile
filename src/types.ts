export type Characters = {
  id: number
  name: string
  description: string
  image: any
  image2: any
  apparitions: string[]
  rating: number
}[]

export type Movies = {
  id: number
  name: string
  description: string
  image: any
  image2: any
  rating: number
  streaming: any[]
  launchDate: Date
  cronologyDate: string
}[]

export type Comics = {
  id: number
  name: string
  description: string
  image: any
  image2: any
  rating: number
  sellers: any[]
}[]

export type FeaturedCharacters = {
  id: number
  name: string
  image: any
  featured: string
  rating: number
  description: string
}[]

export type FeaturedMovies = {
  id: number
  name: string
  image: any
  featured: string
  rating: number
  description: string
}[]

export type FeaturedComics = {
  id: number
  name: string
  image: any
  featured: string
  rating: number
  description: string
}[]
