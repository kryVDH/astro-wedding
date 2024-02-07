export default function Nav() {
    return (<nav className="w-full flex flex-nowrap p-2 fixed top-0 z-10">
        <a href="/" className="self-start font-dancing text-2xl text-black">Kyle & Jasmine</a>
        <a href="/venue" className="ml-auto">Venue</a>
        <a href="/program" className="ml-auto">Program</a>
    </nav>)
}