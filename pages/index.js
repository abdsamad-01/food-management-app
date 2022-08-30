import { useState } from 'react';
import { Header, Categories, Cart, FoodLists } from '../components';


function Home() {
    const [userInput, setUserInput] =useState('');
    const [selectedCategory, setSelectedCategory] = useState('HotDishes');

    return (
        <div className='flex w-full gap-4 flex-row bg-bg-dark-1 min-h-screen'>
            <div className='w-8/12 md:w-full p-4 sm:px-3 min-h-screen'>
                <Header 
                    userInput={userInput}
                    setUserInput={setUserInput}
                />
                <Categories 
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <FoodLists 
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            <div className='w-4/12 md:hidden bg-bg-dark-2'>
                <Cart />
            </div>
            
        </div>
    )
}

export default Home;



