import { useEffect, useRef, useState } from 'react';
// import { currentTrack, isPlaying } from './state';

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

const PlayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="lg:h-8 lg:w-8 w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const PauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="lg:h-8 lg:w-8 w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
      clipRule="evenodd"
    />
  </svg>
)

// This app doesn't have real songs, it only has a few songs
// that we will play over and over as the user uses the app.
const MAX_SONGS = 1

const TRACK = {id: '1', title: 'Angel Baby', position: 1, length: '5:09', albumId: '1', artist: "Gigi Delana", imageUrl: "/vynil-lp.webp"};

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<PlayerTrack | null>(null)
  const audioPlayer = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<any>({current: 0})
  const [songIndex, setSongIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const imageUrl = "/vynil-lp.webp";
  const title = "Angel Baby";
  const artist = "Gigi Delana";

  function whilePlaying() {
    if (audioPlayer?.current?.duration) {
      const percentage =
        (audioPlayer.current.currentTime * 100) / audioPlayer.current.duration
      setProgress(percentage)
    }
    progressRef.current = requestAnimationFrame(whilePlaying)
  }

  function clickPlay() {
    setIsPlaying(!isPlaying);
    if(!currentTrack) {
      setCurrentTrack(TRACK);
    }
  }

  useEffect(() => {
    const newIndex = (songIndex % MAX_SONGS) + 1
    if(audioPlayer?.current) {
        audioPlayer.current.src = `/mp3/angel-baby.mp3`
        audioPlayer.current.currentTime = 0
        // audioPlayer.current.play()
    }
    setSongIndex(newIndex)
  }, [currentTrack?.title])

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current?.play()
      progressRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current?.pause()
      cancelAnimationFrame(progressRef.current)
    }
  }, [isPlaying])

  useEffect(() => {
    if (progress >= 99.99) {
      setIsPlaying(false);
      setProgress(0)
    }
  }, [progress])

  return (
    <div className="fixed lg:bottom-10 lg:right-10 right-5 bottom-5 bg-gray-100 lg:w-64 w-48 rounded-lg border-black border-2 overflow-hidden z-50">
      <div className="flex-1 bg-gray-200 h-1.5 dark:bg-gray-700">
        <div className="bg-pink-500 h-1.5" style={{width: `${progress}%`}}></div>
      </div>
      <div className="container mx-auto lg:px-4 px-2 py-1 flex items-center gap-5">
        <img src={imageUrl} className="block rounded-md lg:h-8 lg:w-8 w-5 h-5" />
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </p>
          <p className="text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
            {artist}
          </p>
        </div>
        <audio ref={audioPlayer} src="/mp3/song1.mp3" />
        <div className="flex gap-6 items-center text-black">
          <button onClick={clickPlay}>
            {isPlaying ? PauseIcon : PlayIcon}
          </button>
        </div>
      </div>
    </div>
  )
}