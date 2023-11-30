import { Link } from 'react-router-dom';
import err from '../assets/404.gif'
const ErrorPage = () => {
    return (
        <div>
            <div className="container mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-screen">
                <div className='border'>
                <img className='md:w-3/4 w-full ml-auto ' src={err} alt="" />
                </div>
                <div className='h-full flex justify-center flex-col items-center'>
                    <div>
                        <h2 className='font-newsTitle font-bold text-3xl'>Page Not Found</h2>
                    </div>
                    <div>
                    <Link className='btn btn-primary m-2' to={-1}>Go Back</Link>
                    <Link className='btn btn-primary m-2' to={'/'}>Go Home</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;