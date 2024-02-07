const baseURL =
    'https://api.airtable.com/v0/appRqFTbqDUEC8paK/Photos?view=Grid%20view';
const headers = {
    Authorization:
        'Bearer patTMiIY9vZDQCXLd.ee2859aa3dff448b3e0d45d9be1165606e0b09a2c30350adf0370b89f8881d63',
};

function FetchComponent(setPhotoData) {
    fetch(baseURL, { headers })
        .then((res) => res.json())
        .then(({ records }) => {
            const fields = records.map((r) => r.fields);
            setPhotoData(fields);
        })
        .catch((err) => {
            console.log(err);
        });
}

export default FetchComponent