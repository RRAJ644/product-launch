'use client'

import React, { useState } from 'react'

interface OverviewProps {
  tabs: string[]
  content: Record<string, React.ReactNode>
}

const Overview: React.FC<OverviewProps> = ({ tabs, content }) => {
  const [activeTab, setActiveTab] = useState(tabs[0] || '')

  return (
    <div>
      <div className='flex gap-4 border-b text-sm text-gray-600'>
        {tabs.map((tab) => (
          <span
            key={tab}
            className={`pb-2 cursor-pointer md:text-lg ${
              activeTab === tab ? 'font-medium border-b-2 border-blue-600' : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className='p-4'>{content[activeTab]}</div>
    </div>
  )
}

export default Overview
