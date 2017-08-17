class NASAAPI {

    fetchPhotos(store, callback) {
        let camera = null
        if (store.camera.name != '') {
            camera = '&camera=' + store.camera.name
        }
        let sol = '3'
        let apiKey = 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB'

        let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + sol + camera + '&api_key=' + apiKey
        store.loadingData = true
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    console.log(responseJson)
                }
                if (callback) {
                    callback(responseJson)
                }
            })
            .catch((error) => {
                console.error(error)
            });

    }
}

const nasaApi = new NASAAPI()
export default nasaApi