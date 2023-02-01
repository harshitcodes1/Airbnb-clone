function Footer() {
    return(
        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-4 text-gray-600 gap-y-10 px-32 py-14">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Inventors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not the real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>Nextjs</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p className="cursor-pointer"> <a href="https://github.com/harshitcodes1">Github: harshitcodes1</a></p>
                <p className="cursor-pointer"> <a href= "https://www.linkedin.com/in/harshit-jain-bb883a190">LinkedIn: Harshit Jain</a></p>
                <p>Tailwind CSS</p>
                <p>APIs</p>
                <p>Airbnb</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Reactjs</p>
                <p>Privacy Policy</p>
                <p>Airbnb Luxe</p>
            </div>
           
        </div>
    )
} 

export default Footer