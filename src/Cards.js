import { People } from '@mui/icons-material';
import React, {useState , useRef} from 'react';
import TinderCard from 'react-tinder-card';
import "./css/Cards.css";

const Cards = () => {

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    }

    const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    }



    const [All, setPerson] = useState([
    {
        name:'jiahao',
        url:'https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.18172-8/25790965_1525204464274802_7298157781929926405_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=HQu3PJ19bSMAX-ZA3h5&tn=N62TJQJD-iaqxzzn&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDszE1xNbDrx9g36sWj_zTzoOKU04ZjWL4eDNAUs8vNCw&oe=63CD5AFD'
    },
    {
        name:'english',
        url:'https://images.chinatimes.com/newsphoto/2020-04-22/900/20200422001990.jpg'
    },
    {
        name:'fat guy',
        url:'https://th.bing.com/th/id/OIP.A0u2nn-OQLpevbcypF_CQwHaFJ?pid=ImgDet&rs=1'
    },
    {
        name:'toyz',
        url:'https://yt3.ggpht.com/a/AGF-l795EWdvCb4mm3sn0h8Dhip0tKS3vThNIBLYZA=s900-mo-c-c0xffffffff-rj-k-no'
    }
    ]);
    return(
        <div className='card-layer'>
            {All.map(person =>(
                <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>
    );
};

export default Cards;