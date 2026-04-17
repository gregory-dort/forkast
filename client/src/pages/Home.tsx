import { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Hero } from '../components';
import { ScheduleCard, MealCard } from '../pages';

const Home = () => {
    const { isAuthenticated } = useAuth();
    const scheduleRef = useRef<HTMLDivElement>(null);

    const scrollToSchedule = () => {
        scheduleRef.current?.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <div className = "bg-cream min-h-screen">
            <Hero scrollToSchedule={scrollToSchedule} />
            <main ref={scheduleRef}>
                <ScheduleCard />
                <MealCard />
            </main>
        </div>
    )
}

export default Home;