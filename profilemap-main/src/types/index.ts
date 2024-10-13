export interface Profile {
  id: string
  name: string
  photo: string
  description: string
  location: {
    lat: number
    lng: number
  }
}