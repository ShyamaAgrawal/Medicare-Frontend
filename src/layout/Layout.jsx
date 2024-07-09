import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Routers from "../routes/Routers"

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    )
}

export default Layout