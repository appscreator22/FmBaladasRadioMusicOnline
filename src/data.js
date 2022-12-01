import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Baladas del Recuerdo",
            artist: "BaladasdelRecuerdo",
            cover: "https://img.freepik.com/vector-gratis/marco-neon-vivo-aire_23-2148758076.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://hoth.alonhosting.com:3085/stream",
            active: true,
        },
        {
            name:"Baladas en linea",
            artist: "Baladasenlinea",
            cover: "https://img.freepik.com/vector-gratis/texto-plano-dia-mundial-radio_23-2148825802.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://stream20.usastreams.com/8104/stream",
            active: false,
        },
        {
            name:"Suave FM",
            artist: "SuaveFM",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://sp.totalstreaming.net:8156/;stream.nsv",
            active: false,
        },
        {
            name:"Palpitar Stereo",
            artist: "PalpitarStereo",
            cover: "https://img.freepik.com/foto-gratis/dispositivo-digital-inalambrico-auriculares-rosa_53876-96804.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://cast1.asurahosting.com/proxy/oxigenof/stream",
            active: false,
        },
        {
            name:"Romantica 90 FM",
            artist: "Romantica90FM",
            cover: "https://img.freepik.com/vector-gratis/fondo-retro-dia-mundial-radio_23-2147594195.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://puertoplataradio.com/8016/stream",
            active: false,
        },
        {
            name:"Rádio Mil",
            artist: "RádioMil",
            cover: "https://img.freepik.com/vector-gratis/fondo-onda-ecualizador-colorido_52683-33072.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://radio4.domint.net:8066/stream",
            active: false,
        },
        {
            name:"Rádio Love Hits",
            artist: "RádioLoveHits",
            cover: "https://img.freepik.com/psd-gratis/maqueta-reproductor-multimedia-rose-gold-maqueta-reproductor-multimedia-rose-gold-3d_106244-1745.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://ssl.ahtvox.com.br:7028/;",
            active: false,
        },
        {
            name:"FIERAMIX LA ROMÁNTICA",
            artist: "FIERAMIXLAROMÁNTICA",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41311.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://c15.radioboss.fm:18222/stream",
            active: false,
        },
    ];
}

export default chillHop;


