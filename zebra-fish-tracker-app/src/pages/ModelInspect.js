import Navbar from '../components/Navbar'
import SlideImages from '../components/SlideImages'
import { ModelCarouselImages } from '../utils/images';
import PerformanceMetrics from '../components/PerformanceMetrics';
import TrainingCurves from '../components/TrainingCurves';
import TrainingLogs from '../components/TrainingLogs';

export default function ModelInspect() {

    return (
        <div>
            <Navbar />
            <div className="container mt-5" style={{ maxheight: "30%" }}>
                <SlideImages images={ModelCarouselImages} height="500px" captionHeader="" captionText="" />
            </div>
            <div className="container mt-5 mb-3">
                <TrainingLogs />
            </div>
            <div className="container mt-5 mb-3">
                <TrainingCurves />
            </div>
            <div className="container mt-5 mb-3">
                <PerformanceMetrics />
            </div>

        </div >
    )
}
