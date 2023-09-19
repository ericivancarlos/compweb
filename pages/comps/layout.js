import Header from "@/pages/comps/header";
import Footer from "@/pages/comps/footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;