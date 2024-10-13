import React, { useState, useEffect } from 'react'
import { Profile } from '../types'
import { fetchProfiles, createProfile, updateProfile, deleteProfile } from '../services/api'

export default function AdminPanel() {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    fetchProfiles().then(setProfiles)
  }, [])

  const handleCreate = (newProfile: Omit<Profile, 'id'>) => {
    createProfile(newProfile).then((createdProfile) => {
      setProfiles([...profiles, createdProfile])
    })
  }

  const handleUpdate = (updatedProfile: Profile) => {
    updateProfile(updatedProfile).then(() => {
      setProfiles(profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)))
    })
  }

  const handleDelete = (id: string) => {
    deleteProfile(id).then(() => {
      setProfiles(profiles.filter((p) => p.id !== id))
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      {/* Implement forms and tables for CRUD operations */}
    </div>
  )
}