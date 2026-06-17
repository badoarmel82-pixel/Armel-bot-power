import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 Armel Bot Power Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `Armel Bot Power-v1`
        )
    }, { quoted: message })
}