import useUser from "../../hook/useUser";
import CountUp from 'react-countup';
const Statistic = () => {
    const [users] = useUser()
    return (
        <div className="container mx-auto bg-base-200 my-10 p-5">
            <div className="text-center pb-5">
                <h2 className="text-3xl font-newsTitle">Statistic</h2>
                <p className="text-slate-400">Dive into a diverse range of topics from around the globe, providing you <br /> with a comprehensive understanding of world events.</p>
            </div>
            <div className="bg-base-100 p-3 rounded-md">
                <div className="grid items-center text-center grid-cols-1 md:grid-cols-3">
                    <div className="md:border-r-2">
                        
                        <div>
                            <CountUp 
                            start={0} 
                            end={users.length} 
                            delay={1}
                            duration={8}
                            
                            
                            >
                                {({ countUpRef }) => (
                                    <div className="text-7xl font-extrabold text-blue-300">
                                        <span ref={countUpRef} />
                                    </div> 
                                )} 
                            </CountUp>
                        </div>
                        <h3 className="uppercase text-slate-500">All User</h3>
                    </div>
                    <div className="md:border-r-2">
                    <div>
                            <CountUp 
                            start={0} 
                            end={users.length} 
                            delay={1}
                            duration={8}
                            
                            
                            >
                                {({ countUpRef }) => (
                                    <div className="text-7xl font-extrabold text-emerald-300">
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <h3 className="uppercase text-slate-500">Normal User</h3>
                    </div>
                    <div>
                    <div>
                            <CountUp 
                            start={0} 
                            end={0} 
                            delay={1}
                            duration={8}
                            
                            
                            >
                                {({ countUpRef }) => (
                                    <div className="text-7xl font-extrabold text-pink-500">
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <h3 className="uppercase text-slate-500">All User</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Statistic;