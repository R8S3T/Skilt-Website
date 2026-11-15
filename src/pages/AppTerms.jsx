import React from 'react';
import {useParams,Link} from 'react-router-dom';
import Header from '../components/Header';
import terms from '../data/appTerms.json';
import '../styles/AGB.css';
export default function AppTerms(){const {kind}=useParams();const d=Object.prototype.hasOwnProperty.call(terms,kind)?terms[kind]:null;if(!d)return <main><h1>Seite nicht gefunden</h1><Link to="/agb">Zu den Nutzungsbedingungen</Link></main>;return <><Header/><main className="agb-container"><article className="agb-frame"><Link to="/agb">Alle Nutzungsbedingungen</Link><h1>{d.title}</h1><p>Version {d.version} · Stand {d.date}</p><p><a href={`/recht/${kind}-${d.version}.txt`} download>Als Textdatei speichern</a></p>{d.sections.map((s,i)=><section key={s.title}><h2>{i+1}. {s.title}</h2>{s.paragraphs.map((p,j)=><p key={j} style={{whiteSpace:'pre-line',overflowWrap:'anywhere'}}>{p}</p>)}</section>)}</article></main></>;}
