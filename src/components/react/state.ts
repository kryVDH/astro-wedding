import { signal } from '@preact/signals-react'

export type Track = {
  id: string
  title: string
  position: number
  length: string
}

export type PlayerTrack = Track & {
  albumId: string
  artist: string
  imageUrl: string
}

export const isPlaying = signal(false)
export const currentTrack = signal<PlayerTrack | null>({id: '1', title: 'Title', position: 1, length: '3:20', albumId: '1', artist: "Test", imageUrl: "/vynil-lp.webp"})