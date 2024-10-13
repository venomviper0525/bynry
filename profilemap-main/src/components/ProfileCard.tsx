import React from 'react'
import { Profile } from '../types'
import { Button } from '../components/ui/button';  // Relative path to the Button component


interface ProfileCardProps {
  profile: Profile
  onSelect: (profile: Profile) => void
}

export default function ProfileCard({ profile, onSelect }: ProfileCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img src={profile.photo} alt={profile.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{profile.name}</h2>
      <p className="text-gray-600 mb-4">{profile.description}</p>
      <Button onClick={() => onSelect(profile)}>View Summary</Button>
    </div>
  )
}