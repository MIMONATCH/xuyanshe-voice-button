import { useSelector } from "react-redux";
import { Fragment, Suspense, lazy } from "react";
import AudioPanel from '../../Panel/AudioPanel'
import FriendBtn from "../../utills/FriendBtn";
import Loading from "../../utills/Loading";
import Dynamic from "../../utills/Dynamic";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function Reine(){
    const voice = useSelector(state => state.getVoiceData.reine);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Loading />} >
                    <AnnoPanel up="兰音"/>
                </Suspense>
                <Dynamic uid="698029620" />
                <Suspense fallback={<Loading />} >
                    <VoicePanel voice={voice} theme="reine"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="reine"/>
        </Fragment>
    );
}

export default Reine;