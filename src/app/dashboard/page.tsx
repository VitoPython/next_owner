'use client'
import { useState } from 'react'

export default function DashboardPage() {
    const [name, setName] = useState('');


    return (
        <>
           <input value={name} onChange={(e) => setName(e.target.value)} className='text-black'/>
           <h1>Hello, {name}</h1>
        </>
    )
}