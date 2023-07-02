import Header from "./header";
import FancyButton from "./fancyButton";

export default App = () => {
    return (
        <>
            <Header />
            <main>
                <p>Typical app structure</p>
                <FancyButton>
                    Click Me!
                </FancyButton>
            </main>
        </>
    )
}