import React, { useState } from 'react'
import { Profile } from '../types'

interface SearchFilterProps {
  profiles: Profile[]
  onFilter: (filteredProfiles: Profile[]) => void
}

export default function SearchFilter({ profiles, onFilter }: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)

    const filtered = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(term) ||
        profile.description.toLowerCase().includes(term)
    )

    onFilter(filtered)
  }

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}