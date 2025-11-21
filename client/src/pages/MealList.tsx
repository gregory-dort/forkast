import { SectionCard } from "../components";

const MealList = () => {
    return (
        <section id = "meal-list" className = "py-24 container mx-auto px-4">
            <h1 className = "text-3xl font-serif font-bold mb-8 text-center text-white"> 
                    Meal List
            </h1>
            <SectionCard>
                {/* Insert Meal List Component */}
            </SectionCard>
        </section>
    );
}

export default MealList;