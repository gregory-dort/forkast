import { useState } from 'react';
import { Header, Footer, SideNavbar } from '../components';
import { Hero, ScheduleCard, MealList } from '../pages';

const Home = () => {
    
    return (
        <div className = "bg-[#cbd5c0]">
            
            <Header />
            <Hero />
            <main className = "min-h-screen flex flex-row md:flex-col items-center mt-16 md:mt-24">
                <ScheduleCard />
                <MealList />
            </main>
            <Footer />
        </div>
    )
}

export default Home;