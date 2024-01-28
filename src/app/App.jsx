import { BrowserRouter } from "react-router-dom"


// import Header from "../components/Header/Header"
// import CategorySection from "../components/CategorySection/CategorySection";
// import TabsSection from "../components/TabsSection/TabsSection";
// import FeedbackSection from '../components/FeedbackSection/FeedbackSection'
// import { useState } from "react";
// import EffectSection from "../components/NamesOfHeroes/NamesOfHeroes";
import AppRouter from "./AppRouter";

import './App.css'

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
import AppLayout from "./AppLayout/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App

