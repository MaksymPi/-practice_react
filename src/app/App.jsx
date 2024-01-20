import { BrowserRouter } from "react-router-dom"


import Header from "../components/Header/Header"
import CategorySection from "../components/CategorySection/CategorySection";
import TabsSection from "../components/TabsSection/TabsSection";
import FeedbackSection from '../components/FeedbackSection/FeedbackSection'
import { useState } from "react";
import EffectSection from "../components/EffectSection/EffectSection";
import AppRouter from "./AppRouter";

// function App() {
//   const [tab, setTab] = useState('Home')

//   return (
//     <>
//       <Header />
//       <main>
//         <TabsSection active={tab} onChange={(current)=> setTab(current)} />

//         {tab === 'Home' && (
//           <>
//             <CategorySection />
//           </>
//         )}

//         {tab === 'Feedback' && <FeedbackSection />}

//         {tab === 'Effect' && <EffectSection />}
//       </main>
//     </>
//   );
// }

// export default App;



import React from 'react'

const App = () => {
  return <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>
}

export default App

