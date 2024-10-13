import React from 'react'
import ProfileCard from './ProfileCard'
import { Profile } from '../types'

interface ProfileListProps {
  profiles: Profile[]
  onSelectProfile: (profile: Profile) => void
}

export default function ProfileList({ profiles, onSelectProfile }: ProfileListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} onSelect={onSelectProfile} />
      ))}
    </div>
  )
}