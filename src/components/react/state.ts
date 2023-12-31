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
export const currentTrack = signal<PlayerTrack | null>(null)