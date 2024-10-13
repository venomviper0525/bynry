import { Profile } from '../types'

const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Suraj Malkar',
    photo: 'surajphoto.jpg',
    description: 'Software Engineer',
    location: { lat: 34.0406, lng: 	-118.2118}
  },
  {
    id: '2',
    name: 'Sydney Smiths',
    photo: 'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'UX Designer',
    location: { lat: 34.0522, lng: -118.2437 }
  },
  {
    id: '3',
    name: 'John Dep',
    photo: 'https://images.pexels.com/photos/3760376/pexels-photo-3760376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'HR',
    location: { lat: 56.1304, lng: 106.3467 }
  },
  // Add more mock profiles as needed
]

export const fetchProfiles = async (): Promise<Profile[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockProfiles
}

export const createProfile = async (profile: Omit<Profile, 'id'>): Promise<Profile> => {
  const newProfile = { ...profile, id: Date.now().toString() }
  mockProfiles.push(newProfile)
  return newProfile
}

export const updateProfile = async (updatedProfile: Profile): Promise<void> => {
  const index = mockProfiles.findIndex(p => p.id === updatedProfile.id)
  if (index !== -1) {
    mockProfiles[index] = updatedProfile
  }
}

export const deleteProfile = async (id: string): Promise<void> => {
  const index = mockProfiles.findIndex(p => p.id === id)
  if (index !== -1) {
    mockProfiles.splice(index, 1)
  }
}