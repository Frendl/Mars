class NASAAPI {

    fetchPhotos(camera, callback) {
        if (camera != '') {
            camera = '&camera=' + camera
        }
        let sol = '1000'
        let apiKey = 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB'

        let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + sol + camera + '&api_key=' + apiKey
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    console.log(responseJson)
                    if (callback) {
                        callback(responseJson)
                    }
                }
            })
            .catch((error) => {
                console.error(error)
            });

    }
}

const nasaApi = new NASAAPI()
export default nasaApi