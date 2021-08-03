import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTour from './Components/NavbarTour';
import Home from './Components/Home';
import { Route } from 'react-router-dom';
import ListTour from './Components/ListTour';
import AddTour from './Components/AddTour';
import Child from './Components/Child';
import { useEffect } from "react";

function App() {

  const [tour,setTour] = useState(
    [{title : 'Tunisie', posterURL : '/1.jpg', description : 'La position géographique de la Tunisie au sud du bassin méditerranéen, avec 1 300 kilomètres de côtes en grande partie sablonneuses, un climat méditerranéen chaud l été et doux l hiver, un patrimoine civilisationnel très riche (huit sites inscrits au patrimoine mondial de l Unesco) et surtout un coût bas du séjour touristique, font de ce pays l une des principales destinations des touristes européens en Afrique et dans le monde arabe.',price : 2000, id : 1},
     {title : 'Italie', posterURL : '/2.jpg', description : 'Attachée à l Afrique par la mer et soudée à l Europe par la plaine du Pô et les Alpes, l Italie a une situation géographique favorable au tourisme. L’Italie plaît par ses paysages variés. Elle attire un tourisme balnéaire grâce à sa localisation en plein cœur de la Méditerranée. Elle est entourée de 4 mers : la mer Adriatique, la mer Tyrrhénienne, la mer Ionienne et la mer Méditerranée. ',price : 3000, id : 2},
     { title : 'Grèce', posterURL : '/3.jpg', description : 'La Grèce est un pays d Europe du Sud, au climat méditerranéen : doux en hiver, et chaud en été4. Le pays est divisé entre une partie continentale (Péloponnèse, Macédoine, Épire) et une partie insulaire (Dodécanèse, Crète, Égée). La Grèce continentale est essentiellement montagneuse (Mont Cyllène, Mont Olympe, Pinde). Le climat contribue à rendre le pays très attrayant et façonne durablement le « mode de vie grec » : siestes, vie nocturne animée, repas frais à base de légumes et fruits très variés (comme le tzatziki), comparable à celui des espagnols, des italiens ou du Levant.',price : 4000,id : 3}    
    ]
  ) ;
  const[rec,setRec] = useState(tour);
  const [text,setText] = useState('');

  
  return (
    <div>
      <NavBarTour setText = {setText}/>
      
      <Route exact path='/' component={() => <Home tour={tour} />}/>
      <Route exact path='/voyage' component={() => <ListTour tour={tour} setTour={setTour} text={text} rec = {rec} />}/>
      <Route exact path='/ajoutvoyage' component={() => <AddTour tour = {tour} setTour = {setTour} rec={rec} setRec={setRec} />}/>
      <Route  exact path="/voyage/:slug"  children={<Child tour = {tour} />} /> 
    </div>
  );
}

export default App;
