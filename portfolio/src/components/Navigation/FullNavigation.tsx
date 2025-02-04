import PageSettings from "./PageSettings";

export default function FullNavigation() {
    return (
        <div className="w-full flex flex-col relative">
            <div className="w-fit right-0 absolute">
                <PageSettings />
            </div>
        </div>
    )
}