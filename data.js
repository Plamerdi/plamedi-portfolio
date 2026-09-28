const KEY='plamedi_portfolio_v1';
const DEFAULTS={
name:'PLAMEDI TSHIKONDE',photo:'',
about:["Je suis PLAMEDI TSHIKONDE, designer graphique, monteur vidéo, community manager et créateur de contenus.","Je conçois des solutions visuelles destinées à renforcer l'identité, la communication et la présence digitale des marques et organisations.","Mon approche combine créativité, stratégie et exigence visuelle afin de transformer chaque idée en une communication claire, moderne et professionnelle."],
stats:[["3+","Années d'expérience"],["100+","Projets réalisés"],["4","Domaines créatifs"],["100%","Engagement professionnel"]],
skills:[["Adobe Photoshop",70],["Adobe Illustrator",55],["Adobe Premiere Pro",50],["CapCut",90]],
domains:["Design graphique","Montage vidéo","Communication digitale","Community management","Création de contenu"],
cats:["Tous","Design graphique","Identité visuelle","Affiches","Flyers","Vidéo","Communication digitale","Réseaux sociaux"],
services:[
{ic:"🎨",t:"Design graphique",d:"Création de visuels professionnels pour entreprises, marques, événements et organisations."},
{ic:"🖼️",t:"Affiches & supports publicitaires",d:"Affiches, flyers, visuels promotionnels et supports de communication."},
{ic:"🔷",t:"Identité visuelle",d:"Création d'une identité cohérente et professionnelle pour les marques."},
{ic:"✒️",t:"Création de logos",d:"Conception de logos modernes, mémorables et adaptés à l'image de marque."},
{ic:"🎬",t:"Montage vidéo",d:"Montage de vidéos pour réseaux sociaux, événements, communication et promotion."},
{ic:"📣",t:"Community Management",d:"Gestion et animation de communautés sur les réseaux sociaux."},
{ic:"📱",t:"Création de contenu",d:"Conception de contenus visuels et digitaux adaptés aux différentes plateformes."},
{ic:"💬",t:"Communication digitale",d:"Création de supports et contenus permettant aux marques de mieux communiquer en ligne."}],
projects:[
["Affiche — projet exemple","Affiches"],["Identité visuelle — projet exemple","Identité visuelle"],["Flyer — projet exemple","Flyers"],
["Montage vidéo — projet exemple","Vidéo"],["Visuels réseaux sociaux — projet exemple","Réseaux sociaux"],["Logo — projet exemple","Design graphique"]
].map(p=>({title:p[0],category:p[1],image:"",description:"Emplacement prêt pour votre réalisation. Ajoutez votre image et votre description depuis l'administration."})),
email:"ptshikonde@gmail.com",phone:"+243 816 490 530",
social:{whatsapp:"",facebook:"#",instagram:"#",tiktok:"#",linkedin:"#"},
terms:["80% d'acompte avant le début du projet","20% à la livraison","Tout travail réalisé et non utilisé reste dû selon les conditions convenues.","Les conditions spécifiques peuvent être définies avec le client avant le début du projet."]
};
function loadData(){try{return Object.assign({},DEFAULTS,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){return Object.assign({},DEFAULTS)}}
function saveData(d){try{localStorage.setItem(KEY,JSON.stringify(d));return true}catch(e){alert("Enregistrement impossible : espace du navigateur plein. Utilisez des images plus légères.");return false}}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function ph(t){return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#0B0B77'/><stop offset='1' stop-color='#56208F'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><circle cx='650' cy='120' r='90' fill='white' fill-opacity='.08'/><text x='400' y='310' font-family='Arial' font-size='32' font-weight='700' fill='white' fill-opacity='.9' text-anchor='middle'>${esc(t)}</text></svg>`)}
function compress(file,max,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.82))};im.src=r.result};r.readAsDataURL(file)}
