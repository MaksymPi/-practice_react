
import Header from "./Header/Header"
import SectionAttributes from "./SectionAttributes/SectionAttributes";
import TabsSection from "./TabsSection/TabsSection";
import FeedbackSection from './FeedbackSection/FeedbackSection'
import { useState } from "react";

function App() {
  const [tab, setTab] = useState('Feedback')

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
      </main>
    </>
  );
}

export default App;
