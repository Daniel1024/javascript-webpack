export default class Photos {
    async getPhotos() {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        return await res.json();
    }
}
