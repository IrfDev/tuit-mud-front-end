const peeps = ["dani", "pepe", "lola", "stanley"]

export default function({ store }) {
    if (store.state.activePeep === undefined) {
        let randomNumber = Math.ceil(Math.random() * 4)
        store.state.activePeep = peeps[randomNumber - 1]
    }
}