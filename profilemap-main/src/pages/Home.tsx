import React, { useState, useEffect } from 'react'
import ProfileList from '../components/ProfileList'
import Map from '../components/Map'
import SearchFilter from '../components/SearchFilter'
import { Profile } from '../types'
import { fetchProfiles } from '../services/api'

export default function Home() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        setLoading(true)
        const data = await fetchProfiles()
        setProfiles(data)
        setError(null)
      } catch (error) {
        console.error('Failed to fetch profiles:', error)
        setError('Failed to load profiles. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadProfiles()
  }, [])

  const handleSelectProfile = (profile: Profile) => {
    setSelectedProfile(profile)
  }

  const handleFilter = (filteredProfiles: Profile[]) => {
    setProfiles(filteredProfiles)
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-500 text-white rounded">Retry</button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Explorer</h1>
      <SearchFilter profiles={profiles} onFilter={handleFilter} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProfileList profiles={profiles} onSelectProfile={handleSelectProfile} />
        {selectedProfile && <Map profile={selectedProfile} />}
      </div>
    </div>
  )
}