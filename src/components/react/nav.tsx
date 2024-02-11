export default function Nav() {
    return (<nav className="w-full fixed top-0 z-50">
        <ul className="list-none flex flex-nowrap p-2 items-center gap-4 px-4">
            <li className="self-start font-dancing text-2xl text-black"><a href="/">Kyle & Jasmine</a></li>
            <li className="ml-auto"><a href="/venue">VENUE</a></li>
            <li><a href="/program">PROGRAM</a></li>
            <li><a href="/rsvp">RSVP</a></li>
        </ul>
    </nav>)
}