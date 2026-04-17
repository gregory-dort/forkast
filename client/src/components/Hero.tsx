import { useAuth } from '../contexts/AuthContext';

type HeroProps = {
    scrollToSchedule: () => void;
}

const Hero = ({scrollToSchedule }: HeroProps) => {
    const user = useAuth();

    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(today);

    return (
        <div className="bg-mint flex flex-row mt-20">
            <div className="w-1/2 mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">Welcome back, {user?.name}</h1>
                <p className="text-xl mb-8 text-charcoal">Today's date is: {formattedDate}</p>
            </div>
            <div className='w-1/2 flex flex-col'>
                {/* Small Meals Card Here */}
                <div className=''>

                </div>
                {/* Schedule for the current day with a buutton to look at schedule for the week */}
                <div className=''>
                    <button onClick={scrollToSchedule} className='bg-forest-green hover:bg-deep-green text-warm-brown py-2 px-4 rounded-md'>
                        View Schedule for This Week
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;