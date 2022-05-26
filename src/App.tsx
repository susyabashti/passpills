import { Fragment } from "react";
import { Footer } from "./components/Footer";
import { MainContainer } from "./components/MainContainer";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <MainContainer>
                <Section />
            </MainContainer>
            <Footer />
        </Fragment>
    );
}

export default App;