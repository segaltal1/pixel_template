// import waveSvg from '../assets/img/bg-shorten-desktop.svg'

export const AppFilter = () => {
    return (
        <section className="app-filter flex align-center main-container">
            {/* <img src={waveSvg} alt="" /> */}
            <input type="text" placeholder="Shorten a link here..." />
            <button>Shorten It!</button>
        </section>
    )
}