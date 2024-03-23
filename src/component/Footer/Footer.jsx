

const Footer = () => {
    return (
        <footer className="mt-32 bg-[#1A1919] py-32">
            <section className="max-w-screen-xl mx-auto flex justify-between border-b pb-12">
                <div className="max-w-80">
                    <h1 className="text-white text-3xl font-bold">CareerHub</h1>
                    <p className="text-[rgba(255,255,255,0.70)] mt-4">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                <div>
                    <h3 className="text-white text-xl font-medium">Company</h3>
                    <ul className="text-[rgba(255,255,255,0.70)] text-base font-normal space-y-3 mt-4">
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                <h3 className="text-white text-xl font-medium">Product</h3>
                    <ul className="text-[rgba(255,255,255,0.70)] text-base font-normal space-y-3 mt-4">
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                <h3 className="text-white text-xl font-medium">Support</h3>
                    <ul className="text-[rgba(255,255,255,0.70)] text-base font-normal space-y-3 mt-4">
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                <h3 className="text-white text-xl font-medium">Contact</h3>
                    <ul className="text-[rgba(255,255,255,0.70)] text-base font-normal space-y-3 mt-4">
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;