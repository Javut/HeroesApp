import {Routes, Route} from 'react-router-dom';



import {DcScreen} from '../components/dc/DcScreen';
import { Hero } from '../components/hero/Hero';
import {Marvel} from '../components/marvel/Marvel'
import {SearchScreen} from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">

                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="hero/:heroeId" element={<Hero/>} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="/" element={<Marvel />} />
                </Routes>
            </div>
           
        </div>
    )
}
