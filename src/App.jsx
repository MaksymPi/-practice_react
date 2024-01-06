
import Header from "./components/Header/Header"
import SectionAttributes from "./components/SectionAttributes/SectionAttributes";
import TabsSection from "./components/TabsSection/TabsSection";
import FeedbackSection from './components/FeedbackSection/FeedbackSection'
import { useState } from "react";
import EffectSection from "./components/EffectSection/EffectSection";

function App() {
  const [tab, setTab] = useState('Effect')

  return (
    <>
      <Header />
      <main>
        <TabsSection active={tab} onChange={(current)=> setTab(current)} />

        {tab === 'Home' && (
          <>
            <SectionAttributes />
          </>
        )}

        {tab === 'Feedback' && <FeedbackSection />}

        {tab === 'Effect' && <EffectSection />}
      </main>
    </>
  );
}

export default App;
