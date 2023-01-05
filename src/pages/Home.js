import Products from "../components/Products";

const Home = () => {
    return (
        <>
        <div className="hero py-16">
            <div className="containermx-auto flex items-center justify-between">

                <div className="w-1/2 justify-between px-10">
                    <h6 className="text-lg "><em>Are you hungry?</em></h6>
                    <h1 className="text-3xl md:text-5xl font-bold">Don't wait !</h1>
                    <button className="px-6 py-2 rounded-full text-white fonr-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
                </div>

                <div className="w-1/2">
                    <img className="w-4/5" src="/images/pizza.png" alt="pizza" />
                </div>

            </div>
        </div>

       <div className="pb-24">
        <Products/>
       </div>
       </>
    )
}

export default Home;