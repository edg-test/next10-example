export default function handler(req, res) {

    const version = "10.1.3"

    res.status(200).json({time: new Date().toLocaleString(), precise: Date.now(), version})
}