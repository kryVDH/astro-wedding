import { Children, useState, type ReactPropTypes } from "react";

const Nav = (props: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
    <>
        <nav className={"transition-all block lg:hidden w-full fixed top-0 z-30" + (isOpen ? " open" : " closed")} style={{boxShadow:  "0px 3px 6px #555"}}>
            <ul className="list-none flex flex-nowrap p-2 items-center gap-4 px-4">
                <li><button className="relative h-10 w-10 z-50" onClick={toggleOpen}>
                    { props.children }
                </button></li>
                <li className="font-dancing text-2xl text-black whitespace-nowrap"><a href="/">Kyle & Jasmine</a></li>
                <li><a className="ml-auto" href="/rsvp">RSVP</a></li>
            </ul>
            <div className={"transition-all h-screen w-full md:w-1/2 z-40 absolute top-0 left-0 wed-bg-tan" + (!isOpen ? " -translate-x-full" : " ")} style={{boxShadow:  "0px 3px 6px #555"}}>
                <ul className="list-none flex flex-col flex-nowrap p-2 items-center gap-4 px-4">
                    <li className="font-dancing text-2xl text-black whitespace-nowrap"><a href="/">Kyle & Jasmine</a></li>
                    <li><a href="/rsvp">RSVP</a></li>
                    <li><a href="/venue">VENUE</a></li>
                    <li><a href="/program">PROGRAM</a></li>
                    <li><a href="/hotels">HOTELS</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </div>
        </nav>
        <nav className="hidden lg:block w-full fixed top-0 z-50">
            <ul className="list-none flex flex-nowrap p-2 items-center gap-4 px-4">
                <li className="self-start font-dancing text-2xl text-black whitespace-nowrap"><a href="/">Kyle & Jasmine</a></li>
                <li className="ml-auto"><a href="/rsvp">RSVP</a></li>
                <li><a href="/venue">VENUE</a></li>
                <li><a href="/program">PROGRAM</a></li>
                <li><a href="/hotels">HOTELS</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
        </nav>
    </>)
}

export default Nav;