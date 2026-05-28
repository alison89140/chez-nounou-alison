import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Search, Download, Mail, BookOpen, Utensils, Palette, Sparkles, Leaf, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const recipes = [
  { title: 'Pain perdu', category: 'Goûter', emoji: '🍞', file: '/fiches/recettes/pain-perdu.pdf' },
  { title: 'Gaufres', category: 'Goûter', emoji: '🧇', file: '/fiches/recettes/gaufres.pdf' },
  { title: 'Pâte à crêpe', category: 'Base', emoji: '🥞', file: '/fiches/recettes/pate-a-crepe.pdf' },
  { title: 'Pâte à pizza', category: 'Base', emoji: '🍕', file: '/fiches/recettes/pate-a-pizza.pdf' },
  { title: 'Mini-croissants au jambon', category: 'Salé', emoji: '🥐', file: '/fiches/recettes/mini-croissants-jambon.pdf' },
  { title: 'Cake jambon gruyère', category: 'Salé', emoji: '🧀', file: '/fiches/recettes/cake-jambon-gruyere.pdf' },
  { title: 'Financiers', category: 'Goûter', emoji: '🍰', file: '/fiches/recettes/financiers.pdf' },
  { title: 'Banana bread', category: 'Goûter', emoji: '🍌', file: '/fiches/recettes/banana-bread.pdf' },
];

const activities = [
  { title: 'Bain de boue des animaux', category: 'Sensoriel', emoji: '🐷', file: '/fiches/activites/bain-de-boue-animaux.pdf' },
  { title: 'Peinture propre', category: 'Tout-petits', emoji: '🎨', file: '/fiches/activites/peinture-propre.pdf' },
  { title: 'Trésors glacés à sauver', category: 'Sensoriel', emoji: '🧊', file: '/fiches/activites/tresors-glaces.pdf' },
  { title: 'Chasse au trésor nature', category: 'Nature', emoji: '🍃', file: '/fiches/activites/chasse-tresor-nature.pdf' },
  { title: 'Collage de fleurs sur scotch', category: 'Nature', emoji: '🌸', file: '/fiches/activites/collage-fleurs-scotch.pdf' },
  { title: 'Peinture sur galets', category: 'Créatif', emoji: '🪨', file: '/fiches/activites/peinture-sur-galet.pdf' },
  { title: 'Jardin miniature', category: 'Nature', emoji: '🌿', file: '/fiches/activites/jardin-miniature.pdf' },
  { title: 'Bulles colorées à éclater', category: 'Créatif', emoji: '🫧', file: '/fiches/activites/bulles-colorees.pdf' },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [ ['#recettes','Recettes'], ['#activites','Activités'], ['#livret','Livret d’accueil'], ['#contact','Contact'] ];
  return <header className="nav"><div className="container nav-inner"><a className="brand" href="#top"><span>Chez</span><strong>Nounou Alison</strong></a><nav className="desktop-links">{links.map(([href,label])=><a key={href} href={href}>{label}</a>)}</nav><button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></div>{open && <div className="mobile-panel">{links.map(([href,label])=><a key={href} onClick={()=>setOpen(false)} href={href}>{label}</a>)}</div>}</header>
}
function Hero(){return <section id="top" className="hero"><div className="container hero-grid"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}><div className="pill"><Heart size={16} fill="currentColor"/> Idées simples, douces et ludiques</div><h1>Bienvenue chez Nounou Alison</h1><p className="lead">Des recettes faciles, des activités sensorielles et naturelles, et des supports pensés pour accompagner les enfants au quotidien.</p><div className="actions"><a className="btn primary" href="#activites">Découvrir les activités</a><a className="btn soft" href="#recettes">Voir les recettes</a></div></motion.div><motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}} className="hero-card"><div className="photo-placeholder"><span className="big">🌸</span><strong>Ton visuel d’accueil ici</strong><small>On remplacera cette zone par ton image validée</small></div></motion.div></div></section>}
function SectionTitle({icon:Icon,title,sub}){return <div className="section-title"><div className="eyebrow"><Icon size={18}/><span>{sub}</span></div><h2>{title}</h2></div>}
function Gallery({id,type,items,title,sub,icon}){const [q,setQ]=useState(''); const cats=['Tous',...Array.from(new Set(items.map(i=>i.category)))]; const [cat,setCat]=useState('Tous'); const filtered=useMemo(()=>items.filter(i=>(cat==='Tous'||i.category===cat)&&i.title.toLowerCase().includes(q.toLowerCase())),[q,cat,items]); return <section id={id} className="section"><div className="container"><SectionTitle icon={icon} title={title} sub={sub}/><div className="filters"><div className="search"><Search size={16}/><input placeholder="Rechercher..." value={q} onChange={e=>setQ(e.target.value)}/></div><div className="chips">{cats.map(c=><button className={c===cat?'active':''} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div></div><div className="grid">{filtered.map(item=><motion.article whileHover={{y:-4}} className="card" key={item.title}><div className={`thumb ${type}`}><span>{item.emoji}</span></div><div className="card-body"><small>{item.category}</small><h3>{item.title}</h3><a className="download" href={item.file} download><Download size={16}/> Télécharger la fiche</a></div></motion.article>)}</div></div></section>}
function Livret(){return <section id="livret" className="feature"><div className="container feature-grid"><div className="feature-box"><BookOpen/><h2>Livret d’accueil</h2><p>Un espace pour présenter mon fonctionnement, mes valeurs, le quotidien des enfants et les informations essentielles aux familles.</p><a className="btn primary" href="/fiches/livret-accueil.pdf" download>Télécharger le livret</a></div><div className="feature-box pale"><Sparkles/><h2>Un univers simple et chaleureux</h2><p>Des idées pensées pour être jolies, accessibles, réalistes et faciles à refaire avec les enfants.</p></div></div></section>}
function Contact(){return <footer id="contact" className="footer"><div className="container"><Mail/><h2>Une question, une idée, un besoin particulier ?</h2><p>Je suis à votre écoute avec plaisir.</p><a href="mailto:alison-hard@live.fr" className="btn soft">Me contacter</a><small>© Chez Nounou Alison</small></div></footer>}
function App(){return <><Nav/><Hero/><Gallery id="recettes" type="recipe" items={recipes} title="Recettes gourmandes" sub="À cuisiner avec les enfants" icon={Utensils}/><Gallery id="activites" type="activity" items={activities} title="Activités ludiques" sub="Nature, sensoriel et créativité" icon={Palette}/><Livret/><Contact/></>}

createRoot(document.getElementById('root')).render(<App/>);
